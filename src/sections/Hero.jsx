import heroImage from '../assets/images/background/hero-background.png'

const Hero = () => {

    return (
        <>
            <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            </section>
      </>
    );
}

export default Hero;