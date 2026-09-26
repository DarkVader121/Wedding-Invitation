import Thankyou from '../assets/images/random/thank-you.png'
import Couple from '../assets/images/random/couple.png'
const Footer = () => {

    return (
        <>
        <section className='!pb-0'>
            <div className="pt-7 flex flex-col justify-center items-center">
                <img src={Thankyou} alt=""  className='ps-5'/>
                <div className='container'>
                    <p class="mt-7 text-lg text-center">From the bottom of our hearts, <br /> thank you for being a part of <br /> our beautiful beginning <br />
                    as husband and wife. </p>
                    <div className="flex justify-center items-center gap-2 mt-7">
                        <h2 className='text-4xl'>Erron</h2>
                        <p className='text-2xl'>&</p>
                        <h2 className='text-4xl'>Deakin</h2>
                    </div>
                    <p className='!text-secondary text-center text-sm mt-1'>#DEAKINfoundhERRONlyone </p>
                </div>
                <img src={Couple} alt="" className='mt-7' />
            </div>
        </section>
      </>
    );
}

export default Footer;