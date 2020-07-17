/* Menu */
const menu_item = document.querySelectorAll('#menu>li');
menu_item.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    menu_item.forEach((li) => {
      li.classList.remove('active');
    });
    item.classList.add('active');
  });
});

/* Form image upload preview */
const input_imgs = document.querySelectorAll('.group input[type="file"]');
const previews = document.querySelectorAll('.preview');
input_imgs.forEach((input, index) => {
  input.addEventListener('change', () => {
    if (previews[index]) {
      previews[index].src = URL.createObjectURL(input.files[0]);
      previews[index].style.display = 'block';
    }
  });
});

/* Chekcboxs */
const checkboxs = document.querySelectorAll('.checkbox');
const input_checkbox = document.querySelectorAll(
  '.checkbox input[type="checkbox"]'
);

if (checkboxs) {
  checkboxs.forEach((checkbox, index) => {
    if (checkbox.classList.contains('checked')) {
      input_checkbox[index].setAttribute('checked', 'true');
    }

    checkbox.addEventListener('click', () => {
      if (checkbox.classList.contains('checked')) {
        checkbox.classList.remove('checked');
        input_checkbox[index].removeAttribute('checked');
      } else {
        checkbox.classList.add('checked');
        input_checkbox[index].setAttribute('checked', 'true');
      }
    });
  });
}

/* Radios */
const radios = document.querySelectorAll('.radio');
radios.forEach((radio, index) => {
  if (radio.classList.contains('checked')) {
    radio.getElementsByTagName('input')[0].setAttribute('checked', '');
  }

  radio.addEventListener('click', () => {
    let filterName = radio.dataset.name;
    radios.forEach((item) => {
      if (item.dataset.name == filterName) {
        item.classList.remove('checked');
        item.getElementsByTagName('input')[0].removeAttribute('checked');
      }
    });
    radio.classList.add('checked');
    radio.getElementsByTagName('input')[0].setAttribute('checked', '');
  });
});

/* Image upload */
const file_upload = document.querySelector('#file-upload');
const file_previews = document.querySelector('#file-upload #previews');
const file_upload_submit = document.querySelector(
  '#file-upload button[type="submit"]'
);
const file_upload_input = document.querySelector(
  '#file-upload input[type="file"]'
);

if (file_upload_input) {
  file_upload_input.addEventListener('change', () => {
    const files = file_upload_input.files;

    for (let index = 0; index < files.length; index++) {
      let type = files[index].type;
      // images
      if (type.match(/image\/.*/)) {
        const new_img = document.createElement('img');
        new_img.src = URL.createObjectURL(files[index]);
        new_img.classList.add('img-preview');
        file_upload_submit.style.display = 'block';
        file_previews.appendChild(new_img);
      }
    }
  });
}

/* Gallery images hover */
const files = document.querySelectorAll('.file');
const overlay = document.querySelector('#overlay');
files.forEach((file, index) => {
  file.addEventListener('click', () => {
    const fileImg = file.getElementsByTagName('img')[0].src;
    const overlayImg = overlay.getElementsByTagName('img')[0];
    overlayImg.src = fileImg;
    overlay.style.display = 'flex';
  });
});

document.addEventListener('click', (e) => {
  if (e.target.id == 'overlay') {
    overlay.style.display = 'none';
  }
});

/* Color Palette */

const colors = document.querySelectorAll('input[type="color"]');
const hex_colors = document.querySelectorAll('.color-hex');
colors.forEach((color, index) => {
  color.addEventListener('change', (e) => {
    hex_colors[index].value = e.target.value;
  });
});
