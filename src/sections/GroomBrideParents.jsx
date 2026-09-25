import { getGuestsByType } from "../services/guestService";

const GroomBrideParents = () => {
    const groomsParents = getGuestsByType("Groom's Parents");
    const bridesParents = getGuestsByType("Bride’s parents");
    const mainCelebrant = getGuestsByType("Main Celebrant");
    const coCelebrant = getGuestsByType("Co Celebrant");
    const femalePrincipalInfo = getGuestsByType("Female Principal Sponsors");
    const malePrincipalInfo = getGuestsByType("Male Principal Sponsors");
    const femalePeerPrincipalInfo = getGuestsByType("Female Peer Principal Sponsors");
    const malePeerPrincipalInfo = getGuestsByType("Male Peer Principal Sponsors");
    const bestmanInfo = getGuestsByType("bestman");
    const maidOfHonorInfo = getGuestsByType("maid of honor");
    const veilInfo = getGuestsByType("veil");
    const chordInfo = getGuestsByType("chord");
    const candleInfo = getGuestsByType("candle");
    const groomsmen = getGuestsByType("groomsmen");
    const bridesmaids = getGuestsByType("bridesmaids");
    const ringBearerInfo = getGuestsByType("ring bearer");
    const coinBearerInfo = getGuestsByType("coin bearer");
    const bibleBearerInfo = getGuestsByType("bible bearer");
    const flowergirls = getGuestsByType("flower girls");
    const heraldInfo = getGuestsByType("herald bearer");

    const firstReading = getGuestsByType("First Reading");
    const secondReading = getGuestsByType("Second Reading");
    const responsorialPslam = getGuestsByType("Responsorial Pslam");
    const prayers = getGuestsByType("Prayers of the Faithful");
    const commentator = getGuestsByType("Commentator");
    const choir = getGuestsByType("CHOIR");
    return (
        <>
            <div className="entourage-section py-7">
                <div className="container">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="wi-title-container-info">
                            <p className="font-semibold">The entourage</p>
                        </div>

                        <h2 className="text-6xl mt-7">Lapac & Cagas</h2>
                        
                        <div className="wi-title-container-info mt-7">
                            <p>Officiating Priests</p>
                        </div>
                        <p className="text-lg mt-[-7px]">
                            {mainCelebrant[0].name}
                        </p>
                        <p className="text-lg mt-[-7px]">
                            {coCelebrant[0].name}
                        </p>

                        {/* Grooms Parents */}
                        <div className="wi-title-container-info mt-7">
                            <p>{groomsParents[0]?.type}</p>
                        </div>

                        {groomsParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}
                       

                        {/* Brides Parents */}
                        <div className="wi-title-container-info mt-7">
                              <p>{bridesParents[0]?.type}</p>
                        </div>
                        {bridesParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}

                        {/* Principal Sponsors */}
                        <div className="wi-title-container-info mt-7">
                            <p className="text-center">Principal Sponsors</p>
                        </div>
                        <div className="row w-full grid grid-cols-2 gap-3">
                            <div className="text-right">
                                {malePrincipalInfo.map((parent) => (
                                    <p key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {femalePrincipalInfo.map((data) => (
                                    <p key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Peer Sponsors */}
                        <div className="wi-title-container-info mt-7">
                            <p className="text-center">Peer Sponsors</p>
                        </div>
                        <div className="row w-full grid grid-cols-2 gap-3">
                            <div className="text-right">
                                {malePeerPrincipalInfo.map((parent) => (
                                    <p key={parent.id} >
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {femalePeerPrincipalInfo.map((data) => (
                                    <p key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Offertory Sponsors */}
                        <div className="wi-title-container-info mt-7">
                            <p>Offertory Sponsors</p>
                        </div>
                        <div className="row w-full grid grid-cols-2 gap-3 mt-3">
                            <div className="text-right">
                                {/* candleInfo */}
                                <div className="wi-title-container-info !items-end ">
                                    <p>{candleInfo[0].type}</p>
                                </div>
                                {candleInfo.map((data) => (
                                    <p key={data.id} className="text-lg mt-[-7px]">
                                        {data.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {/* chordInfo */}
                                <div className="wi-title-container-info ml-0  text-center">
                                    <p className="!ms-0">{chordInfo[0].type}</p>
                                </div>
                                {chordInfo.map((data) => (
                                    <p key={data.id} className="text-lg mt-[-7px]">
                                        {data.name}
                                    </p>
                                ))}
                            </div>
            
                        </div>

                        {/* veilInfo */}
                        <div className="wi-title-container-info mt-7">
                            <p>{veilInfo[0].type}</p>
                        </div>
                        {veilInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}
                    

                        <div className="row w-full grid grid-cols-2 gap-3 mt-7">
                            <div className="text-right">
                                 {/* Bestman */}
                                <div className="wi-title-container-info !items-end">
                                    <p>Bestman</p>
                                </div>
                                <p className="text-lg mt-[-7px]">{bestmanInfo[0].name}</p>
                            </div>
                            <div>
                                {/* Bridesmaid */}
                                <div className="wi-title-container-info">
                                    <p className="!ml-0">Maid of Honor</p>
                                </div>
                                 <p className="text-lg mt-[-7px]">{maidOfHonorInfo[0].name}</p>
                            </div>
                        </div>

                        {/* Groomsmen and Bridesmaids */}
                        <div className="row w-full grid grid-cols-2 gap-3 mt-7">
                            <div className="text-right">
                                {/* Groomsmen */}
                                <div className="wi-title-container-info !items-end">
                                    <p>Groomsmen</p>
                                </div>
                                {groomsmen.map((parent) => (
                                    <p key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {/* Bridesmaid */}
                                <div className="wi-title-container-info">
                                    <p className="!ml-0">Bridesmaid</p>
                                </div>
                                {bridesmaids.map((data) => (
                                    <p key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>

                            {/* ringBearerInfo */}
                            <div className="text-right">
                                <div className="wi-title-container-info mt-7 !items-end">
                                    <p>{ringBearerInfo[0].type}</p>
                                </div>
                                <p className=" mt-[-7px]">{ringBearerInfo[0].name}</p>
                            </div>

                            {/* coinBearerInfo */}
                            <div>
                                <div className="wi-title-container-info mt-7">
                                    <p className="!ml-0">{coinBearerInfo[0].type}</p>
                                </div>
                                <p className="mt-[-7px]">{coinBearerInfo[0].name}</p>
                            </div>
                        </div>

                        {/* bibleBearerInfo */}
                        <div className="wi-title-container-info mt-7">
                            <p>{bibleBearerInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{bibleBearerInfo[0].name}</p>

                        {/* flowergirls */}
                        <div className="wi-title-container-info mt-7">
                              <p>Flower Girls</p>
                        </div>
                        {flowergirls.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* Herald Bearer */}
                        <div className="wi-title-container-info mt-7">
                              <p>Herald Bearer</p>
                        </div>
                        {heraldInfo.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/*  LITURGICAL SPONSORS */}
                        <div className="wi-title-container-info mt-7">
                            <p>LITURGICAL SPONSORS</p>
                        </div>
                        <div className="row w-full grid grid-cols-2 gap-3 mt-7">
                            <div className="text-right">
                                {/* First Reading */}
                                <div className="wi-title-container-info !items-end">
                                    <p>First Reading</p>
                                </div>
                                {firstReading.map((parent) => (
                                    <p key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {/* Second Reading */}
                                <div className="wi-title-container-info">
                                    <p className="!ml-0">Second Reading</p>
                                </div>
                                {secondReading.map((data) => (
                                    <p key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>

                            {/* responsorialPslam */}
                            <div className="text-right">
                                <div className="wi-title-container-info mt-7 !items-end">
                                    <p>Responsorial Pslam"</p>
                                </div>
                                <p className="mt-[-7px]">{responsorialPslam[0].name}</p>
                            </div>

                            {/* coinBearerInfo */}
                            <div>
                                <div className="wi-title-container-info mt-7">
                                    <p className="!ml-0">{prayers[0].type}</p>
                                </div>
                                <p className="mt-[-7px]">{prayers[0].name}</p>
                            </div>
                        </div>

                        {/* Commentator */}
                        <div className="wi-title-container-info mt-7">
                              <p>Commentator</p>
                        </div>
                        {commentator.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* Choir */}
                        <div className="wi-title-container-info mt-7">
                              <p>Choir</p>
                        </div>
                        {choir.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
      </>
    );
}

export default GroomBrideParents;