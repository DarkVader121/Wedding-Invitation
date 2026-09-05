import {ImageGalleryWithFilter} from "../components"
import { useLocation  } from "react-router";


const Gallery = () => {
  const location = useLocation();

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container">
                            <h3>Sweet</h3>
                            <p>Gallery</p>
                        </div>

                        <p className="mt-7 text-center">
                            morning moments to the last dance under the string lights, every memory here was made possible by the people who showed up for us. We carry each of you with us into this new chapter.
                        </p>

                        <ImageGalleryWithFilter/>
                        <div className="mt-5 text-center flex justify-center">
                            <a
                                href={location.pathname === "/sweet-gallery" ? "/" : "/sweet-gallery"}
                                className={`btn btn-primary ${
                                    location.pathname === "/sweet-gallery"
                                        ? "fixed bottom-0 left-0 ms-3 mb-10 px-3 py-5"
                                        : ""
                                }`}
                            >
                                {location.pathname === "/sweet-gallery" ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-8 inline-block "
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                            />
                                        </svg>
                                    </>
                                ) : (
                                    "See Our Gallery"
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
}

export default Gallery;