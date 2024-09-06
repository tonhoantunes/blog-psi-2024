// Filtro JS
$(document).ready(function () {
    $("filtro-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value = "todos") {
            $("post-caixa").show("1000");
        }
        else{
            $("post-caixa").not("." + value).hide("1000");
            $("post-caixa").filter("." + value).show("1000");
        }
    });
    // Adicionando botão ativo
    $(".filtro-item").click(function () {
        $(this).addClass("filtro-ativo").siblings().removeClass("filtro-ativo");
    });
});

//Mudar Background do Cabeçalho ao Scrollar
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});