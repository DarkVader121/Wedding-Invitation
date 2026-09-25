import ring from '../assets/images/random/ring.png';
import {GroomBrideParents} from '../sections'
const Entourage = () => {
    return (
        <>
            <section className=''>
                <div class="image-container">
                    <div class="image-wrapper">
                       <img
                        src={ring}
                        alt=""
                        className="blur-none active:blur-lg transition-all duration-300"
                        />
                    </div>

                    <div class="text-wrapper">
                        <GroomBrideParents />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Entourage;