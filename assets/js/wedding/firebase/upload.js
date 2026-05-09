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

async function uploadImageOnChange() {
   $('#formFile').on('change', function () {
        const files = this.files;
        const imageCount = files.length;

        $('#imageCount').text(imageCount);

        const $container = $(".wi-upload-images");
        $container.empty();

        for (let i = 0; i < imageCount; i++) {
            const $col = $(`
                <div class="col-3 fade-in">
                    <p class="placeholder-wave">
                        <span class="placeholder bg-primary col-12"></span>
                    </p>
                </div>
            `);

            $container.append($col);

            setTimeout(() => {
                $col.addClass('show');
            }, i * 100);
        }

        console.log('Selected images:', imageCount);
    });
}

$(document).ready(function () {
    uploadImageOnChange();
    getImagesFromSupabase();
});