const mensagens = [
    "Onde há fumaça há fogo",
    "Quem com ferro fere, com ferro será ferido",    
    "Para bom entendedor, meia palavra basta",
    "De grão em grão, a galinha enche o papo",
    "Quem não tem cão, caça com gato"
];

let mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
document.querySelector(".mensagem").append(mensagem);