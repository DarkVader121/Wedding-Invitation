import image1 from '../assets/images/background/FullImageSection1.png'
import image2 from '../assets/images/background/hero-background.png'

const FullImageSection3 = () => {

    return (
        <>
            <section>
                <img src={image1} class="ps-10 h-[300px] w-[100%] object-cover" />
                <img src={image2} class="pe-10 h-[300px] w-[100%] object-cover" />
            </section>
      </>
    );
}

export default FullImageSection3;