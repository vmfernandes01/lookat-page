var imageURL = ['img/partners/cardahoy.webp','img/partners/coinex.webp','img/partners/shanhai.webp','img/partners/lovelyplanet.webp','img/partners/akiverse.webp','img/partners/archewold.webp','img/partners/ardoxus.webp','img/partners/bigtime.webp','img/partners/billionair.webp','img/partners/brett.webp','img/partners/chainers.webp','img/partners/coinbase.webp','img/partners/defi.webp','img/partners/elixir.webp','img/partners/bored.webp','img/partners/hugewin.webp','img/partners/kaspersky.webp','img/partners/kratos.webp','img/partners/mavia.webp']

var imageURL2 = ['img/partners/octafx.webp','img/partners/portalfantasy.webp','img/partners/qtum.webp','img/partners/quantfury.webp','img/partners/realfevr.webp','img/partners/mumu.webp','img/partners/serenityshield.webp','img/partners/spacecatch.webp','img/partners/stake.webp','img/partners/sunflower.webp','img/partners/swgt.webp','img/partners/villagepenguin.webp',   'img/partners/wallstret.webp','img/partners/devomon.webp','img/partners/biga-arcade.webp','img/partners/metatoys.webp','img/partners/movecon.webp','img/partners/nide.webp','img/partners/gamegpt.webp','img/partners/metacene.webp','img/partners/metarivals.webp','img/partners/tripoint-ventures.webp']

var imageAlt = ['Logo Cardahoy','Logo Coinex','Logo Shanhai','Logo My Lovely Planet','Logo Akiverse','Logo Archeworld','Logo Ardoxus','Logo Big Time','Logo Billionair','Logo BasedBrett','Logo Chainers','Logo Coinbase','Logo Defi','Logo Elixir','Logo Bored Army','Logo Hugewin','Logo Kaspersky','Logo Kratos','Logo Mavia']

var imageAlt2 = ['Logo Octafx','Logo Portal Fantasy','Logo Qtum','Logo Quantfury','Logo RealFevr','Logo Mumu','Logo Serenity Shield','Logo Space Catch','Logo Stake','Logo Sunflower Land','Logo SWGT','Logo Village Penguin','Logo Wallstret','Logo Devomon','Logo Biga-Arcade','Logo Metatoys','Logo Movecon','Logo Nide','Logo GameGPT','Logo Metacene','Logo Metarivals','Logo Tripoint Ventures']

var gallery = document.getElementById('logos1'); // Seleciona a div onde as imagens serão adicionadas
imageURL.forEach(function(url, alt) { // Loop para criar e adicionar as imagens
  var img = document.createElement('img'); // Cria um novo elemento img
  var alt = imageAlt[alt]; // Seta posicao do alt na img
  img.src = url; // Define o atributo src com a URL da imagem
  img.alt = alt; // Adiciona 'alt' nas imagens
  img.classList.add('lazy-image');
  img.loading = 'lazy';
  gallery.appendChild(img); // Adiciona a imagem à div gallery
})

var gallery = document.getElementById('logos2');
imageURL.forEach(function(url, alt) {
  var img = document.createElement('img');
  var alt = imageAlt[alt];
  img.src = url;
  img.alt = alt;
  img.classList.add('lazy-image');
  img.loading = 'lazy';
  gallery.appendChild(img);
})

var gallery = document.getElementById('logos3');
imageURL2.forEach(function(url, alt) {
  var img = document.createElement('img');
  var alt = imageAlt2[alt];
  img.src = url;
  img.alt = alt;
  img.classList.add('lazy-image');
  img.loading = 'lazy';
  gallery.appendChild(img);
})

var gallery = document.getElementById('logos4');
imageURL2.forEach(function(url, alt) {
  var img = document.createElement('img');
  var alt = imageAlt2[alt];
  img.src = url;
  img.alt = alt;
  img.classList.add('lazy-image');
  img.loading = 'lazy';
  gallery.appendChild(img);
})