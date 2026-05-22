import { requireAuth, logout } from "../auth/auth.js";
import { fetchNotDisplayedImages } from "../image-uploads/images.js";


function logoutFunctionality(){
    $("#logoutButton").on("click", async function () {
        const { error } = await logout();

        if (error) {
            alert(error.message);
            return;
        }

        window.location.href = "/pages/login.html";
    });
}

function copyIconFunctionality() {
    $(".copy-icon").on("click", async function () {
      

        // Find nearest parent that contains the <p>
        const text = $(this)
            .closest("div")   // adjust this selector to your actual wrapper
            .find("p")
            .text()
            .trim();

        navigator.clipboard.writeText(text);

        $(".toast-container").addClass("show");

        setTimeout(function () {
            $(".toast-container").removeClass("show");
        }, 1000);
    });
}



$(document).ready(async function () {
    await requireAuth();
    await fetchNotDisplayedImages();

    logoutFunctionality();
    copyIconFunctionality();
});