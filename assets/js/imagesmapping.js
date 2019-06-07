document.addEventListener('DOMContentLoaded', _event => {
  const elements = document.getElementsByClassName('mouseArea');
  const defaultImgPath = '/assets/images/mockdown/draft2/dashboard_screenshot_mockdown.png';

  for (var i = 0; i<elements.length; i++) {
    const imagePath = elements[i].dataset.image;
    console.log(imagePath);

    elements[i].addEventListener('mouseenter', e => {
      changeImage(imagePath);
    });

    elements[i].addEventListener('mouseleave', e => {
      changeImage(defaultImgPath);

    });

  };

});

function changeImage(imgPath){
  document.getElementById('myImage').src=imgPath;
};
