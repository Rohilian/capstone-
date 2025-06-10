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

// Modal fade-in and break+dissolve fade-out logic
window.onload = function() {
    var modal = document.getElementById('popupModal');
    var closeBtn = document.getElementById('closeModal');

    if (modal && closeBtn) {
        // Show modal, then trigger fade-in
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Close with break+dissolve animation
        closeBtn.onclick = function() {
            modal.classList.remove('show');
            modal.classList.add('closing');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('closing');
            }, 1000); // Match the animation duration (1s = 1000ms)
        };

        // Click outside modal to close
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.remove('show');
                modal.classList.add('closing');
                setTimeout(() => {
                    modal.style.display = 'none';
                    modal.classList.remove('closing');
                }, 1000);
            }
        };
    }
};
