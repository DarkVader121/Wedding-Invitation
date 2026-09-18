import { getGuestsByType } from "../services/guestService";
import { Cutoffs } from '../components'

const GroomBrideParents = () => {
    const groomInfo = getGuestsByType("groom");
    const brideInfo = getGuestsByType("bride");
    const groomsParents = getGuestsByType("Parents of the Groom");
    const bridesParents = getGuestsByType("Parents of the Bride");
    const mainCelebrant = getGuestsByType("Main Celebrant");
    const coCelebrant = getGuestsByType("Co Celebrant");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        {/* Groom */}
                      
                        <div className="wi-title-container-info">
                            <p className="font-semibold">{groomInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px] ">{groomInfo[0].name}</p>
                        {/* Bride */}
                        <div className="wi-title-container-info mt-7">
                          
                            <p className="font-semibold">{brideInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{brideInfo[0].name}</p>

                        <br />
                        <Cutoffs/>
                        <p className="text-lg text-center mt-7">with the blessings of our <br /> loving parents</p>

                        {/* Grooms Parents */}
                        <div className="wi-title-container-info mt-7">
                      
                            <p>{groomsParents[0].type}</p>
                        </div>
                        {groomsParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}
                        {/* Bride Parents */}
                        <div className="wi-title-container-info mt-7">
                        
                            <p>{bridesParents[0].type}</p>
                        </div>
                        {bridesParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}

                        <br />
                        <Cutoffs/>

                        {/* Main Celebrant */}
                        <div className="wi-title-container-info mt-7">
                            <p>{mainCelebrant[0].type}</p>
                        </div>
                      
                        <p className="text-lg mt-[-7px]">
                            {mainCelebrant[0].name}
                        </p>

                        {/* Co Celebrant */}
                        <div className="wi-title-container-info mt-7">
                            <p>{coCelebrant[0].type}</p>
                        </div>
                      
                        <p className="text-lg mt-[-7px]">
                            {coCelebrant[0].name}
                        </p>
                      
                    </div>
                </div>
            </section>
      </>
    );
}

export default GroomBrideParents;