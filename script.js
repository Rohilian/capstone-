document.querySelector(".menu-btn").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";

    menuBtn.classList.toggle("active");

    setTimeout(() => {
        menuBtn.classList.remove("active");
    }, 300);
});
window.onload = function() {
  var modal = document.getElementById('popupModal');
  var closeBtn = document.getElementById('closeModal');

  if (modal && closeBtn) {
    modal.style.display = 'block';

    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
};
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function() {
  modal.classList.add('closing');
  setTimeout(() => {
    modal.style.display = 'none'; // Or remove modal from DOM
    modal.classList.remove('closing');
  }, 300); // Match the animation duration (0.3s = 300ms)
});
