function scrollToSection(id) {
  var element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    var headerHeight = document.querySelector('header').offsetHeight;
    window.scrollBy(0, -headerHeight);
  }
}
  
function redirectTo(url) {
  window.location.href = url;
}