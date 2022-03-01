import { useState, useEffect } from "react";
import Dgclck from "./Dgclck";
import HrHand from "./HrHand";
import Timer from "./Timer";


function Clock(){
    const [ mins, setMins ] = useState(0);
    const [ secs, setSecs ] = useState(0);
    const [ hours, setHrs ] = useState(0);
    
    const [ start, setStart ] = useState(false);

    const [ tmrSecs, setTmrSecs ] = useState(0);
    const [ tmrMins, setTmrMins ] = useState(0);
    const [ tmrHrs, setTmrHrs ] = useState(0);


    const timeFunc = (start)=>{
        return ()=>{
            const now = new Date();
            const mins = now.getMinutes();
            const hours = now.getHours();
            const secs = now.getSeconds();

            setHrs(hours);setMins(mins);setSecs(secs)
            
            if(start){
                if(tmrSecs === 0){
                    if(tmrMins === 0){
                        if(tmrHrs === 0){
                            setStart(false);
                        }else{
                            setTmrHrs(tmrHrs-1);
                            setTmrMins(59);
                        }
                    }else{
                        setTmrMins(tmrMins-1);
                        setTmrSecs(59);
                    }
                }else{
                    setTmrSecs(tmrSecs-1);
                }
            }
        }
    }


    useEffect(()=>{
        setInterval(timeFunc(start), 1000);
    }, []);

    const tics = [];
    for(let i = 0;i < 360;i+=30){
        tics.push(<span className="tic" style={{
            transform: `rotate(${i}deg)`
        }}>
            <span></span>
        </span>);
    }

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

            <Timer { ...{tmrHrs, tmrMins, tmrSecs, setTmrHrs, setTmrMins, setTmrSecs} } />
        </>
    )
}

export default Clock;

{/* <div className="hand hour" style={{
                    height: "100px",
                    width: "10px",
                    left: "195px",
                    transform: `rotate(${hours*30 + mins/2}deg)`
                }}></div>

                <div className="hand mins" style={{
                    height: "170px",
                    left: "197px",
                    transform: `rotate(${mins*6 + secs/10}deg)`
                }}></div>

                <div className="hand secs" style={{
                    height: "170px",
                    width: "4px",
                    left: "198px",
                    transform: `rotate(${secs*6}deg)`
                }}></div> */}