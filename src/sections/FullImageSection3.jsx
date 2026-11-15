import image1 from '../assets/images/background/wedding/jobee1.jpg'
import image2 from '../assets/images/background/wedding/jobee2.jpg'
import image3 from '../assets/images/background/wedding/jobee3.jpg'

const FullImageSection3 = () => {

    return (
        <>
            <section>
           <img src={image1} className="h-[300px] w-full object-cover" />
<img src={image2} className="h-[300px] w-full object-cover" />
<img src={image3} className="h-[300px] w-full object-cover" />
            </section>
      </>
    );
}

export default FullImageSection3;