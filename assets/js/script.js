function getScrollHeight(evt){
  element = document.querySelector('.tabs');
  style = getComputedStyle(element);

  height = parseInt(window.innerHeight);
  old_height = parseInt(style.minHeight);

  console.log(old_height);
  console.log(height);

  if (height > old_height){
    var newStyles = document.createElement('style')
    document.head.append(newStyles)
    newStyles.innerHTML = ".tabs {" +
      "min-height: " + height + "px;"
    "}"
  }
}
