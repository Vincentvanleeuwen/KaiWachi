

function onReady() {
  display();
  window.addEventListener('resize', display);



  function display(){

    if(document.documentElement.clientWidth > "768") {

      document.getElementById('die-young').style.display = "block";
      document.getElementById('in-my-blood').style.display = "block";
      document.getElementById('cadaverous').style.display = "block";
    }
    else if (document.documentElement.clientWidth < "768") {

      document.getElementById('die-young').style.display = "block";
      document.getElementById('in-my-blood').style.display = "none";
      document.getElementById('cadaverous').style.display = "none";
    }

  }

}
if (document.readyState !== "loading") {
  onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}
