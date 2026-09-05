import { useState, useEffect, useRef } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLocation  } from "react-router";
import { TakePrenupImages, TakeOfficialPhotographyImages, FetchTakenByGuestWithDisplayImages } from "../services/weddingImages";



const Test = () => {
    // location checker
    const location = useLocation();

    // Show more display
    const [hasMoreGuestImages, setHasMoreGuestImages] = useState(false);

    // loading guest images state
    const [loadingGuestImages , setLoadingGuestImages] = useState(false);

    // Guest Pages
    const [guestPage, setGuestPage] = useState(0);

    // Static and Dynamic Images
    const [guestImages, setGuestImages] = useState([]);
    const prenupImages = TakePrenupImages();
    const officialPhotographyImages = TakeOfficialPhotographyImages();
     
    // filter functionality
    const [filter, setFilter] = useState("all");
    const allImages = [ ...prenupImages, ...officialPhotographyImages, ...guestImages];
    const filteredImages =
        filter === "all"
            ? allImages
            : allImages.filter((image) => image.category === filter);
    
    // When the page loads, run fetchGuestImages();
    const hasFetchedGuestImages = useRef(false);
    useEffect(() => {
        if (hasFetchedGuestImages.current) {
            return;
        }
        hasFetchedGuestImages.current = true;
        fetchGuestImages(0);
    }, []);

    // Fetch the guest image from component
    const fetchGuestImages = async (page = 0) => {
        setLoadingGuestImages(true);

        const limit = 12;
        const from = page * limit;
        const to = from + limit - 1;

        const data = await FetchTakenByGuestWithDisplayImages(from, to);

        setGuestImages((prev) => [...prev, ...data]);

        // If less than 10 were returned, there are no more images
        if (data.length < limit) {
            setHasMoreGuestImages(false);
        } else {
            setHasMoreGuestImages(true);
        }

        setLoadingGuestImages(false);
    };

    // Show more function
    const handleShowMore = async () => {
        const nextPage = guestPage + 1;
        await fetchGuestImages(nextPage);
        setGuestPage(nextPage);
    };

    return (
        <>
        <div className="container">
             <div className="mt-7">
               <div className="flex w-full max-w-[356px] min-w-0">
                    <div className="flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto overflow-y-hidden">
                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => {
                                setFilter("all");
                            }}
                        >
                            All
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => {
                                setFilter("prenup")}}
                        >
                            Prenup
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => {
                                setFilter("official-photography")
                            }}
                        >
                            Official Photography
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0 extra"
                            style={{ backgroundColor: "rgb(110, 132, 156)" }}
                            onClick={() => {
                                setFilter("taken-by-guest");
                            }}
                        >
                            Taken by Guest
                        </a>
                    </div>
                </div>
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
              
                <div className={`${ location.pathname === "/sweet-gallery" ? "" : "" } wi-gallery-images   gap-1 mt-5 grid grid-cols-3 justify-center items-start`}>
                   <PhotoProvider>
                        {filteredImages.map((item, index) => (
                            <PhotoView key={item.id} src={item.src}>
                              
                                <a className="fade-in show">
                                    <img
                                        src={item.src}
                                        alt={`Image ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </a>
                            </PhotoView>
                        ))}
                    </PhotoProvider>
                </div>
                {/* Only display if there more guest images and filter is either all or taken-by-guest */}
                {hasMoreGuestImages &&
                    (filter === "all" || filter === "taken-by-guest") && (
                        <div className="flex justify-end my-5">
                            <button
                                className="btn btn-primary mb-10"
                                onClick={handleShowMore}
                                disabled={loadingGuestImages}
                            >
                                {loadingGuestImages ? "Loading..." : "Show More"}
                            </button>
                        </div>
                    )}
                                    
            </div>
        </div>
           
        </>
    );
}

export default Test;