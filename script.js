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

    // Only show modal if it hasn't been shown before
    if (modal && closeBtn && !localStorage.getItem('modalShown')) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Set flag so it doesn't show again
        localStorage.setItem('modalShown', 'true');
    } else if (modal) {
        // Ensure it's hidden if not supposed to show
        modal.style.display = 'none';
    }

    if (modal && closeBtn) {
        // Close with break+dissolve animation
        closeBtn.onclick = function() {
            modal.classList.remove('show');
            modal.classList.add('closing');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('closing');
            }, 1000);
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
