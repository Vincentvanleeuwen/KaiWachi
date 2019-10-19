function onReady() {
  let ulNav = document.getElementById('ul-nav');
  let toggle = document.getElementById('toggle-id');
  let listItems = [];

  let facebook = document.getElementById('facebook');
  let soundcloud = document.getElementById('soundcloud');
  let twitter = document.getElementById('twitter');
  let instagram = document.getElementById('instagram');
  let spotify = document.getElementById('spotify');

  for (let i = 0; i < ulNav.childNodes.length; i++) {
    if (ulNav.childNodes[i].nodeName === "LI") {
      listItems.push(ulNav.childNodes[i]);
    }
  }

  if(ulNav) {
    toggle.addEventListener('click',  () => {
      ulNav.classList.toggle('active-menu');
    });
  }

  let inMyBlood = document.getElementById('in-my-blood');
  let dieYoung = document.getElementById('die-young');
  let cadaverous = document.getElementById('cadaverous');

  let currentAlbum = 0;



  window.slider = function(direction) {

    if(direction === "next") {
      if(currentAlbum === 1) {
        currentAlbum--;
        currentAlbum--;
      }
      else if(currentAlbum < 1){
        currentAlbum++;
        console.log(currentAlbum);
      }

    }
    if (direction === "prev") {
      if(currentAlbum === -1) {
        currentAlbum++;
        currentAlbum++;
      }
      else if (currentAlbum > -1) {
        currentAlbum--;
        console.log(currentAlbum);
      }

    }
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    switch (currentAlbum) {
      case 0:

        dieYoung.style.display = "block";
        inMyBlood.style.display = "none";
        cadaverous.style.display = "none";
        break;
      case 1:
        dieYoung.style.display = "none";
        inMyBlood.style.display = "block";
        cadaverous.style.display = "none";
        break;
      case -1:
        dieYoung.style.display = "none";
        inMyBlood.style.display = "none";
        cadaverous.style.display = "block";
        break;
      default:
        break;
    }
  };



}
if (document.readyState !== "loading") {
  onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}



// Document next ele display none mattie na back