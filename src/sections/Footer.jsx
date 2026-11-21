// import Couple from '../assets/images/background/wedding/136. D and E pre wedding.jpg'
import Couple from '../assets/images/background/wedding/footer-image.jpeg'
const Footer = () => {

    return (
        <>
          <section className='!py-0'>
                <div className="image-container">
                    <div className="image-wrapper">
                       <img
                        src={Couple}
                        alt=""
                        className="blur-none active:blur-lg transition-all duration-300"
                        />
                    </div>

                    <div className="text-wrapper !h-[110vh]">
                        <div className="pt-10 flex flex-col justify-center items-center">
                                <h2 className="text-5xl !text-white">Our Forever Awaits</h2>
                                <br /><br />
                                <div className="container">
                                    <div className="flex justify-center items-center gap-2">
                                        <p className="text-4xl !text-white">Erron</p>
                                        <p className="text-2xl !text-white mt-2">&amp;</p>
                                        <p className="text-4xl !text-white">Deakin</p>
                                    </div>
                                    <p className="text-powderBlue text-center text-sm mt-1 !text-[#32373d]">#DEAKINfoundhERRONlyone </p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
}

export default Footer;