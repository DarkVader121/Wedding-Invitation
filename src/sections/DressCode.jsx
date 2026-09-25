import dressCode from '../assets/images/random/Principal-sponsor.png';
import champagneGold from '../assets/images/random/Champagne-Gold.jpeg';
import frenchBlue from '../assets/images/random/French-blue.jpeg';
import navyBlue from '../assets/images/random/Navy-blue.jpeg';
import powderBlue from '../assets/images/random/Powder-blue.jpeg';

const DressCode = () => {
    const GuestColorAttire = [
        {
            color: "#e4d1ad",
            image: champagneGold,
        },
        {
            color: "#768EA8",
            image: frenchBlue,
        },
        {
            color: "#C6D6E4",
            image: powderBlue,
        },
        {
            color: "#0C2A50",
            image: navyBlue,
        },
    ];


    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container">
                            <h3>Attire</h3>
                            <p>Dress Code</p>
                        </div>
                        <p className="mt-7 text-lg">Principal & Peer Principal Sponsors</p>
                        <img src={dressCode}  className="mt-5" alt="" />
                        <p className='mt-5 text-lg'>Ninong:</p>
                        <p className='text-center text-lg'>Modern Barong Paired <br /> with Black Slacks</p>
                        <p className='mt-5 text-lg'>Ninang:</p>
                        <p className='text-center text-lg'>Floor-length Champagne <br /> Gold/Beige</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                      
                            <p className='text-2xl'>Guest</p>
                      
                        <p className="mt-3 text-lg text-center">we request guests to wear a smart casual attire based on the color palette below </p>
                        
                        <div className="mt-5 grid grid-cols-4 gap-1 w-full">
                            {GuestColorAttire.map((attire) => (
                                <div
                                    key={attire.color}
                                    className="flex flex-col justify-center items-center w-full"
                                >
                                    {/* Color */}
                                    <div
                                        className="w-[85%] h-[40px] rounded mx-5"
                                        style={{
                                            backgroundColor: attire.color,
                                        }}
                                    ></div>

                                        {/* Image */}
                                        <img
                                            src={attire.image}
                                            alt=""
                                            className="w-full h-[200px] object-contain mt-2"
                                        />
                                    </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
      </>
    );
}

export default DressCode;