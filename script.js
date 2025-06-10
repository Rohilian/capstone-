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
const openBtn = document.querySelector('.menu-btn'); // or your open trigger
const closeBtn = document.querySelector('.close');

// Function to open modal with animation
function openModal() {
  modal.classList.add('show');
}

// Function to close modal with animation
function closeModal() {
  modal.classList.remove('show');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// ts is for closing when clicking outside idk if i wanto keep but idgaf
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
