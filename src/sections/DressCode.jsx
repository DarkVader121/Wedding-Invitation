import dressCode from '../assets/images/random/Principal-sponsor.png'


const DressCode = () => {
    const colors = [
        "#e4d1ad",
        "#6e849c",
        "#63d3e3",
        "#0c2347",
        "#000",
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
                        <p className="mt-7 text-lg">Principal Sponsors</p>
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
                        <div className="wi-title-container">
                   
                            <p>Guest</p>
                        </div>
                        <p className="mt-7 text-lg text-center">we request guests to wear a smart casual attire based on the color palette below </p>
                        <img src={dressCode}  className="mt-5" alt="" />
                        <p className='mt-5 text-lg'>Ninong:</p>
                        <p className='text-center text-lg'>Modern Barong Paired <br /> with Black Slacks</p>
                        <p className='mt-5 text-lg'>Ninang:</p>
                        <p className='text-center text-lg'>Floor-length Champagne <br /> Gold/Beige</p>
                    </div>
                </div>
            </section>
      </>
    );
}

export default DressCode;