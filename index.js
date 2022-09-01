let paisesPromisse = fetch("https://restcountries.com/v3.1/all");

paisesPromisse.then((resp) => {
  resp.json().then((paises) => {
    console.log(paises);
    gerarBandeiras(paises);
  });
});

function gerarBandeiras(paises) {
  let puxarPais = paises.map((pais) => {
    return `<img src="${pais.flags.svg}" alt="${pais.name.common}" />`;
  });
  return (document.getElementById("paises").innerHTML = `${puxarPais.join("")}`);
}
