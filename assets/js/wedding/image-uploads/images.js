import { supabase } from "../firebase/initialization.js";

/**
 * Fetch function Not Display
 */
export async function fetchNotDisplayedImages(imageData) {
    const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("isDisplay", false);

    if (error) {
        console.error("Supabase error:", error);
        return;
    }

    imageData = data;
    console.log("data", data);
}