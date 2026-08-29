import { useState } from "react";

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

    // return Object.entries(images).map(([path, src]) => ({
    //     src,
    //     category: "prenup" OR all or wedding or reception, // You can modify this based on your folder structure or naming convention
    //     path,
    // }));

    return Object.entries(images).map(([path, src], index) => ({
        src,
        category:
            index % 3 === 0
                ? "prenup"
                : index % 3 === 1
                    ? "wedding"
                    : "reception",
        path,
    }));
}

const ImageGalleryWithFilter = () => {
    const [filter, setFilter] = useState("all");

    const prenupImages = TakePrenupImages();

    const filteredImages =
        filter === "all"
            ? prenupImages
            : prenupImages.filter((image) => image.category === filter);

    return (
        <>
            <div className="mt-5 self-start">
                <div className="flex items-start justify-start gap-3">
                    <p className="whitespace-nowrap mt-2">Filter by:</p>
                    <div className="flex flex-wrap gap-2">
                        <a className="btn btn-secondary"
                            onClick={() => setFilter("all")}
                        >
                            All
                        </a>
                        <a className="btn btn-secondary"
                            onClick={() => setFilter("prenup")}
                        >
                            Prenup
                        </a>
                        <a className="btn btn-secondary"
                            onClick={() => setFilter("wedding")}
                        >
                            Wedding
                        </a>
                        <a className="btn btn-secondary"
                            onClick={() => setFilter("reception")}
                        >
                            Reception
                        </a>
                    </div>
                </div>

                <div className="wi-gallery-images gap-3 mt-5 grid grid-cols-3 justify-center items-start">
                    {Object.values(filteredImages).map((image, index) => (
                        <a key={index} className="fade-in show">
                            <img src={image.src} alt={`Prenup ${index + 1}`} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImageGalleryWithFilter;