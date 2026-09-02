import image1 from '../assets/images/background/FullImageSection1.png'
import image2 from '../assets/images/background/hero-background.png'

const FullImageSection4 = () => {

    return (
        <>
            <section>
                <img src={image1} className="pe-10 h-[350px] w-[100%] object-cover" />
                <img src={image2} className="ps-10 h-[350px] w-[100%] object-cover" />
            </section>
      </>
    );
}

export default FullImageSection4;