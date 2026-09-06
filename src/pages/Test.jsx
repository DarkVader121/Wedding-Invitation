import { logoutUser } from "../services/auth";
import { useState, useEffect, useRef } from "react";
import { FetchTakenByGuestWithDisplayImages, FetchTakenByGuestWithoutDisplayImages } from "../services/weddingImages";

const Test = () => {

    const hasFetchedGuestImages = useRef(false);
    useEffect(() => {
        if (hasFetchedGuestImages.current) {
            return;
        }
        hasFetchedGuestImages.current = true;

        fetchWithDisplay(0);
    }, []);

    const fetchWithDisplay = async (page = 0) => {
        const limit = 12;
        const from = page * limit;
        const to = from + limit - 1;

        const withData = await FetchTakenByGuestWithDisplayImages(from, to);
        console.log("with data", withData);

        const withOutData = await FetchTakenByGuestWithoutDisplayImages(from, to);
        console.log("withOut data", withOutData);
    };


    return (
        <section>
            <div className="container">
                <a onClick={logoutUser} type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    Logout
                </a>

                <p className="text-2xl mt-7">Manage Displayed Images</p>
                <p>Turn images on or off to control which ones are displayed.</p>

                <div className=" mt-5 flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden">
                    <a className="btn btn-primary btn-sm !w-max shrink-0"  >
                        Not Displayed
                    </a>

                    <a className="btn btn-secondary btn-sm !w-max shrink-0">
                        Displayed
                    </a>
                </div>
            </div>
        </section>
           
    
    );
}

export default Test;