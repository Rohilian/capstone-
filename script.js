// Sidebar menu logic
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

    modal.classList.add('show');
    localStorage.setItem('modalShown', 'true');

    if (modal && closeBtn) {
        // Close with break+dissolve animation
        closeBtn.onclick = function() {
            modal.classList.remove('show');
            modal.classList.add('closing');
            setTimeout(() => {
                modal.classList.remove('closing');
            }, 1000);
        };

        // Click outside modal to close
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.remove('show');
                modal.classList.add('closing');
                setTimeout(() => {
                    modal.classList.remove('closing');
                }, 1000);
            }
        }
    }
}
