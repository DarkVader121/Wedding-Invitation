import heroImage from '../assets/images/background/hero-background.png'
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const Hero = () => {
    const [isUploading, setIsUploading] = useState(0);
    // Thank you State
    const [showThankYou, setShowThankYou] = useState(false);
  

    // Modal open close
    const [isOpen, setIsOpen] = useState(false);

    // Images data states
    const [images, setImages] = useState([
        // sameple data 
        // {
        //     id: "20260831222530001",
        //     src: "https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4=",
        //     category: "prenup",
            
        //     path: "prenup/image-1.jpg",
        // }
    ]); 

    useEffect(() => {
        console.log("images updated:", images);
    }, [images]);

    // State to manage hidden and removed items
    const [hiddenItems, setHiddenItems] = useState([]);

    const removeShow = (id) => {
        // Remove .show immediately
        setHiddenItems((prev) => [...prev, id]);

        // Remove the <a> after 3 seconds
        setTimeout(() => {
            setImages((prevImages) => {
                const updatedImages = prevImages.filter(
                    (image) => image.id !== id
                );

                return updatedImages;
            });
        }, 500);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

        if (!files.length) return;

        const newImages = files.map((file) => ({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            src: URL.createObjectURL(file),
            category: "guest",
            file: file,
            path: file.name,
        }));

        // Keep new images hidden initially
        setHiddenItems((prev) => [
            ...prev,
            ...newImages.map((item) => item.id),
        ]);

        setImages((prevImages) => [
            ...prevImages,
            ...newImages,
        ]);

        // After 3 seconds, show the new images
        setTimeout(() => {
            setHiddenItems((prev) =>
                prev.filter(
                    (id) => !newImages.some((item) => item.id === id)
                )
            );
        }, 800);

        // Allow selecting the same file again
        e.target.value = "";
    };

    const uploadImagesInSupabaseStorage = async () => {
       
        setIsUploading(0);
        // sanitize images array to only include those with a file 
        if (images.length === 0) {
            alert("No images to upload. Please select an image first.");
            return;
        }

        const totalImages = images.length;
        let completedImages = 0;

        Promise.all(
            images.map(async (image) => {
                setIsUploading(7); // Start with 10% to indicate the process has begun
                if (!image.file) {
                    return Promise.reject(
                        new Error("No image found, please select an image to upload.")
                    );
                }

                const file = image.file;
                const filePath = `wedding/${Date.now()}_${file.name}`;

                const result = await supabase
                .storage
                .from("Uploaded by Guests")
                .upload(filePath, file, {
                    cacheControl: "3600",
                    upsert: false
                });
                            // Only increment after the upload finishes
                completedImages++;

                const progress = Math.round(
                    (completedImages / totalImages) * 100
                );

                setIsUploading(progress);

                return result;
            })
        )
        .then((results) => {

        })
        .catch((error) => {

            console.error("Upload error:", error);
            alert("Something went wrong while uploading.");

        })
        .finally(() => {
            setTimeout(() => {
                // All uploads completed successfully
                setImages([]);
                setIsUploading(0);
                setShowThankYou(true);
            }, 800);
            
        });

    };

    return (
        <>
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            {/* Offcanvas Open button */}
            <a className='btn btn-primary ms-5' onClick={() => setIsOpen(true)} style={{ backgroundColor: '#6c849c' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    className="size-8"
                >
                    <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />

                    <path
                        fillRule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </section>

        {/* Overlay */}
        <div
            onClick={() => setIsOpen(false)}
            className={`
                fixed inset-0 z-40 bg-black/50
                transition-opacity duration-300
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
        />

        {/* Offcanvas */}
        <div
            className={`
                fixed top-0 left-0 z-50
                h-screen  w-[90%]
                bg-white shadow-xl
                transform
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            {/* Header */}
            <section className='h-full overflow-y-scroll'>
                <div className="container">
                    <a className='btn btn-primary' onClick={() => setIsOpen(false)} style={{ backgroundColor: '#6c849c' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                        </svg>
                    </a>


                    <div className='flex justify-between align-start'>
                        <p className="mt-7 text-2xl"> {showThankYou ? "Thank You!" : "Upload Memories"}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-7 text-primary mt-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
                            />
                        </svg>

                    </div>
               
                    <p className="mt-3">
                        {showThankYou
                            ? "Thank you for sharing your memories with us!, Every memory here was made possible by the people."
                            : "Share your morning moments to the last dance under the string lights, every memory here was made possible by the people."}
                    </p>
                    
                    { showThankYou ? "" : (
                            <>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="image-upload"
                                    className="hidden"
                                    multiple
                                    onChange={handleImageUpload}
                                />

                                <a onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("image-upload").click();
                                    }}
                                    className='active-state mt-5 relative flex flex-col justify-center items-center w-[100%] h-[170px] bg-gray-100 rounded-xl'>
                                    <span className='absolute top-2 left-2 w-5 h-5 border-t-[3px] border-l-[3px] border-slate-700 rounded-tl-md'></span>
                                    <span className='absolute top-2 right-2 w-5 h-5 border-t-[3px] border-r-[3px] border-slate-700 rounded-tr-md'></span>
                                    <span className='absolute bottom-2 left-2 w-5 h-5 border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-md'></span>
                                    <span className='absolute bottom-2 right-2 w-5 h-5 border-b-[3px] border-r-[3px] border-slate-700 rounded-br-md'></span>
                                

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-10 text-primary"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                                        />
                                    </svg>
                                    <p className='mt-3'>Slip your photo into this place</p>
                                    <p className='text-xs !text-secondary'>PNG, JPG, PDF, GIF, SVG</p>
                                </a>

                                <div className="wi-gallery-images no-effects  gap-1 mt-5 grid grid-cols-3 justify-center items-start">
                                {images
                                    .map((item) => (
                                        <a
                                            key={item.id}
                                            className={`fade-in mt-3 ${
                                                hiddenItems.includes(item.id) ? "" : "show"
                                            }`}
                                        >
                                            <button
                                                className="cancel-btn absolute right-0 -mt-[14px] p-1 bg-secondary w-min rounded-full"
                                                onClick={() => removeShow(item.id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-5 text-white"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                    />
                                                </svg>
                                            </button>

                                            <img className="!h-[100px]" src={item.src} alt={item.category} />
                                        </a>
                                    ))}
                                </div>
                            </>
                        ) 
                    }
                
                    {showThankYou ? (
                        <>
                        
                            <div className="flex gap-1">
                                <a
                                    className="mt-7 mb-[5rem] btn btn-primary"
                                    href="/sweet-gallery"
                                >
                                    View Gallery
                                </a>
                                <a
                                    className="mt-7 mb-[5rem] btn btn-secondary"
                                    onClick={() => {
                                        setShowThankYou(false);
                                    }}
                                >
                                    Upload again, Please 
                                </a>

                              
                            </div>
                
                        </>
                    ) : (
                        <>
                    <a
                        className="mt-7 mb-[5rem] btn btn-primary relative overflow-hidden"
                        onClick={isUploading > 0 ? undefined : uploadImagesInSupabaseStorage}
                    >
                        {isUploading > 0 && (
                            <span
                                className="absolute left-0 top-0 h-full bg-secondary transition-all duration-300"
                                style={{ width: `${isUploading}%` }}
                            />
                        )}

                        <span className="relative z-10">
                            {isUploading > 0
                                ? `Uploading ${isUploading}%`
                                : "Request to Display in Gallery"}
                        </span>
                    </a>
                                
                    </>
                    )}
                
                </div>
            </section>
        </div>
      </>
    );
}

export default Hero;