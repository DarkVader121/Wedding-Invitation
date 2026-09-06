import { supabase } from "../lib/supabase";

/**
 * Take Prenup Images
*/
export const TakePrenupImages = () => {
    const images = import.meta.glob(
        "../assets/images/wedding/prenup/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );

    return Object.entries(images).map(([path, src]) => ({
        id: Date.now() + Math.random(),
        name: Date.now() + Math.random(),
        src,
        category: "prenup",
        path,
    }));
};

/**
 * Take Official Photography Images
*/
export const TakeOfficialPhotographyImages = () => {
    const images = import.meta.glob(
        "../assets/images/wedding/official-photography/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );

    return Object.entries(images).map(([path, src]) => ({
        id: Date.now() + Math.random(),
        name: Date.now() + Math.random(),
        src,
        category: "official-photography",
        path,
    }));
};

/**
 * Fetch Display Guest Images
 */
export const FetchTakenByGuestWithDisplayImages = async (from, to) => {
    const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("category", "taken-by-guest")
        .range(from, to)
        .order("uploaded_at", { ascending: false });

    if (error) {
        console.error("Supabase error:", error);
        return [];
    }

    return data.map((image) => ({
        id: image.id,
        name: image.name,
        src: image.imageUrl,
        category: image.category,
        path: image.imageUrl,
        uploaded_at: image.uploaded_at,
    }));
};

/**
 * Fetch Not Display Guest Images
 */
export const FetchTakenByGuestWithoutDisplayImages = async (from, to) => {
    const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("category", "taken-by-guest-noDisplay")
        .range(from, to)
        .order("uploaded_at", { ascending: false });

    if (error) {
        console.error("Supabase error:", error);
        return [];
    }

    return data.map((image) => ({
        id: image.id,
        name: image.name,
        src: image.imageUrl,
        category: "taken-by-guest-noDisplay",
        path: image.imageUrl,
        uploaded_at: image.uploaded_at,
    }));
};

/**
 * Update isDisplay to TRUE or FALSE
 */
export async function isDisplayToTrueOrFalse(imageId, isDisplayImage) {
    const { data, error } = await supabase
        .from("images")
        .update({ category: isDisplayImage })
        .eq("id", imageId)
        .select("*");

    if (error) {
        return error;
    }

    return data;
}