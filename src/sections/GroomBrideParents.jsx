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
    const offertoryCandle = getGuestsByType("Offertory Candle");
    const offertoryFlowers = getGuestsByType("Offertory Flowers");
    const offertoryFruits = getGuestsByType("Offertory Fruits");
    const hostAndWine = getGuestsByType("Host & Wine");
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
                        <div className="row w-full grid grid-cols-2 gap-3 mt-[-10px]">
                            <div className="text-right">
                                {malePrincipalInfo.map((parent) => (
                                    <p className="text-xs mt-3" key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {femalePrincipalInfo.map((data) => (
                                    <p className="text-xs mt-3" key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Peer Sponsors */}
                        <div className="wi-title-container-info mt-7">
                            <p className="text-center">Peer Sponsors</p>
                        </div>
                        <div className="row w-full grid grid-cols-2 gap-3 mt-[-10px]">
                            <div className="text-right">
                                {malePeerPrincipalInfo.map((parent) => (
                                    <p className="text-xs mt-3" key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {femalePeerPrincipalInfo.map((data) => (
                                    <p className="text-xs mt-3" key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    

                        {/* OFFERTORY SPONSORS */}
                        <div className="wi-title-container-info mt-7">
                            <p>Secondary Sponsors</p>
                        </div>
                        
                        {/* candleInfo */}
                        <div className="wi-title-container-info">
                             <h2 className="text-3xl mt-3 !mb-1">Candle</h2>
                        </div>
                        {candleInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* chordInfo */}
                        <div className="wi-title-container-info">
                             <h2 className="text-3xl mt-3 !mb-1">Cord</h2>
                        </div>
                        {chordInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* veilInfo */}
                        <div className="wi-title-container-info ">
                              <h2 className="text-3xl mt-3 !mb-1">Veil</h2>
                        </div>
                        {veilInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/*  LITURGICAL SPONSORS */}
                        <div className="wi-title-container-info mt-7">
                            <p className="!ms-0">Offertory Sponsors</p>
                        </div>

                        {/* Candle Info */}
                        <div className="wi-title-container-info">
                            <h2 className="text-3xl mt-3 !mb-1">Candle</h2>
                        </div>
                        {offertoryCandle.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* Flowers Info */}
                        <div className="wi-title-container-info">
                            <h2 className="text-3xl mt-3 !mb-1">Flowers</h2>
                        </div>
                        {offertoryFlowers.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* Fruits Info */}
                        <div className="wi-title-container-info">
                            <h2 className="text-3xl mt-3 !mb-1">Fruits</h2>
                        </div>
                        {offertoryFruits.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* Host & Wine Info */}
                        <div className="wi-title-container-info">
                            <h2 className="text-3xl mt-3 !mb-1">Host & Wine</h2>
                        </div>
                        {hostAndWine.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}
                    
                        {/* bestmanInfo */}
                        <div className="wi-title-container-info mt-7">
                            <p>{bestmanInfo[0].type}</p>
                        </div>
                        {bestmanInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}

                        {/* maidOfHonorInfo */}
                        <div className="wi-title-container-info mt-7">
                            <p>{maidOfHonorInfo[0].type}</p>
                        </div>
                        {maidOfHonorInfo.map((data) => (
                            <p key={data.id} className="text-lg mt-[-7px]">
                                {data.name}
                            </p>
                        ))}
                   

                        {/* Groomsmen and Bridesmaids */}
                        <div className="row w-full grid grid-cols-2 gap-3 mt-7">
                            <div className="text-right">
                                {/* Groomsmen */}
                                <div className="wi-title-container-info !items-end">
                                    <p>Groomsmen</p>
                                </div>
                                {groomsmen.map((parent, index) => (
                                    <p className={`text-xs ${index === 0 ? '' : 'mt-3'}`} key={parent.id}>
                                        {parent.name}
                                    </p>
                                ))}
                            </div>
                            <div>
                                {/* Bridesmaid */}
                                <div className="wi-title-container-info">
                                    <p className="!ml-0">Bridesmaid</p>
                                </div>
                                {bridesmaids.map((data, index) => (
                                    <p className={`text-xs ${index === 0 ? '' : 'mt-3'}`} key={data.id}>
                                        {data.name}
                                    </p>
                                ))}
                            </div>

                           
                        </div>
                        {/* ringBearerInfo */}
                        <div>
                            <div className="wi-title-container-info !items-center mt-7">
                                <p className="!ms-0" >{ringBearerInfo[0].type}</p>
                            </div>
                            <p className="mt-[-7px]">{ringBearerInfo[0].name}</p>
                        </div>

                        {/* coinBearerInfo */}
                        <div>
                            <div className="wi-title-container-info mt-7">
                                <p className="!ml-0">{coinBearerInfo[0].type}</p>
                            </div>
                            <p className="mt-[-7px]">{coinBearerInfo[0].name}</p>
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
                        
                        {/* firstReading */}
                        <div className="wi-title-container-info">
                            <h2 className="text-3xl mt-3 !mb-1">{firstReading[0].type}</h2>
                        </div>
                        {firstReading.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* secondReading */}
                        <div className="wi-title-container-info mt-7">
                            <h2 className="text-3xl mt-3 !mb-1">{secondReading[0].type}</h2>
                        </div>
                        {secondReading.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* responsorialPslam */}
                        <div className="wi-title-container-info mt-7">
                            <h2 className="text-3xl mt-3 !mb-1">{responsorialPslam[0].type}</h2>

                              <p>{responsorialPslam[0].type}</p>
                        </div>
                        {responsorialPslam.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* Commentator */}
                        <div className="wi-title-container-info mt-7">
                            <h2 className="text-3xl mt-3 !mb-1">{prayers[0].type}</h2>
                        </div>
                        {prayers.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}


                        {/* Commentator */}
                        <div className="wi-title-container-info mt-7">
                            <h2 className="text-3xl mt-3 !mb-1">Commentator</h2>
                        </div>
                        {commentator.map((item) => (
                            <p key={item.id} className="text-lg mt-[-7px]">
                                {item.name}
                            </p>
                        ))}

                        {/* Choir */}
                        <div className="wi-title-container-info mt-7">
                            <h2 className="text-3xl mt-3 !mb-1">Choir</h2>
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