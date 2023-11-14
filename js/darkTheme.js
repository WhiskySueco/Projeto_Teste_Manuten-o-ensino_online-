const chk = document.getElementById('chk');

// Verifica o status do modo escuro no armazenamento local
const modoEscuroAtivo = localStorage.getItem('modoEscuro') === 'true';

// Ativa o modo escuro se estiver definido no armazenamento local
if (modoEscuroAtivo) {
    ativarModoEscuro();
}

chk.addEventListener('change', () => {
    // Verifica se o modo escuro está atualmente ativado
    const modoEscuroAtualmenteAtivo = document.body.classList.contains('dark');

    // Alterna o estado do modo escuro
    if (modoEscuroAtualmenteAtivo) {
        desativarModoEscuro();
    } else {
        ativarModoEscuro();
    }
});

function ativarModoEscuro() {
    // Adiciona a classe para ativar o modo escuro
    document.body.classList.add('dark');
    // Atualiza o status no armazenamento local
    localStorage.setItem('modoEscuro', true);
}

function desativarModoEscuro() {
    // Remove a classe para desativar o modo escuro
    document.body.classList.remove('dark');
    // Atualiza o status no armazenamento local
    localStorage.setItem('modoEscuro', false);
}
