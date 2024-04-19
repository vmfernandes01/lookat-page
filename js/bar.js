  // Seleciona a div #bar
  var container = document.getElementById("bar");

  // Array com os textos a serem repetidos
  var textos = [" inspire ", " conquer ", " influence "];
  
  // Loop para criar e adicionar o conteúdo repetido
  for(var j = 0; j < 10; j++){
    for (var i = 0; i < textos.length; i++) {
    // Cria um novo span com a classe "icon"
    var spanIcon = document.createElement("span");
    spanIcon.className = "icon";
    
    // Adiciona o span com a classe "icon" à div bar
    container.appendChild(spanIcon);
  
    // Adiciona o texto atual à div bar
    container.appendChild(document.createTextNode(textos[i]));
    }
  }