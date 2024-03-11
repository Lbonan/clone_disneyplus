document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElementoDoHeader();
    }
  });

  // Seção de atrações, programação das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (btn) {
      const abaAlvo = btn.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      btn.target.classList.add("shows__tabs__button--is-active");
    });
  }

  // seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFechaResposta);
  }
});

function ocultaElementosDoHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function exibeElementoDoHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function abreOuFechaResposta(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementePai = elemento.target.parentNode;

  elementePai.classList.toggle(classe);
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsConteiner = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsConteiner.length; i++) {
    tabsConteiner[i].classList.remove("shows__list--is-active");
  }
}
