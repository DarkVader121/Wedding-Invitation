import { useEffect, useRef } from "react";

const Test = () => {

    const hasFetchedGuestImages = useRef(false);
    useEffect(() => {
        if (hasFetchedGuestImages.current) {
            return;
        }
        hasFetchedGuestImages.current = true;
        console.log("test");
    }, []);


    return (
        <>
        <div className="container">
             <div className="mt-7">
              test              
            </div>
        </div>
           
        </>
    );
}

export default Test;