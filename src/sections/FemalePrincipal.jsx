import { getGuestsByType } from "../services/guestService";


const MalePrincipal = () => {
 const femalePrincipalInfo = getGuestsByType("Female Principal Sponsors");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container-info">
                            <h3>{femalePrincipalInfo[0]["short-description"]}</h3>
                            <p>{femalePrincipalInfo[0].type}</p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-3">
                            {femalePrincipalInfo.map((data) => (
                                <p key={data.id} className="mt-[-7px]">
                                    {data.name}
                                </p>
                            ))}
                        </div>
                    </div>
                   
                </div>
               
            </section>
      </>
    );
}

export default MalePrincipal;