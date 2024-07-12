  var container = document.getElementById("bar"); // Seleciona a div #bar
  var textos = [" inspire ", " conquer ", " influence "]; // Array com os textos a serem repetidos
  for(var j = 0; j < 10; j++){ // Loop para criar e adicionar o conteúdo repetido
    for (var i = 0; i < textos.length; i++) {
    var spanIcon = document.createElement("span"); // Cria um novo span com a classe "icon"
    spanIcon.className = "icon";
    container.appendChild(spanIcon); // Adiciona o span com a classe "icon" à div bar
    container.appendChild(document.createTextNode(textos[i])); // Adiciona o texto atual à div bar
    }
  }