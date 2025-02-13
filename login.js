document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");

    document.querySelectorAll("footer i").forEach(icon => {
        icon.addEventListener("click", function () {
            alert("Navigation clicked!");
        });
    });
});
