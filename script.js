function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');


  let firstIndex = 0;
function automaticSlide() {

  setTimeout(automaticSlide, 3000);

  let pics;
  const img = document.querySelectorAll(".pict");
  for(pics = 0; pics < img.length;pics++) {
    img[pics].style.display="none";
    
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.display="block";
}

automaticSlide();