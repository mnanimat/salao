const WHATSAPP_NUMBER = "5575991633332";

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const bookingForm = document.querySelector("#booking-form");
const serviceSelect = document.querySelector("#servico");
const appointmentDateInput = document.querySelector("#data-agendamento");
const feedback = document.querySelector("#form-feedback");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("open", !isOpen);
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("open");
  });
});

document.querySelectorAll(".service-select").forEach((button) => {
  button.addEventListener("click", () => {
    serviceSelect.value = button.dataset.service;
    document.querySelector("#agendamento").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.querySelector("#nome").focus(), 650);
  });
});

function sanitizeLine(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getLocalISODate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDateBR(value) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

appointmentDateInput.min = getLocalISODate();

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = sanitizeLine(document.querySelector("#nome").value);
  const telefone = sanitizeLine(document.querySelector("#telefone").value);
  const servico = sanitizeLine(document.querySelector("#servico").value);
  const dataAgendamento = sanitizeLine(appointmentDateInput.value);
  const periodo = sanitizeLine(document.querySelector("#periodo").value);
  const observacoes = sanitizeLine(document.querySelector("#observacoes").value);
  const consentimento = document.querySelector("#consentimento").checked;

  if (!nome || !telefone || !servico || !dataAgendamento || !periodo || !consentimento) {
    feedback.textContent = "Preencha os campos obrigatórios, escolha uma data e marque a autorização de contato.";
    return;
  }

  if (dataAgendamento < getLocalISODate()) {
    feedback.textContent = "Escolha uma data de hoje em diante.";
    appointmentDateInput.focus();
    return;
  }

  const dataFormatada = formatDateBR(dataAgendamento);

  const mensagem = [
    "Olá! Gostaria de solicitar um agendamento no salão Um Novo Tempo.",
    "",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Serviço: ${servico}`,
    `Data desejada: ${dataFormatada}`,
    `Melhor período: ${periodo}`,
    observacoes ? `Observações: ${observacoes}` : "",
    "",
    "Aguardo a confirmação do horário. Obrigada!"
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  feedback.textContent = "Abrindo o WhatsApp para concluir sua solicitação...";
  window.open(url, "_blank", "noopener,noreferrer");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("#current-year").textContent = new Date().getFullYear();

const modalButtons = document.querySelectorAll("[data-modal]");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");

function openModal(name) {
  const modal = document.querySelector(`#modal-${name}`);
  if (!modal) return;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

modalButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".modal")));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const open = document.querySelector(".modal.is-open");
    if (open) closeModal(open);
  }
});
