export function telao() {
    const totalReceitas = document.querySelectorAll('.itens-receita');
    const telaTotalReceitas = document.querySelector('.total-receitas');
    const dificuldadeReceitas = document.querySelector('.dificuldade-receitas');

    telaTotalReceitas.innerHTML = `
    <h4>${totalReceitas.length}</h4>
    `
    dificuldadeReceitas.innerHTML = `
    <h4>Fácil</h4>
    `
}