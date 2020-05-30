/* #menu */
const menu_item = document.querySelectorAll('#menu>li');
menu_item.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    menu_item.forEach((li) => {
      li.classList.remove('active');
    });
    item.classList.add('active');
  });
});
