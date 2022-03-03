import { useState, useEffect } from "react";
import Dgclck from "./Dgclck";
import HrHand from "./HrHand";
import Timer from "./Timer";


const tics = [];
for(let i = 0;i < 360;i+=30){
    tics.push(<span className="tic" style={{
        transform: `rotate(${i}deg)`
    }}>
        <span></span>
    </span>);
}


function Clock(){
    const [ mins, setMins ] = useState(0);
    const [ secs, setSecs ] = useState(0);
    const [ hours, setHrs ] = useState(0);


    const timeFunc = ()=>{
        const now = new Date();
        const mins = now.getMinutes();
        const hours = now.getHours();
        const secs = now.getSeconds();

        setHrs(hours);setMins(mins);setSecs(secs)

    }


    useEffect(()=>{
        setInterval(timeFunc, 1000);
    }, []);

    
    return(
        <>
            <div className="clock">

                <Dgclck hours={hours} mins={mins} secs={secs} />

                <HrHand className="hour" width="7px" height="80px" transform={`rotate(${hours*30 + mins/2}deg)`} />
                <HrHand className="mins" width="5px" height="130px" transform={`rotate(${mins*6 + secs/10}deg)`} />
                <HrHand className="secs" width="3px" height="130px" transform={`rotate(${secs*6}deg)`} />

                {tics}

                <main></main>

            </div>

            <Timer />
        </>
    )
}

export default Clock;