import viteLogo from '../assets/images/hero-background.png'

const Hero = () => {

    return (
        <>
            <section className="hero" style={{ backgroundImage: `url(${viteLogo})` }}>
               <img src={viteLogo} alt="" />
            </section>
      </>
    );
}

export default Hero;