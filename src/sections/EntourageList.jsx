import { getGuestsByType } from "../services/guestService";


const EntourageList = () => {
    const bestmanInfo = getGuestsByType("bestman");
    const maidOfHonorInfo = getGuestsByType("maid of honor");
    const veilInfo = getGuestsByType("veil");
    const chordInfo = getGuestsByType("chord");
    const candleInfo = getGuestsByType("candle");
    const groomsmen = getGuestsByType("groomsmen");
    const bridesmaids = getGuestsByType("bridesmaids");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
              
                        <div className="wi-title-container-info">
                            <h3>{bestmanInfo[0]["short-description"]}</h3>
                            <p>{bestmanInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{bestmanInfo[0].name}</p>

                        <div className="wi-title-container-info mt-7">
                            <h3>{maidOfHonorInfo[0]["short-description"]}</h3>
                            <p>{maidOfHonorInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{maidOfHonorInfo[0].name}</p>
    
                        <div className="wi-title-container-info mt-7">
                            <h3>{veilInfo[0]["short-description"]}</h3>
                            <p>{veilInfo[0].type}</p>
                        </div>
                        {veilInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        <div className="wi-title-container-info mt-7">
                            <h3>{chordInfo[0]["short-description"]}</h3>
                            <p>{chordInfo[0].type}</p>
                        </div>
                        {chordInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        <div className="wi-title-container-info mt-7">
                            <h3>{candleInfo[0]["short-description"]}</h3>
                            <p>{candleInfo[0].type}</p>
                        </div>
                        {candleInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        <div className="wi-title-container-info mt-7">
                            <h3>{candleInfo[0]["short-description"]}</h3>
                            <p>{candleInfo[0].type}</p>
                        </div>
                        {candleInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        <div className="wi-title-container-info mt-7">
                            <h3>{groomsmen[0]["short-description"]}</h3>
                            <p>{groomsmen[0].type}</p>
                        </div>
                        {groomsmen.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        <div className="wi-title-container-info mt-7">
                            <h3>{bridesmaids[0]["short-description"]}</h3>
                            <p>{bridesmaids[0].type}</p>
                        </div>
                        {bridesmaids.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
      </>
    );
}

export default EntourageList;