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
                            <a href={location.pathname === "/sweet-gallery" ? "/" : "/sweet-gallery"} to={location.pathname === "/sweet-gallery" ? "/" : "/sweet-gallery"} className={`btn btn-primary  ${ location.pathname === "/sweet-gallery" ? "fixed bottom-0 mb-5" : "" }`} >
                             {location.pathname === "/sweet-gallery" ? "Home" : "See Our Gallery"} 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
}

export default Gallery;