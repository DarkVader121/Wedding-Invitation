// upload.js
import { supabase } from "./initialization.js";

async function getImagesFromSupabase() {
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("isDisplay", true);

  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Images:", data);
  }
}

function initializeFlexmason() {
  FlexMasonry.init('.grid', {
      responsive: false,
      numCols: 2
  });
}

$(document).ready(function () {
    getImagesFromSupabase();
    initializeFlexmason();
});