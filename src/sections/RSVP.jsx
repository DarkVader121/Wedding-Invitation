import cutoffs from '../assets/images/cuts/cut5.png'


const RSVP = () => {

    return (
        <>
            <section>
                <div>
                    <div className="flex flex-col justify-center items-center">
                        {/* <div className="wi-title-container mt-1">
                            <h3>Heartfelt </h3>
                            <p>RSVP</p>
                        </div>

                        <p className="mt-7 mb-3 text-center">
                            We appreciate your pressence in our wedding day, kindly confirm your RSVP by reaching out to Erron or Deakin directly. 
                        </p> */}

                        <img src={cutoffs}  alt="" className="w-[50%] object-cover h-[35px] mb-5" />
                        <iframe className='h-[600px] w-[100%]' src="https://docs.google.com/forms/d/e/1FAIpQLSfzOlHthcf19gSM0YMuDVqAzuNlpleQxBOnfczvgdM8zmtsvQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
            </section>
      </>
    );
}

export default RSVP;