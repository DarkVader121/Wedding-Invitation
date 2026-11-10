import champagneGold from '../assets/images/random/Champagne-Gold.png';
import frenchBlue from '../assets/images/random/French-blue.png';
import navyBlue from '../assets/images/random/Navy-blue.png';
import powderBlue from '../assets/images/random/Powder-blue.png';

const Guest = () => {
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
              <section className="!pt-0">
                <div className="container">
                    <div className="flex flex-col justify-center items-center">
                      
                        <p className='text-4xl'>Guest</p>
                      
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

export default Guest;