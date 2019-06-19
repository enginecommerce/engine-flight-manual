function openTab(evt, tabName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i=0;i<tabcontent.length;i++){
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i=0;i<tablinks.length;i++){
      tablinks[i].className=tablinks[i].className.replace(" active","");
  }
  document.getElementById(tabName).style.display="block";
  evt.currentTarget.className+=" active";
};

$(document).ready(function(){
  document.getElementById('product details').style.display="block";

});

/*document.addEventListener('DOMContentLoaded', _event => {
  const tabContentElements = document.querySelectorAll(".content");

  console.log(tabContentElements);

  const tabLinkElements = document.querySelectorAll(".tab-links");

  function handleSwitch(event){
    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(element => {
      element.className = element.className.replace('active', '');
    })

    event.currentTarget.classList += " active";
  }

  tabLinkElements.forEach(element => {
    element.addEventListener("click", handleSwitch);
  })

});*/
