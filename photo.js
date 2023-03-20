 // Sélectionnez le conteneur carousel
 const carousel = document.querySelector('.left');

 // Sélectionnez toutes les images dans le carousel
 const images = carousel.querySelectorAll('img');
 
 // Définissez un index pour suivre la position de l'image actuelle
 let index = 0;
 
 // Définissez une fonction pour faire défiler les images automatiquement
 function autoScroll() {
   // Ajoutez la classe active pour afficher les images
   carousel.classList.add('active');
 
   // Déplacez la première image à la fin de la liste
   const firstImage = carousel.querySelector('img:first-child');
   carousel.appendChild(firstImage);
 
   // Réinitialisez la position des images
   images.forEach(image => {
     image.style.transform = 'translateX(0)';
   });
 
   // Incrémentez l'index de l'image actuelle
   index++;
 
   // Si l'index dépasse le nombre total d'images, réinitialisez-le à zéro
   if (index >= images.length) {
     index = 0;
   }
 
   // Définissez un délai de 2 secondes avant de faire défiler les images suivantes
   setTimeout(autoScroll, 2000);
 }
 
 // Appelez la fonction autoScroll pour démarrer l'animation
 autoScroll();

const searchForm = document.querySelector('nav form');
  const searchInput = document.querySelector('nav input[type="text"]');

  searchForm.addEventListener('click', function() {
  searchInput.classList.add('active');
});
  searchForm.addEventListener('blur', function() {
  searchInput.classList.remove('active');
});
//menu
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});