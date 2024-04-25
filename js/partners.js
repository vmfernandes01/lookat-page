var imageURL = [
  'logos/cardahoy.png',
  'logos/coinex.png',
  'logos/shanhai.png',
  'logos/lovelyplanet.png',
  'logos/akiverse.png',
  'logos/archewold.png',
  'logos/ardoxus.png',
  'logos/bigtime.png',
  'logos/billionair.png',
  'logos/brett.png',
  'logos/chainers.png',
  'logos/coinbase.png',
  'logos/defi.png',
  'logos/elixir.png',
  'logos/bored.png',
  'logos/hugewin.png',
  'logos/kaspersky.png',
  'logos/kratos.png',
  'logos/mavia.png' 
]

var imageURL2 = [
  'logos/octafx.png',
  'logos/portalfantasy.png',
  'logos/qtum.png',
  'logos/quantfury.png',
  'logos/realfevr.png',
  'logos/mumu.webp',
  'logos/serenityshield.png',
  'logos/spacecatch.png',
  'logos/stake.png',
  'logos/sunflower.png',
  'logos/swgt.png',
  'logos/villagepenguin.png',   
  'logos/wallstret.png',
  'logos/devomon.png',
  'logos/biga-arcade.svg',
  'logos/metatoys.png',
  'logos/movecon.png',
  'logos/nide.png',
  'logos/gamegpt.svg',
  'logos/metacene.png',
  'logos/metarivals.png'
]

  // Seleciona a div onde as imagens serão adicionadas
var gallery = document.getElementById('logos1');
// Loop para criar e adicionar as imagens
imageURL.forEach(function(url) {
  // Cria um novo elemento img
  var img = document.createElement('img');
  // Define o atributo src com a URL da imagem
  img.src = url;
  // Adiciona a imagem à div gallery
  gallery.appendChild(img);
})

var gallery = document.getElementById('logos2');
imageURL.forEach(function(url) {
  var img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
})

var gallery = document.getElementById('logos3');
imageURL2.forEach(function(url) {
  var img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
})

var gallery = document.getElementById('logos4');
imageURL2.forEach(function(url) {
  var img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
})