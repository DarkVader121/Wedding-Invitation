import { useState } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLocation  } from "react-router";
import { TakePrenupImages, TakeOfficialPhotographyImages} from "../services/weddingImages";


const ImageGalleryWithFilter = () => {
    const location = useLocation();

    const [filter, setFilter] = useState("all");
    const prenupImages = TakePrenupImages();
    const officialPhotographyImages = TakeOfficialPhotographyImages();

    const allImages = [...prenupImages, ...officialPhotographyImages];
  
    const filteredImages =
        filter === "all"
            ? allImages
            : allImages.filter((image) => image.category === filter);
    

    return (
        <>
            <div className="mt-7">
               <div className="flex w-full max-w-[356px] min-w-0">
                    <div className="flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto overflow-y-hidden">
                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => setFilter("all")}
                        >
                            All
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => setFilter("prenup")}
                        >
                            Prenup
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => setFilter("official-photography")}
                        >
                            Official Photography
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0 extra"
                            style={{ backgroundColor: "rgb(110, 132, 156)" }}
                            onClick={() => setFilter("taken-by-guest")}
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
              
                <div className={`${ location.pathname === "/sweet-gallery" ? "" : "limit-9" } wi-gallery-images   gap-1 mt-5 grid grid-cols-3 justify-center items-start`}>
                    <PhotoProvider>
                        {filteredImages.length > 0 ? (
                            filteredImages.map((item, index) => (
                                <PhotoView key={item.path} src={item.src}>
                                    <a className="fade-in show">
                                        <img
                                            src={item.src}
                                            alt={`Prenup ${index + 1}`}
                                        />
                                    </a>
                                </PhotoView>
                            ))
                        ) : (
                            <div className="col-span-3">
                                <span className="mt-7 text-gray-500">
                                     No images for the meantime.
                                </span>
                            </div>
                        )}
                    </PhotoProvider>
                </div>
            </div>
        </>
    );
}

export default ImageGalleryWithFilter;