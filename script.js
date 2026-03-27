// FILMES
let filmes = [

    {
    titulo: "CIDADE DE DEUS",
    imagem: "CidadedeDeus.jpg",
    descricao: "Cidade de Deus refere-se principalmente a um bairro e favela no Rio de Janeiro, mas tornou-se mundialmente famoso devido à obra literária e cinematográfica de mesmo nome." 
  }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "IRMANDADE",
    imagem: "IRMANDADE.jpg",
    descricao: "A trama de Irmandade (série e o filme de 2026) gira em torno do conflito moral entre a lei e o crime organizado em São Paulo."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();
