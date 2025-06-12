  const btnTopo = document.getElementById("btn-topo");

// Mostrar botão quando rolar 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Scroll suave para o topo
btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

 function mudouTamanho() {
            if (window.innerWidth >= 768) {
            itens.style.display = 'block'
            } else {
                itens.style.display = 'none'
            }
        }

        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }

        }

const botaoTema = document.getElementById("toggle-tema");

// Checar se o usuário já escolheu modo claro
const preferenciaTema = localStorage.getItem("tema");

if (preferenciaTema === "claro") {
    document.body.classList.add("light-mode");
    document.documentElement.classList.add("light-mode"); // Adiciona no <html>
    botaoTema.textContent = "🌙 Modo Escuro";
} else {
    // Modo escuro é padrão
    document.body.classList.remove("light-mode");
    document.documentElement.classList.remove("light-mode");
    botaoTema.textContent = "☀️ Modo Claro";
}

botaoTema.addEventListener("click", function () {
    const isLight = document.body.classList.contains("light-mode");

    document.body.classList.toggle("light-mode", !isLight);
    document.documentElement.classList.toggle("light-mode", !isLight);

    if (isLight) {
        localStorage.setItem("tema", "escuro");
        botaoTema.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("tema", "claro");
        botaoTema.textContent = "🌙 Modo Escuro";
    }
});

const menu = document.querySelector('.navegacao');
const toggleTema = document.getElementById('toggle-tema');
let ultimaPosicaoScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const posicaoAtual = window.scrollY;

  if (posicaoAtual > ultimaPosicaoScroll) {
    // Rolando para baixo
    menu.classList.add('ocultar-topo');
    toggleTema.classList.add('ocultar-topo');
  } else {
    // Rolando para cima
    menu.classList.remove('ocultar-topo');
    toggleTema.classList.remove('ocultar-topo');
  }

  ultimaPosicaoScroll = posicaoAtual;
});



document.getElementById("enviar-whatsapp").addEventListener("click", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e a mensagem.");
        return;
    }

    const texto = `Olá, meu nome é ${nome}.%0A${mensagem}`;
    const numero = "5511987287367"; 

    const link = `https://wa.me/${numero}?text=${texto}`;
    window.open(link, '_blank');
});

  