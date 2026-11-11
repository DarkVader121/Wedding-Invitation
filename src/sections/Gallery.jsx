import { PrenupGallery} from "../components"

const Gallery = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container">
                            <h3>Candid</h3>
                            <p>Gallery</p>
                        </div>

                        <PrenupGallery/>
                    </div>
                </div>

            </section>
      </>
    );
}

export default Gallery;