$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Sélectionnez le conteneur carousel
const carousel = document.querySelector('.left');

const images = carousel.querySelectorAll('img');

let index = 0;

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
// coroussel

  // bar de recherche
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  const searchForm = document.querySelector('nav form');
  const searchInput = document.querySelector('nav input[type="text"]');

  searchForm.addEventListener('click', function() {
  searchInput.classList.add('active');
});
  searchForm.addEventListener('blur', function() {
  searchInput.classList.remove('active');
});
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  //owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
