import { login, redirectIfLoggedIn } from "../auth/auth.js";

function loginFunctionality() {
  $("#signInButton").on("click", async function (e) {
        e.preventDefault();

        const email = $("#loginEmail").val().trim();
        const password = $("#loginPassword").val();

        const { error } = await login(email, password);

        if (error) {
            alert(error.message);
            return;
        }

        window.location.href = "/uploaded-images";
    });
}



$(document).ready(async function () {
  await redirectIfLoggedIn();


  loginFunctionality();
});