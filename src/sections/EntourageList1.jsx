import { getGuestsByType } from "../services/guestService";


const EntourageList1 = () => {
    const ringBearerInfo = getGuestsByType("ring bearer");
    const arrhaeBearerInfo = getGuestsByType("arrhae bearer");
    const bibleBearerInfo = getGuestsByType("bible bearer");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
              
                        <div className="wi-title-container-info">
                            <h3>{ringBearerInfo[0]["short-description"]}</h3>
                            <p>{ringBearerInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{ringBearerInfo[0].name}</p>

                        <div className="wi-title-container-info mt-7">
                            <h3>{arrhaeBearerInfo[0]["short-description"]}</h3>
                            <p>{arrhaeBearerInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{arrhaeBearerInfo[0].name}</p>

                        <div className="wi-title-container-info mt-7">
                            <h3>{bibleBearerInfo[0]["short-description"]}</h3>
                            <p>{bibleBearerInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{bibleBearerInfo[0].name}</p>
    
                    </div>
                </div>
            </section>
      </>
    );
}

export default EntourageList1;