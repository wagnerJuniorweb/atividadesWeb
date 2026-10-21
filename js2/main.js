document.getElementById('paragrafo').innerHTML = "oh i see, interesting";

let produto = "monitor of some kind there";
let preco = 1299.0;

document.body.innerHTML = `
    <h1>Today's offer</h1>
    <p>Get the ${produto} for just R$${preco}</p>
`