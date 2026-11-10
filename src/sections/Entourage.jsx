import ring from '../assets/images/background/wedding/Sunset Dance Above the Sea.png';
import {GroomBrideParents} from '../sections'

const Entourage = () => {
    return (
        <>
            <section className='!pb-0'>
                <div className="image-container">
                    <div className="image-wrapper">
                       <img
                        src={ring}
                        alt=""
                        className="blur-none active:blur-lg transition-all duration-300"
                        />
                    </div>

                    <div className="text-wrapper">
                        <GroomBrideParents />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Entourage;