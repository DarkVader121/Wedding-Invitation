import { requireAuth, logout } from "../auth/auth.js";


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

$(document).ready(async function () {
    await requireAuth();

    logoutFunctionality();
});