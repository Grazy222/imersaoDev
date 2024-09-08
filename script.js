function search() {
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('resultsDiv');
}

const searchTerm = searchInput.value.toLowerCase();

const categorias = {
    futebol: ['Neymar Jr.', 'Pele', 'Vínicius Jr'],
    volei: ['Maicon Sidnei', 'Fernando Venturini', 'Giovanna'],
    Ginasta: ['Rebeca Andrade', 'Daiana dos Santos']
}

// Aqui você implementaria a lógica de busca real, consultando um banco de dados ou API.
// Por enquanto, vamos simular resultados:

let results = [];
if (searchTerm === 'rebeca andrade' || searchTerm === 'neymar' || searchTerm === 'martins') {
    results = ['Biografia de rebeca andrade', 'Neymar Jr. - Paris Saint-Germain', 'Martins - Atleta Olímpico'];
} else if (searchTerm.includes('futebol')) {
    results = ['História do futebol brasileiro', 'Copa do Mundo', 'Seleção Brasileira'];
} else if (searchTerm.includes('olimpíadas')) {
    results = ['Olimpíadas Rio 2016', 'Medalhas brasileiras', 'Atletas olimpícos'];
} else {
    results - ['Nenhum resultado encontrado para: ' + searchTerm];
}

// Exibir os resultados
let html = '';
results.forEach(result => {
    html += `<p>${result}</p>`;
});
resultsDiv.innerHTML = html;

