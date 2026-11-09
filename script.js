
const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (form && feedback) {

    form.addEventListener("submit", function(event) {

        // Impede o recarregamento da página
        event.preventDefault();

        // Captura os valores dos campos
        const nome = form.elements.nome.value.trim();
        const email = form.elements.email.value.trim();
        const assunto = form.elements.assunto.value.trim();
        const mensagem = form.elements.mensagem.value.trim();

        // Verifica se algum campo está vazio
        if (!nome || !email || !assunto || !mensagem) {
            feedback.textContent = "Preencha todos os campos.";
            feedback.style.color = "#ff7777";
            return;
        }

        // Verifica o formato básico do e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            feedback.textContent = "Digite um e-mail válido.";
            feedback.style.color = "#ff7777";
            return;
        }

        // Exibe a mensagem de sucesso
        feedback.textContent =
            `Obrigado, ${nome}! Seu formulário foi preenchido corretamente.`;

        feedback.style.color = "#8bdfaa";

        // Limpa os campos
        form.reset();

    });

}

/* =====================================
   ACESSIBILIDADE
===================================== */

/* Destaque para navegação pelo teclado */

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 3px solid #b5a5ff;
    outline-offset: 4px;
}

/* Evita animações excessivas para quem prefere movimento reduzido */

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
