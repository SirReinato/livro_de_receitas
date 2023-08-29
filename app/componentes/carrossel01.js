export function carrossel01() {
  const btnProxima = document.querySelector("#proxima");
  const btnRetornar = document.querySelector("#retornar");

  const almoco = document.querySelector('[data-slide="almoco"]');
  const paes = document.querySelector('[data-slide="paes"]');
  const lanches = document.querySelector('[data-slide="lanches"]');
  const pizzas = document.querySelector('[data-slide="pizzas"]');

  
  const proximoTeste = document.querySelectorAll(".proxima");
  console.log(proximoTeste);

  proximoTeste.forEach((exato) => {
    exato.addEventListener('click', (qualFoiEm)=>{
      const local = qualFoiEm.currentTarget.id;
      const slide = qualFoiEm.currentTarget.parentNode.getAttribute('data-slide');

      if (local === 'almoco') {
        valorDoEixo += mais;
        almoco.style.transform = `translateX(${valorDoEixo}px)`;
      }
    })

    // queroEsse.addEventListener("click", (esseAqui) => {
    //   esseAqui.currentTarget.addEventListener('click', (esse)=>{
    //     console.log('mais um teste: ' + esse);
    //   });
    //   const slides = document.querySelector(".vitrine-itens");
      
      
    // });
  });
// if (naoPassar === valorDoEixo) {
        //   esse.style.transform = `translateX(${valorDoEixo}px)`;
        // } else {
        //   valorDoEixo += mais;
        //   esse.style.transform = `translateX(${valorDoEixo}px)`;
        //   console.log(valorDoEixo);
        // }
  const valorDoEixoZerado = 0;
  var valorDoEixo = 0;

  let mais = -344;
  let menos = +344;

  const naoPassar = -1720;

  // btnPassar
  // btnProxima.addEventListener("click", () => {
  //   if (naoPassar === valorDoEixo) {
  //     slides.style.transform = `translateX(${valorDoEixo}px)`;
  //   } else {
  //     valorDoEixo += mais;
  //     slides.style.transform = `translateX(${valorDoEixo}px)`;
  //     console.log(valorDoEixo);
  //   }
  // });

  // btnVoltar
  // btnRetornar.addEventListener("click", () => {
  //   if (valorDoEixo === valorDoEixoZerado) {
  //     slides.style.transform = `translateX(${valorDoEixoZerado}px)`;
  //   } else {
  //     valorDoEixo += menos;
  //     slides.style.transform = `translateX(${valorDoEixo}px)`;
  //   }
  // });
}
