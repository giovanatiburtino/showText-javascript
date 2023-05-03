const element = document.querySelector("#text")
const text = "O JavaScript é muito interessante"
const interval = 300; // 300 milisegundos

function showText(el, text, interval){

    const char = text.split("").reverse()

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer); // parar interval quando acabar os caracteres
        }

        const next = char.pop(); // retirando a última letra do elemento com pop

        el.innerHTML += next // inserindo cada letra no HTML

    }, interval);
}

showText(element, text, interval)