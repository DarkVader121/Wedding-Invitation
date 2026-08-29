import dressCode from '../assets/images/random/family.png'


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
                <div className="contain">
                    <div className="flex flex-col justify-center items-center">
                        <div className="wi-title-container">
                            <h3>Attire</h3>
                            <p>Dress Code</p>
                        </div>
                        <p className="mt-7 text-lg">Principal Sponsors</p>
                        <img src={dressCode}  className="mt-3" alt="" />
                        <p className='mt-5'>Men:</p>
                        <p className='text-center'>Modern Barong Paired <br /> with Black Slacks</p>
                        <div className='mt-5 grid grid-cols-5 gap-1'>
                            {colors.map((color) => (
                                <a
                                   
                                    key={color}
                                    className="btn h-[40px]"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <p className='mt-5'>Women:</p>
                        <p className='text-center'>Floor-length gown Following  <br /> the given color pallette.</p>
                    </div>
                </div>
            </section>
           
      </>
    );
}

export default DressCode;