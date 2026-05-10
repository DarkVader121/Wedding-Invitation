// upload.js
import { supabase } from "./initialization.js";

async function createImageDataInSupabase(imageUrl) {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("images")
    .insert([
      {
        imageUrl: imageUrl,
        name: now,
      },
    ])
    .select();

  if (error) {
    console.error("Insert error:", error);
    return null;
  }

  return data[0].id;  
}

async function removeImageDataInSupabase(imageId) {
  const { data, error } = await supabase
    .from('images')
    .delete()
    .eq('id', imageId)
    .select() // 👈 important

  if (error) {
    console.error('Error deleting image:', error)
  } else {
    console.log('Image deleted:', data)
  }
}

function uploadImageOnChangeSupabase() {
  $('#formFile').on('change', async function () {
    const files = Array.from(this.files);
    const imageCount = files.length;
    const imageIds = [];

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

        // load the new uploaded image
        const { data: publicUrlData } = supabase
          .storage
          .from('wedding images')
          .getPublicUrl(data.path);

        const imageUrl = publicUrlData.publicUrl;

        // create data in images table
        const imageId = await createImageDataInSupabase(imageUrl);
        // create data in images table
      

        const $img = $('<img>', {
            src: imageUrl,
        });
        $col.removeClass('show');

        $img.on('load', async function () {
           $col.html(`<a class="btn wi-remove-img"><span class="fas fa-trash"></span></a> 
             <img src="${imageUrl}" id="${imageId}" class="w-100">
            `);

            setTimeout(() => {
                $col.addClass('show');
            }, 500);
        });
        // load the new uploaded image

        
      })();
    });

    // optional: wait for all uploads
    await Promise.all(uploadPromises);
  });
}

// function displayTheUploadedImagesInGalleryPage() {
//   $("#uploadToGallery").on("click", function () {
//     let imageIds = [];
//     $(".wi-upload-images .col-3 img").each(function () {
//       let id = $(this).attr("id");
//       if (id) {
//         imageIds.push(id);
//       }
//     });

//   // console.log("data", data);
//   });
// }

$(document).ready(function () {
    uploadImageOnChangeSupabase();
    // displayTheUploadedImagesInGalleryPage()
});

// remove Uploaded image remove functionality
$(document).on("click", ".wi-remove-img", function () {
    const imageId = $(this)
      .closest('.col-3')   // parent wrapper
      .find('img')
      .attr('id');

    removeImageDataInSupabase(imageId);

   const $col = $(this).closest('.col-3');
    $col.removeClass("show");
    setTimeout(function () {
        $col.remove();
    }, 1000);
});