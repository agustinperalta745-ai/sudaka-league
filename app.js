const WHATSAPP_PES6 = "https://chat.whatsapp.com/DvRyA2bxAC67x0ulPQYvCa?mode=gi_t";
const WHATSAPP_SF =
"https://chat.whatsapp.com/DvRyA2bxAC67x0ulPQYvCa?mode=gi_t";

document.getElementById("btn-pes6").href = WHATSAPP_PES6;
document.getElementById("btn-sf").href = WHATSAPP_SF;

document.querySelectorAll(".liga-card").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById(card.dataset.panel).classList.remove("hidden");
    });
});

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.add("hidden");
    });
});

document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.copy;
        navigator.clipboard.writeText(document.getElementById(id).value);
        btn.textContent = "✔ Copiado";
        setTimeout(() => btn.textContent = "📋 Copiar mensaje", 1500);
    });
});

document.getElementById("top").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
