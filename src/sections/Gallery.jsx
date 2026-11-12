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
                        {window.location.pathname === "/sweet-gallery/prenup" && (
                            // Your anchor here
                            <a href="/" className="btn btn-sm !w-max shrink-0 absolute top-5 right-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                            </a>
                        )}
                      
                        <PrenupGallery/>
                    </div>
                </div>

            </section>
      </>
    );
}

export default Gallery;