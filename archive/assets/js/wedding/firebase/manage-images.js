import { requireAuth, logout } from "../auth/auth.js";
import { fetchNotDisplayedImages, fetchDisplayedImages, showImagesInGalleryPage, hideImagesInGalleryPage } from "../image-uploads/images.js";


function logoutFunctionality(){
    $("#logoutButton").on("click", async function () {
        const { error } = await logout();

        if (error) {
            alert(error.message);
            return;
        }

        window.location.href = "/login";
    });
}

function displayImagesIntoDom(imageData) {
    const $tbody = $(".image-gallery-table tbody");

    // clear existing rows
    $tbody.empty();

    // loop through images
    imageData.forEach((item, index) => {
        const isChecked = item.isDisplay === true ? "checked" : "";

        const row = `
              <tr>
                <td class="text-start">
                    <input id="${item.id}" type="checkbox" class="" ${isChecked} autocomplete="off">
                </td>
                <td>
                
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="d-flex align-items-center gap-2 mt-3">
                        <p class="mb-0">${item.name}</p> 
                        <a href="#" class="bg-secondary px-2 pt-0 pb-1 rounded-2 copy-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        </a>
                    </div>
                </td>
            </tr>
        `;

        $tbody.append(row);
    });
}

function setupDataTables() {
    new DataTable('#imageGallery', {
        pageLength: 20
    });
}

async function manageFetchImagesBasedOnUrl(){
    const path = window.location.pathname;

    if (path.endsWith("/uploaded-images")) {
        fetchNotDisplayedImages()
            .then(async (data) => {
                await displayImagesIntoDom(data);
                await setupDataTables();
            })
            .catch((err) => {
                console.error("Error fetching images:", err);
        });
    }

    if (path.endsWith("/displayed-images")) {
        fetchDisplayedImages()
            .then(async (data) => {
                await displayImagesIntoDom(data);
                await setupDataTables();
            })
            .catch((err) => {
                console.error("Error fetching images:", err);
            });
    }
}

function updateDateTables(selectedIds) {
    selectedIds.forEach((id) => {
        const input = $(`#imageGallery tbody tr td input#${id}`);

        if (!input.length) return;

        // find nearest <tr>
        const tr = input.closest("tr");

        if (!tr.length) return;

        // clear its content
        tr.html("");
    });

    $(".toast-notification-container .copy-toast").addClass("show");

    setTimeout(function () {
        $(".toast-notification-container .copy-toast").removeClass("show");
    }, 2000);
}

function showImagesToGallery() {
    $("#ShowToGalleryImages").on("click", function () {
        const selectedIds = [];

        $("#imageGallery tbody tr td input[type='checkbox']:checked").each(function () {
            selectedIds.push(this.id);
        });

        if (selectedIds.length === 0) {
            alert("No actions were performed.");
            return;
        }
       
       showImagesInGalleryPage(selectedIds)
            .then((result) => {
                updateDateTables(selectedIds);
            })
            .catch((err) => {
                console.error("Error updating images:", err);
            });
    });
}

function hideImagesToGallery() {
    $("#HideToGalleryImages").on("click", function () {
        const selectedIds = [];

        $("#imageGallery tbody tr td input[type='checkbox']:not(:checked)").each(function () {
            selectedIds.push(this.id);
        });

        if (selectedIds.length === 0) {
            alert("No actions were performed.");
            return;
        }
       
       hideImagesInGalleryPage(selectedIds)
            .then((result) => {
                updateDateTables(selectedIds);
            })
            .catch((err) => {
                console.error("Error updating images:", err);
            });
    });
}

$(document).ready(async function () {
    await requireAuth();
    await manageFetchImagesBasedOnUrl();
    await showImagesToGallery();
    await hideImagesToGallery();

    logoutFunctionality();
});

$(document).on("click", ".copy-icon", function () {
    // Find nearest parent that contains the <p>
    const text = $(this)
        .closest("div")   // adjust this selector to your actual wrapper
        .find("p")
        .text()
        .trim();

    navigator.clipboard.writeText(text);

    $(".toast-notification-container .table-updated-toast").addClass("show");

    setTimeout(function () {
        $(".toast-notification-container .table-updated-toast").removeClass("show");
    }, 2000);
})