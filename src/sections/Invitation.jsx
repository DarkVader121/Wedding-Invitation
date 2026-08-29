import {Counter} from "../components"

const Invitation = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-primary text-center">You are cordially invited to the <br /> wedding of</p>
                        <h1 className="mt-5 text-7xl text-primary">Erron</h1> 
                        <p className="text-3xl text-primary">and</p> 
                        <h2 className="text-7xl text-primary">Deakin</h2>
                    
                        <div className="mt-10 grid grid-cols-3 justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <hr className="w-3/4 text-primary" />
                                <p className="text-center text-lg">Wednesday</p>
                                <hr className="w-3/4 text-primary" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="lead">JANUARY</p>
                                <p className="text-5xl text-primary">27</p>
                                <p className="lead">2026</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <hr className="w-3/4 text-primary"/>
                                <p className="text-center text-lg">9:30 AM</p>
                                <hr className="w-3/4 text-primary"/>
                            </div>
                        </div>
                    
                        <div className="mt-10 text-center">
                            <div className="wi-title-container">
                                <h3>The</h3>
                                <p>COUNTDOWN</p>
                            </div>
                            <p className="text-small -mt-[7px]">to 'I DO' begins</p>
                        </div>
                    
                        <div className="mt-10">
                            <Counter />
                        </div>
                    </div>
               
                </div>
            </section>
        </>
    );
}

export default Invitation;