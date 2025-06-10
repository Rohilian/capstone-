document.querySelector(".menu-btn").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    // Toggle sidebar visibility
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";

    // Add/remove animation class for a subtle button effect
    menuBtn.classList.toggle("active");

    // Reset animation after a short delay
    setTimeout(() => {
        menuBtn.classList.remove("active");
    }, 300);
});
