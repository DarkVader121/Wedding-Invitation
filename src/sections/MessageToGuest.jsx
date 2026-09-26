import WeddingBG from '../assets/images/background/wedding-bg.png'
import BrownTextBg from '../assets/images/random/brown-text-bg.png'
import Flower from '../assets/images/random/flower.png'
import Gift from '../assets/images/random/gift.png'

const MessageToGuest = () => {

    return (
        <>
        <section className='!py-0'>
            <div className="image-container">
                <div className="image-wrapper">
                    <img
                    src={WeddingBG}
                    alt=""
                    className=""
                    />
                </div>

                <div className="text-wrapper ">
                    <div className='flex justify-end items-end h-[300px]'>
                        <div className='flex justify-center items-center w-[200px] h-[200px] bg-contain bg-no-repeat  bg-center' style={{ backgroundImage: `url(${BrownTextBg})` }}>
                        <p className='ps-6 mb-1 !text-white text-xs rotate-[-3deg]'>TO ALL GUEST:</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <img  src={Flower} className='ml-[-50%] mt-[-30%] relative object-contain' alt="" />
                <div className='flex flex-col pe-5'>
                    <div class="wi-title-container pt-7">
                        <h3>Gentle</h3>
                        <p>Reminder</p>
                    </div>
                    <p>We would truly love to celebrate this special day with all the people we hold dear, and we’re so grateful for your understanding that we can only accommodate a limited number of guests.</p>
                    <br />
                    <p>Children are warmly welcomed when they are specifically named on the invitation or are part of our wedding entourage.</p>
                </div>
            </div>

            <div className='flex py-7'>
                <img  src={Gift} className='ml-[-40%] mt-[-20%] me-4 relative object-contain' alt="" />
                <div className='flex flex-col pe-5'>
                    <div class="wi-title-container pt-7">
                        <h3>Special</h3>
                        <p>Note on Gifts</p>
                    </div>
                    <p>Your presence on our special day is truly the greatest gift we could ask for. Should you wish to bless us with a gift, a monetary contribution toward our future together would be sincerely appreciated.</p>
                </div>
            </div>

        </section>
      </>
    );
}

export default MessageToGuest;