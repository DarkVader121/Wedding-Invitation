import { supabase } from "../firebase/initialization.js";

/**
 * Fetch function Not Display
 */
export async function fetchNotDisplayedImages() {
    const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("isDisplay", false);

    if (error) {
        console.error("Supabase error:", error);
        return;
    }

    return data;
}

/**
 * Fetch function Display
*/
export async function fetchDisplayedImages() {
    const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("isDisplay", true);

    if (error) {
        console.error("Supabase error:", error);
        return;
    }

    return data;
}

/**
 * Update isDisplay to TRUE
*/

export async function showImagesInGalleryPage(ImagesIds) {
  const { data, error } = await supabase
    .from("images")
    .update({ isDisplay: true })
    .in("id", ImagesIds)
    .select("*");

  if (error) {
    return error;
  }

  return data;
}