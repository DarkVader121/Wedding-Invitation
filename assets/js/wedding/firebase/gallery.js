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

function initializeGalleryPage() {

// 1. Get gallery image sources
var imageSrcs = $('#galleryImageSrc p').map(function () {
    return $.trim($(this).text());
}).get();

var imgIndex = 0;

// 2. Fill existing layouts FIRST (no cloning yet)
$('.row[class*="layout-"] img').each(function () {
    var src = imageSrcs[imgIndex];

    if (src) {
        // Update IMG
        $(this).attr('src', src);

        // Update parent <a>
        var $a = $(this).closest('a');
        if ($a.length) {
        
            $a.attr('data-bp', src);
            $a.attr('data-caption', src.split('/').pop());
        }

        imgIndex++;
    } else {
        $(this).attr('src', '');
    }
});

// 3. Layout templates (used only if images remain)
var layoutTemplates = [
    $('.layout-1').first(),
    $('.layout-2').first(),
    $('.layout-3').first(),
    $('.layout-4').first()
];

var nextLayoutNumber = $('.row[class*="layout-"]').length + 1;
var templatePointer = 0;

// 4. Clone layouts ONLY while images remain
while (imgIndex < imageSrcs.length) {

    var $newLayout = layoutTemplates[templatePointer].clone();

    // Remove old layout-* class
    $newLayout.removeClass(function (i, cls) {
        return (cls.match(/layout-\d+/g) || []).join(' ');
    });

    // Assign next layout number
    $newLayout.addClass('layout-' + nextLayoutNumber);

    // Populate images + anchors
    $newLayout.find('img').each(function () {
        var src = imageSrcs[imgIndex];

        if (src) {
            $(this).attr('src', src);

            var $a = $(this).closest('a');
            if ($a.length) {
            
                $a.attr('data-bp', src);
                $a.attr('data-caption', src.split('/').pop());
            }

            imgIndex++;
        } else {
            $(this).attr('src', '');
        }
    });

    // Append new layout
    $('.row[class*="layout-"]').last().after($newLayout);

    nextLayoutNumber++;
    templatePointer = (templatePointer + 1) % layoutTemplates.length;
}

// 5. Hide columns with no image
$('.row[class*="layout-"] .col-lg-4, .row[class*="layout-"] .col-lg-8, .row[class*="layout-"] .col-lg-6').each(function () {
    var $img = $(this).find('img');

    if (!$img.attr('src')) {
        $(this).addClass('d-none');
    } else {
        $(this).removeClass('d-none');
    }
});

// 6. Show gallery section
$('.wiGallerySection').removeClass("d-none");
}

function reinitializeBigPicture() {
    const gallery = document.getElementById('image_gallery');
    console.log("test");
    if (!gallery) return;

    gallery.querySelectorAll('[data-bigpicture]').forEach(el => {

        el.addEventListener('click', function (e) {

            console.log("test");
            e.preventDefault();

            BigPicture({
                el: e.currentTarget,
                gallery: '#image_gallery',
                loop: true
            });
        });

    });
}

$(document).ready(function () {
    getImagesFromSupabase();
    initializeGalleryPage();
    reinitializeBigPicture();
});