const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");
const card = document.querySelector(".card");

const frases = [
    "Tem certeza? 🥺",
    "Pensa com carinho... ❤️",
    "O Outback já estava quase reservado... 😂",
    "Você vai mesmo dizer não? 😅",
    "Última chance... 👀",
    "Acho que você quer apertar no SIM 😏"
];

let tentativa = 0;

function moverBotao(){

    const largura = card.clientWidth - 160;
    const altura = 250;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    no.style.left = x + "px";
    no.style.top = y + "px";

    message.innerText = frases[tentativa];

    if(tentativa < frases.length-1){
        tentativa++;
    }

}

no.addEventListener("mouseenter", moverBotao);

no.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moverBotao();

});

yes.addEventListener("click",()=>{

    card.classList.add("fadeOut");

    setTimeout(()=>{

        card.innerHTML=`

        <span class="vip">❤️</span>

        <h1>Eu sabia...</h1>

        <p class="text">

        Você acabou de fazer alguém muito feliz.

        </p>

        <h2>

        Obrigado, Emilly ❤️

        </h2>

        `;

        card.classList.remove("fadeOut");

        card.classList.add("fadeIn");

    },700);

});
