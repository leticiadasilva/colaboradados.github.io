const firstScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > firstScrollpos) {
    document.getElementById("doe").style.top = "-80px";   
  } else {
    document.getElementById("doe").style.top = "2em";
  }
}
