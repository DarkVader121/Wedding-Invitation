import { useState, useMemo } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { TakeOfficialPhotographyImages } from "../services/weddingImages";

const SweetGalleryGuestOfficial = ({ filter = "wedding" }) => {
   const BtnFilters = [
        {
            key: "prenup",
            label: "Pre-Wedding",
            page: "/sweet-gallery/prenup"
        },
        {
            key: "wedding",
            label: "Wedding Day",
            page: "/sweet-gallery/wedding-day"
        },
        {
            key: "taken-by-guest",
            label: "Guest Photos",
            page: "/sweet-gallery/guest-photos"
        }
    ];

    // Pagination settings
    const ITEMS_PER_PAGE = 9;

    const [currentPage, setCurrentPage] = useState(1);

    // Fetch images
    const prenupImages = TakeOfficialPhotographyImages();

    // Calculate pagination
    const totalPages = Math.ceil(prenupImages.length / ITEMS_PER_PAGE);

    const paginatedImages = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

        return prenupImages.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );
    }, [prenupImages, currentPage]);


    const startItem = prenupImages.length
        ? (currentPage - 1) * ITEMS_PER_PAGE + 1
        : 0;

    const endItem = Math.min(
        currentPage * ITEMS_PER_PAGE,
        prenupImages.length
    );
    return (
        <>
          <section className="min-h-[1300vh]">
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container">
                            <h3>Candid</h3>
                            <p>Gallery</p>
                        </div>

                        <div className="mt-7 flex w-full flex-col text-start">

            {/* Gallery Filters */}
            <div className="flex w-full justify-start">
                <div className="flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden"  id="gallery-filters">
                    {BtnFilters.map(({ key, label, page }) => (
                        <a
                            key={key}
                            href={`${page}#gallery-filters`}
                            className={`btn btn-sm !w-max shrink-0 ${
                                filter === key ? "btn-primary" : ""
                            }`}
                            
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-primary"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                    />
                </svg>
                <p className="text-xs mt-1">Scroll Right</p>
            </div>

            {/* Image Gallery */}
            <div className="wi-gallery-images gap-1 mt-5 grid grid-cols-3 justify-center items-start">

                <PhotoProvider
                    overlayRender={({ index, onClose }) => {
                        const image = paginatedImages[index];

                        return (
                            <div className="PhotoView-Slider__BannerWrap">

                                <div className="PhotoView-Slider__Counter">
                                    {index + 1} / {paginatedImages.length}
                                </div>

                                <div className="PhotoView-Slider__Counter flex gap-2 items-center">
                                    {image?.name}

                                    <button
                                        type="button"
                                        className="btn bg-white opacity-77 !p-1 rounded-lg !min-w-5"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                image?.name || ""
                                            );
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-3 text-black"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="PhotoView-Slider__BannerRight">
                                    <svg
                                        width="44"
                                        height="44"
                                        viewBox="0 0 768 768"
                                        className="PhotoView-Slider__toolbarIcon"
                                        onClick={onClose}
                                    >
                                        <path d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z" />
                                    </svg>
                                </div>

                            </div>
                        );
                    }}
                >
                    {paginatedImages.map((item, index) => (
                        <PhotoView key={item.id} src={item.src}>
                            <a className="fade-in show">
                                <img
                                    src={item.src}
                                    alt={`Image ${startItem + index}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                        </PhotoView>
                    ))}
                </PhotoProvider>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-7 flex items-center justify-between gap-3">

                    <p className="text-sm text-gray-500">
                        Showing {startItem} - {endItem} of {prenupImages.length} images
                    </p>

                    <div className="flex items-center justify-center gap-2">
                        <button
                            className="btn btn-xs !w-max shrink-0 btn-primary"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

                        </button>

                        <button
                            className="btn btn-xs !w-max shrink-0 btn-primary"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                        </button>
                    </div>
                </div>
            )}

        </div>
                    </div>
                </div>
            </section>
      </>
    );
}

export default SweetGalleryGuestOfficial;