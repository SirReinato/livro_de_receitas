export function carrossel01() {
  const almoco = document.querySelector('[data-slide="almoco"]');
  const paes = document.querySelector('[data-slide="paes"]');
  const lanches = document.querySelector('[data-slide="lanches"]');
  const pizzas = document.querySelector('[data-slide="pizza"]');

  const btnProximo = document.querySelectorAll(".proxima");
  const btnRetornar = document.querySelectorAll(".retornar");

  var valorDoEixo = 0;
  let mais = -344;
  let menos = +344;
  const valorDoEixoZerado = 0;
  const naoPassar = -1720;

  // btn para o proximo item do carrossel
  btnProximo.forEach((exato) => {
    exato.addEventListener("click", (qualFoiEm) => {
      const local = qualFoiEm.currentTarget.id;

      if (local === "almoco") {
        proximo(almoco);
      }
      if (local === "paes") {
        proximo(paes);
      }
      if (local === "lanches") {
        proximo(lanches);
      }
      if (local === "pizzas") {
        proximo(pizzas);
      }
    });
  });

  // btn para voltar os itens do carrossel
  btnRetornar.forEach((exato) => {
    exato.addEventListener("click", (qualFoiEm) => {
      const local = qualFoiEm.currentTarget.id;
      if (local === "almoco") {
        retornar(almoco);
      }
      if (local === "paes") {
        retornar(paes);
      }
      if (local === "lanches") {
        retornar(lanches);
      }
      if (local === "pizzas") {
        retornar(pizzas);
      }
    });
  });

  // funções de proximo e retornar
  function proximo(next) {
    valorDoEixo += mais;
    next.style.transform = `translateX(${valorDoEixo}px)`;
  }
  function retornar(retornar) {
    valorDoEixo += menos;
    retornar.style.transform = `translateX(${valorDoEixo}px)`;
  }
}
