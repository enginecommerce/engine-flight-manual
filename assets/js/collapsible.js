document.addEventListener('DOMContentLoaded', _event => {
  const collapsibleElements = document.querySelectorAll(".collapsible");
  const collapsibleJumpElements = document.querySelectorAll(".contentJump");

  function handleCollapse(event) {
    event.currentTarget.classList.toggle("active");
  }

  function jumpContent(event) {
    document.getElementById(event.currentTarget.getAttribute('data-jump')).scrollIntoView();
  }

  collapsibleElements.forEach(element => {
    element.addEventListener("click", handleCollapse);
  });

  collapsibleJumpElements.forEach(element => {
    element.addEventListener("click", jumpContent);
  })
});
