import { supabase } from "../lib/supabase";

/**
 * Login User function
 */
export async function loginUser(email, password) {
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