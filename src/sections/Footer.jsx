import Couple from '../assets/images/random/couple.png'
const Footer = () => {

    return (
        <>
        <section className='!pb-0'>
            <div className="pt-7 flex flex-col justify-center items-center">
                <h2 className='text-5xl'>Our Forever Awaits</h2>
                <br /><br />
                <div className='container'>
                    <div className="flex justify-center items-center gap-2 mt-7">
                        <p className='text-4xl'>Erron</p>
                        <p className='text-2xl mt-2'>&</p>
                        <p className='text-4xl'>Deakin</p>
                    </div>
                    <p className='text-powderBlue text-center text-sm mt-1'>#DEAKINfoundhERRONlyone </p>
                </div>
                <img src={Couple} alt="" className='mt-7' />
            </div>
        </section>
      </>
    );
}

export default Footer;