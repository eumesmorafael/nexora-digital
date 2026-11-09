
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
