const buscaInput = document.querySelector('#busca');
const resultadosPesquisa = document.getElementById('resultados-pesquisa');


const tiposDeCabelo = [
    {
        tipo: '4A',
        titulo: 'Cabelo Crespos 4A',
        imagem: 'https://naturalmentebonita.bioextratus.com.br/wp-content/uploads/2022/01/1990864301468904270137349680185297673178562n-6.jpeg',
        descricao: 'Fator encolhimento: nessa curvatura, o fator encolhimento é fortíssimo, por isso, o cabelo aparenta ser menor do que realmente é um cabelo mais frágil e acaba sendo mais ressecado. Precisa de atenção e hidratação redobrada. Nessa textura, usa-se muito a umectação.',
        link: 'https://www.youtube.com/watch?v=pRjh0RgTHAo&ab_channel=GrupoAfroChic-Sal%C3%A3o%2CEscolaeProdutos'
    },
    {
        tipo: '4B',
        titulo: 'Cabelo Crespos 4B',
        imagem: 'https://naturalmentebonita.bioextratus.com.br/wp-content/uploads/2022/01/cabelocrespocomfranjatipo4b-6.jpeg',
        descricao: 'O cabelo 4B tem um tipo de curvatura diferente do espiral, é nesse fio que encontramos o formato zig zag. Essa é uma repetição menor que no tipo 4A, que lembra uma letra Z em seu formato',
        link: 'https://www.youtube.com/watch?v=ngPymmSLLh8&ab_channel=GrupoAfroChic-Sal%C3%A3o%2CEscolaeProdutos'
    },
    {
        tipo: '4C',
        titulo: 'Cabelo Crespos 4C',
        imagem: 'https://naturalmentebonita.bioextratus.com.br/wp-content/uploads/2022/01/joicy1.jpeg',
        descricao: 'Também conhecidos como crespíssimos, os cabelos tipo 4C não necessariamente têm definição, isso porque essa é uma textura que não forma espiral. Não há um formato padrão que defina esse cabelo, como um espiral ou zigzag, por exemplo. É comum que esse tipo de fio apresente volume natural, ',
        link: 'https://www.youtube.com/watch?v=glw-0Vfq4cs&ab_channel=GrupoAfroChic-Sal%C3%A3o%2CEscolaeProdutos'
    }
];


function buscar() {
    const termoBuscaMinuscula = buscaInput.value.trim().toLowerCase();
    const resultados = tiposDeCabelo.filter(tipo => tipo.tipo.toLowerCase().includes(termoBuscaMinuscula) || tipo.descricao.toLowerCase().includes(termoBuscaMinuscula));

    resultadosPesquisa.innerHTML = '';
    if (resultados.length > 0) {
        resultados.forEach(resultado => {
            resultadosPesquisa.innerHTML += `
                <div class="item-resultado">
                    <h2>${resultado.titulo}</h2>
                    <img class="imagensCabelo" src="${resultado.imagem}" alt="${resultado.titulo}" />
                    <p class="descricao-meta">${resultado.descricao}.</p>
                    <a href="${resultado.link}" class="link-rede" target="_blank">Mais Informações</a>
                </div>
            `;
        });
    } else {
        resultadosPesquisa.innerHTML = '<p>Nenhum resultado encontrado</p>';
    }

}




// para cada dado dentro da lista de dados

//let resultados = "";
//let titulo = "";
//let decricao = "";

// for (let dado of dados) {
// titulo = dado.titulo.toLowerCase()
// descricao = dado.descricao.toLowerCase()
// if (dado.titulo.includes(campoPesquisa) || dado.decricao.includes(campoPesquisa)){
//    resultadosDiv.innerHTML += `
//    <div class="item-resultado">
//         <h2>${resultado.titulo}</h2>
//         <img class="imagensCabelo"
//          src="${resultado.  imagem}"
//          alt="${resultado.titulo}" />
//        <p class="descricao-meta">${resultado.descricao}.</p>
//        <a href="${resultado.link}"  class="link-rede" target="_blank">Mais Informações</a>
//        </div>
// }

//imprimindo o resultado da caixa de pesquisa

//  resultadosDiv.innerHTML += `
//                 <div class="item-resultado">
//                     <h2>${resultado.titulo}</h2>
//                     <img class="imagensCabelo" src="${resultado.imagem}" alt="${resultado.titulo}" />
//                     <p class="descricao-meta">${resultado.descricao}.</p>
//                     <a href="${resultado.link}" class="link-rede" target="_blank">Mais Informações</a>
//                 </div>
//             `;