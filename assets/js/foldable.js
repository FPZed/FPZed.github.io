document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".foldable").forEach(header => {
        header.addEventListener("click", function() {

            let nextRow = this.querySelector("tbody tr:nth-child(2)"); // Select the next row (content row)
            header.classList.toggle("expanded"); // Toggle the expanded class for the header

            if (window.getComputedStyle(nextRow).display === "none") {
                nextRow.style.display = "flex"; // Show content row
            } else {
                nextRow.style.display = "none"; // Hide content row
            }

        });
    });
});