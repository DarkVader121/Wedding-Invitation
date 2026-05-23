import { supabase } from "../firebase/initialization.js";

let redirecting = false;

/**
 * Protect pages that require login
 */
export async function requireAuth() {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user && !redirecting) {
        redirecting = true;
        window.location.href = "/pages/login";
    }
}

/**
 * Redirect logged-in users away from login page
 */
export async function redirectIfLoggedIn() {
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user && !redirecting) {
        redirecting = true;
        window.location.href = "/pages/manage-uploaded-images";
    }
}

/**
 * Login function
 */
export async function login(email, password) {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    });
}

/**
 * Logout function
 */
export async function logout() {
    return await supabase.auth.signOut();
}