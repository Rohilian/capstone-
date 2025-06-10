document.querySelector(".menu-btn").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

