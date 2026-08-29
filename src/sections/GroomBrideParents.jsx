import { getGuestsByType } from "../services/guestService";


const GroomBrideParents = () => {
    const groomInfo = getGuestsByType("groom");
    const brideInfo = getGuestsByType("bride");
    const groomsParents = getGuestsByType("Groom’s parents");
    const bridesParents = getGuestsByType("Bride’s parents");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        {/* Groom */}
                        <div className="wi-title-container-info">
                            <h3>{groomInfo[0]["short-description"]}</h3>
                            <p>{groomInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{groomInfo[0].name}</p>
                        {/* Bride */}
                        <div className="wi-title-container-info mt-7">
                            <h3>{brideInfo[0]["short-description"]}</h3>
                            <p>{brideInfo[0].type}</p>
                        </div>
                        <p className="text-lg mt-[-7px]">{brideInfo[0].name}</p>
                        {/* Grooms Parents */}
                        <div className="wi-title-container-info mt-7">
                            <h3>{groomsParents[0]["short-description"]}</h3>
                            <p>{groomsParents[0].type}</p>
                        </div>
                        {groomsParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}
                        {/* Grooms Parents */}
                        <div className="wi-title-container-info mt-7">
                            <h3>{bridesParents[0]["short-description"]}</h3>
                            <p>{bridesParents[0].type}</p>
                        </div>
                        {bridesParents.map((parent) => (
                            <p key={parent.id} className="text-lg mt-[-7px]">
                                {parent.name}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
      </>
    );
}

export default GroomBrideParents;