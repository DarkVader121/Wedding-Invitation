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

function uploadImageOnChangeSupabase() {
  $('#formFile').on('change', async function () {
    const files = Array.from(this.files);
    const imageCount = files.length;

    $('#imageCount').text(imageCount);

    const $container = $('.wi-upload-images');

    const uploadPromises = files.map((file, i) => {
      // Create skeleton placeholder
      const $col = $(`
        <div class="col-3 fade-in" data-index="${i}">
          <p class="placeholder-wave">
            <span class="placeholder bg-primary col-12"></span>
          </p>
        </div>
      `);

      $container.append($col);

      // small staggered animation
      setTimeout(() => {
        $col.addClass('show');
      }, i * 100);

      return (async () => {
        const filePath = `wedding/${Date.now()}_${file.name}`;

        const { data, error } = await supabase
          .storage
          .from('wedding images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) {
          console.error('Upload error:', error.message);
          $col.remove();
          return;
        }

        const { data: publicUrlData } = supabase
          .storage
          .from('wedding images')
          .getPublicUrl(data.path);

        const imageUrl = publicUrlData.publicUrl;

        const $img = $('<img>', {
            src: imageUrl,
            class: 'w-100',
            alt: ''
        });
        $col.removeClass('show');

        $img.on('load', function () {
        $col.html($img);

            setTimeout(() => {
                $col.addClass('show');
            }, 500);
        });

      })();
    });

    // optional: wait for all uploads
    await Promise.all(uploadPromises);
  });
}

function uploadImageOnChange() {
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
    // uploadImageOnChange();
    uploadImageOnChangeSupabase();
    // getImagesFromSupabase();
});