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

/* select img */
const input_imgs = document.querySelectorAll('.group input[type="file"]');
const previews = document.querySelectorAll('.preview');
input_imgs.forEach((input, index) => {
  input.addEventListener('change', () => {
    previews[index].src = URL.createObjectURL(input.files[0]);
    previews[index].style.display = 'block';
  });
});
