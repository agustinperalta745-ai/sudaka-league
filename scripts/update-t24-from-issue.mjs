import fs from 'node:fs';
import path from 'node:path';

const VALID_DIVISIONS = new Set(['primera', 'segunda', 'tercera', 'cuarta']);
const REQUIRED_COLUMNS = ['pos', 'equipo', 'pts', 'pj', 'pg', 'pe', 'pp', 'gf', 'gc', 'dg'];

function parseDelimitedLine(line, delimiter) {
  const cells = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === delimiter) {
      cells.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  cells.push(current.trim());
  return cells;
}

function parseTableRows(table, format) {
  const delimiter = format === 'TSV' ? '\t' : ',';
  const lines = table
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) {
    throw new Error('La tabla está vacía.');
  }

  const parsed = lines.map((line) => parseDelimitedLine(line, delimiter));

  let startIndex = 0;
  const firstCell = (parsed[0][0] ?? '').toLowerCase();
  if (firstCell === 'pos' || Number.isNaN(Number.parseInt(parsed[0][0], 10))) {
    startIndex = 1;
  }

  const rows = parsed.slice(startIndex).map((cells) => {
    const values = REQUIRED_COLUMNS.map((_, index) => cells[index] ?? '');
    const [pos, equipo, pts, pj, pg, pe, pp, gf, gc, dg] = values;

    return {
      pos: Number.parseInt(pos, 10) || 0,
      equipo: equipo.trim(),
      pts: Number.parseInt(pts, 10) || 0,
      pj: Number.parseInt(pj, 10) || 0,
      pg: Number.parseInt(pg, 10) || 0,
      pe: Number.parseInt(pe, 10) || 0,
      pp: Number.parseInt(pp, 10) || 0,
      gf: Number.parseInt(gf, 10) || 0,
      gc: Number.parseInt(gc, 10) || 0,
      dg: Number.parseInt(dg, 10) || 0,
    };
  });

  return rows.filter((row) => row.equipo.length > 0);
}

function extractField(body, fieldName) {
  const regex = new RegExp(`###\\s*${fieldName}\\s*\\n([\\s\\S]*?)(?=\\n###\\s|$)`, 'i');
  const match = body.match(regex);
  if (!match) {
    return '';
  }

  return match[1].trim();
}

function cleanupFieldValue(value) {
  const cleaned = value
    .replace(/^```[a-zA-Z0-9_-]*\n?/, '')
    .replace(/```$/, '')
    .trim();

  const bulletMatch = cleaned.match(/^[-*]\s*(.+)$/m);
  if (bulletMatch && cleaned.split('\n').length === 1) {
    return bulletMatch[1].trim();
  }

  return cleaned;
}

function detectTemplateIssue(body) {
  return /###\s*division/i.test(body) && /###\s*formato/i.test(body) && /###\s*tabla/i.test(body);
}

function shouldProcessIssue(issue) {
  const titleHasTag = /\[T24\]/i.test(issue.title ?? '');
  const hasT24Label = (issue.labels ?? []).some((label) => (label?.name ?? '').toLowerCase() === 't24');
  const templateBased = detectTemplateIssue(issue.body ?? '');

  return titleHasTag || hasT24Label || templateBased;
}

function writeJson(workspace, division, payload) {
  const targets = [
    path.join(workspace, 'public', 'data', 'gesliga', 't24', `${division}.json`),
    path.join(workspace, 'data', 'gesliga', 't24', `${division}.json`),
  ];

  for (const target of targets) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(`Updated ${path.relative(workspace, target)}`);
  }
}

function run() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  const workspace = process.env.GITHUB_WORKSPACE ?? process.cwd();

  if (!eventPath || !fs.existsSync(eventPath)) {
    throw new Error('No se encontró GITHUB_EVENT_PATH.');
  }

  const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
  const issue = event.issue;

  if (!issue) {
    console.log('Evento sin issue, se omite.');
    return;
  }

  if (!shouldProcessIssue(issue)) {
    console.log('Issue sin criterios T24, se omite.');
    return;
  }

  const body = issue.body ?? '';
  const division = cleanupFieldValue(extractField(body, 'division')).toLowerCase();
  const formatRaw = cleanupFieldValue(extractField(body, 'formato')).toUpperCase();
  const table = cleanupFieldValue(extractField(body, 'tabla'));

  if (!VALID_DIVISIONS.has(division)) {
    throw new Error(`División inválida: "${division}". Debe ser una de ${Array.from(VALID_DIVISIONS).join(', ')}.`);
  }

  if (!['CSV', 'TSV'].includes(formatRaw)) {
    throw new Error(`Formato inválido: "${formatRaw}". Debe ser CSV o TSV.`);
  }

  if (!table) {
    throw new Error('No se encontró contenido en "tabla".');
  }

  const rows = parseTableRows(table, formatRaw);
  if (rows.length === 0) {
    throw new Error('No se pudieron obtener filas válidas de la tabla.');
  }

  const payload = {
    source: 'manual_issue',
    division,
    fetchedAt: new Date().toISOString(),
    rows,
  };

  writeJson(workspace, division, payload);
}

run();
