const searchInput = document.getElementById('searchInput');
const cardContainer = document.getElementById('cardContainer');

const displayDados = dados => {
    cardContainer.innerHTML = "";
    dados.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h2>${e.id}</h2>
                <img src="${e.image}" alt="${e.name}">
            <p>${e.url}</p>
        </div>
        `
    })

}


console.log(dados); // listando [2] em qual nome quero imprimir


window.addEventListener("load", displayDados.bind(null, dados))



// searchInput.addEventListener('input',

//     async () => {
//         const searchTerm = searchInput.value;
//         const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
//         const data = await response.json();
//         searchResultsDiv.innerHTML = '';
//         data.resultsDiv.forEach(character => {
//             const div = document.createElement('div');
//             div.inerrHTML = `
//             <img src="${character.image}" alt="${character.name}">
//       <h2>${character.name}</h2>
//       <p>${character.species}</p>
//             `
//         })
//     }
// )






// function search() {
//     const searchInput = document.getElementById('searchInput');
//     const resultsDiv = document.getElementById('resultsDiv');
// }

// const searchTerm = searchInput.value.toLowerCase();

// const categorias = {
//     futebol: ['Neymar Jr.', 'Pele', 'Vínicius Jr'],
//     volei: ['Maicon Sidnei', 'Fernando Venturini', 'Giovanna'],
//     Ginasta: ['Rebeca Andrade', 'Daiana dos Santos']
// }

// // Aqui você implementaria a lógica de busca real, consultando um banco de dados ou API.
// // Por enquanto, vamos simular resultados:

// let results = [];
// if (searchTerm === 'rebeca andrade' || searchTerm === 'neymar' || searchTerm === 'martins') {
//     results = ['Biografia de rebeca andrade', 'Neymar Jr. - Paris Saint-Germain', 'Martins - Atleta Olímpico'];
// } else if (searchTerm.includes('futebol')) {
//     results = ['História do futebol brasileiro', 'Copa do Mundo', 'Seleção Brasileira'];
// } else if (searchTerm.includes('olimpíadas')) {
//     results = ['Olimpíadas Rio 2016', 'Medalhas brasileiras', 'Atletas olimpícos'];
// } else {
//     results - ['Nenhum resultado encontrado para: ' + searchTerm];
// }

// // Exibir os resultados
// let html = '';
// results.forEach(result => {
//     html += `<p>${result}</p>`;
// });
// resultsDiv.innerHTML = html;

