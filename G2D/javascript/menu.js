const menu= document.querySelector('.menu'),
      lineas= document.querySelector('menu-navegacion');

menu.addEventListener('click', () => {
   lineas.classList.toggle('spread');
}) 