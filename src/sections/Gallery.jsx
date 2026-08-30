import {ImageGalleryWithFilter} from "../components"

const Gallery = () => {

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
                            <a className="btn btn-primary btn-lg">
                            See Our Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
}

export default Gallery;