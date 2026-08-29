import { getGuestsByType } from "../services/guestService";


const MalePrincipal = () => {
 const malePrincipalInfo = getGuestsByType("Male Principal Sponsors");
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container-info">
                            <h3>{malePrincipalInfo[0]["short-description"]}</h3>
                            <p>{malePrincipalInfo[0].type}</p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-3">
                            {malePrincipalInfo.map((parent) => (
                                <p key={parent.id} className="mt-[-7px]">
                                    {parent.name}
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