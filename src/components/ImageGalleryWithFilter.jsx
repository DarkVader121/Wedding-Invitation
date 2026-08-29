
// take all images from prenup folder
const TakePrenupImages = () => {
    const images = import.meta.glob(
        "../assets/images/prenup/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );
    return images;
}

const ImageGalleryWithFilter = () => {
    const prenupImages = TakePrenupImages();

    return (
        <>
            <div className="mt-5 self-start">
                <div className="flex items-start justify-start gap-3">
                    <p className="whitespace-nowrap mt-2">Filter by:</p>
                    <div className="flex flex-wrap gap-2">
                        <a className="btn btn-secondary">All</a>
                        <a className="btn btn-secondary">Prenup</a>
                        <a className="btn btn-secondary">Wedding</a>
                        <a className="btn btn-secondary">Reception</a>
                    </div>
                </div>

                <div className="wi-gallery-images gap-3 mt-5 grid grid-cols-3 justify-center items-center">
                    {Object.values(prenupImages).map((image, index) => (
                        <a key={index} className="fade-in show">
                            <img src={image} alt={`Prenup ${index + 1}`} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageGalleryWithFilter;