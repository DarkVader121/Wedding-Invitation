import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) { 
        return <p className="text-lg ">The Day Arrived, Let's Celebrate🎉</p>; 
    } 
    
    return ( 
        <div className="flex justify-center gap-3 text-center"> 
        <div className="min-w-[47px]">
            <p className="text-4xl"> 
                {days} 
            </p>
            <p className=""> 
                Days 
            </p> 
        </div> 
          <span className="text-4xl text-primary -mt-[6px]">:</span>
        <div className="min-w-[47px]"> 
            <p className="text-4xl"> 
                {hours} 
            </p>
            <p className=""> 
                Hours 
            </p> 
        </div> 
        <span className="text-4xl text-primary -mt-[6px]">:</span>
        <div className="min-w-[47px]"> 
            <p className="text-4xl">
                {minutes} 
            </p>
            <p className=""> 
                Minutes 
            </p> 
        </div> 
        <span className="text-4xl text-primary -mt-[6px]">:</span>
        <div className="min-w-[47px]"> 
            <p className="text-4xl"> 
                {seconds}
            </p> 
            <p className=""> 
                Seconds 
            </p>
        </div> 
</div> ); };

const Counter = () => {
    const weddingDate = new Date("2027-01-27");
    // const weddingDate = new Date("2024-01-27");
    return (
        <>
            <Countdown 
                date={weddingDate} 
                renderer={renderer}    
            />
        </>
    );
}

export default Counter;