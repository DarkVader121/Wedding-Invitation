import { logoutUser } from "../services/auth";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useState, useEffect, useRef } from "react";
import { FetchTakenByGuestWithDisplayImages, FetchTakenByGuestWithoutDisplayImages, isDisplayToTrueOrFalse } from "../services/weddingImages";

const ManageImages = () => {
    //loadingGuestImages
    const [loadingGuestImages, setLoadingGuestImages] = useState(0);

    // Guest Pages
    const [guestPageWithDisplay, setGuestPageWithDisplay] = useState(0);
    const [guestPageNoDisplay, setGuestPageNoDisplay] = useState(0);

    // Guest Images With Display
    const [hasMoreGuestWithImages, setHasMoreGuestWithImages] = useState(false);
    const [hasMoreGuestNoImages, setHasMoreGuestNoImages] = useState(false);

    // Search by Name functionality
    const [searchName, setSearchName] = useState("");

    // Static and Dynamic Images
    const [guestImagesWithDisplay, setGuestImages] = useState([]);
    const [guestImagesNoDisplay, setGuestNoDisplayImages] = useState([]);

    // filter functionality
    const [filter, setFilter] = useState("taken-by-guest-noDisplay");
    const allImages = [ ...guestImagesNoDisplay, ...guestImagesWithDisplay ];
    const filteredImages = allImages.filter((image) => {
        const matchesFilter =
            filter === "all" || image.category === filter;

        const matchesName =
            image.name
                ?.toLowerCase()
                .includes(searchName.toLowerCase());

        return matchesFilter && matchesName;
    });

    const handleLogout = async () => {
        const { error } = await logoutUser();
        if (error) {
            alert(error.message);
            return;
        }
    };

     // When the page loads, run fetchGuestImages();
     const hasFetchedGuestImages = useRef(false);
     useEffect(() => {
         if (hasFetchedGuestImages.current) {
             return;
         }
         hasFetchedGuestImages.current = true;
         
        fetchGuestImagesWithDisplay(0);
        fetchGuestImagesWithoutDisplay(0);
     }, []);

    const fetchGuestImagesWithDisplay = async (page = 0) => {
        setLoadingGuestImages(true);

        const limit = 12;
        const from = page * limit;
        const to = from + limit - 1;

        const data = await FetchTakenByGuestWithDisplayImages(from, to);

        // setGuestImages(data);

        setGuestImages((prev) => {
            const existingIds = new Set(prev.map((item) => item.id));

            const newData = data.filter(
                (item) => !existingIds.has(item.id)
            );

            return [...prev, ...newData];
        });


        // If less than 10 were returned, there are no more images
        if (data.length < limit) {
            setHasMoreGuestWithImages(false);
        } else {
            setHasMoreGuestWithImages(true);
        }

        setLoadingGuestImages(false);
    };

    // Show more function
    const handleShowMore = async () => {
        const nextPage = guestPageWithDisplay + 1;

        console.log("nextPage" ,nextPage);
        await fetchGuestImagesWithDisplay(nextPage);
        setGuestPageWithDisplay(nextPage);
    };

    const fetchGuestImagesWithoutDisplay = async (page = 0) => {
        setLoadingGuestImages(true);

        const limit = 12;
        const from = page * limit;
        const to = from + limit - 1;

        const data = await FetchTakenByGuestWithoutDisplayImages(from, to);

        // setGuestNoDisplayImages(data);

        setGuestNoDisplayImages((prev) => {
            const existingIds = new Set(prev.map((item) => item.id));

            const newData = data.filter(
                (item) => !existingIds.has(item.id)
            );

            return [...prev, ...newData];
        });

         // If less than 10 were returned, there are no more images
        if (data.length < limit) {
            setHasMoreGuestNoImages(false);
        } else {
            setHasMoreGuestNoImages(true);
        }

        setLoadingGuestImages(false);
    };

    const handleShowMoreNoDisplay = async () => {
        const nextPage = guestPageNoDisplay + 1;
        await fetchGuestImagesWithoutDisplay(nextPage);
        setGuestPageNoDisplay(nextPage);
    };

    const handleSwitch = async (id, isDisplay) => {
        const { error } = await isDisplayToTrueOrFalse(id, isDisplay);

        if (error) {
            console.error(error);
            return;
        }

        // Update displayed images
        setGuestImages((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isDisplay }
                    : item
            )
        );

        // Update not-displayed images
        setGuestNoDisplayImages((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isDisplay }
                    : item
            )
        );
    };


    const handleNoDisplayBtn =  () => {
        console.log("Not Displayed btn");

        // fetchGuestImagesWithoutDisplay(0);
        
        setFilter("taken-by-guest-noDisplay");
    }

    const handleDisplayBtn =  () => {
        console.log("Displayed btn");

        // fetchGuestImagesWithDisplay(0);
        
        setFilter("taken-by-guest");
    }


    return (
        <section>
            <div className="container">
               
                <a
                    type="button"
                    className=""
                    onClick={handleLogout}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>

                    Logout
                </a>

                <div className="mt-7">
                    <p className="text-2xl">Manage Displayed Images</p>
                    <p>Turn images on or off to control which ones are displayed.</p>

                    <div className=" mt-5 flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden">
                        <a
                            className="btn btn-primary btn-sm !w-max shrink-0"
                            onClick={() => {
                                console.log("Not Displayed Btn")
                                setFilter("taken-by-guest-noDisplay");
                            }}
                        >
                            Not Displayed
                        </a>

                        <a
                            className="btn btn-secondary btn-sm !w-max shrink-0"
                            onClick={() => {
                                console.log("Displayed Btn")
                                setFilter("taken-by-guest");
                            }}
                        >
                            Displayed
                        </a>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            id="loginEmail"
                            type="text"
                            placeholder="Search by Name"
                            className="form-control mt-5"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </form>
                       
                    <div className="wi-gallery-images gap-1 mt-1 grid grid-cols-3 justify-center items-start">
                        <PhotoProvider
                          overlayRender={({ index, onClose }) => (
                            <div className="PhotoView-Slider__BannerWrap">
                                
                                <div className="PhotoView-Slider__Counter">
                                    {index + 1} / {filteredImages.length}
                                </div>

                                <div className="PhotoView-Slider__Counter flex gap-2 items-center">
                                    {filteredImages[index]?.name}

                                    <button type="button" className="btn bg-white opacity-77 !p-1 rounded-lg !min-w-5" onClick={() => { navigator.clipboard.writeText(filteredImages[index]?.name || ""); }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="PhotoView-Slider__BannerRight">
                                    <svg
                                        width="44"
                                        height="44"
                                        viewBox="0 0 768 768"
                                        className="PhotoView-Slider__toolbarIcon"
                                        onClick={onClose}
                                    >
                                        <path d="M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z" />
                                    </svg>
                                </div>

                            </div>
                        )}
                        >
                            {filteredImages.map((item, index) => (
                                <div key={item.id}  className="pt-5">
                                    <PhotoView src={item.src}>
                                        <a className="fade-in show ">
                                            <img
                                                src={item.src}
                                                alt={`Image ${index + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </a>
                                    </PhotoView>
                                </div>
                            ))}
                        </PhotoProvider>
                    </div>

                    {hasMoreGuestWithImages &&
                        (filter === "taken-by-guest") 
                        && (
                            <div className="flex justify-end my-5">
                                <button
                                    className="btn btn-secondary mb-10"
                                    onClick={handleShowMore}
                                    disabled={loadingGuestImages}
                                >
                                    {loadingGuestImages ? "Loading..." : "Show More"}
                                </button>
                            </div>
                    )}

                    {hasMoreGuestNoImages &&
                        (filter === "taken-by-guest-noDisplay") 
                        && (
                            <div className="flex justify-end my-5">
                                <button
                                    className="btn btn-secondary mb-10"
                                    onClick={handleShowMoreNoDisplay}
                                    disabled={loadingGuestImages}
                                >
                                    {loadingGuestImages ? "Loading..." : "Show More"}
                                </button>
                            </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ManageImages;