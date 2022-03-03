import { useState, useEffect } from "react";
import sound from "../assets/levi_kenyy.mp3";

const audio = new Audio(sound);
let intervalId;

function Timer(props){
    let [ hrs, setHrs ] = useState("00");
    let [ mins, setMins ] = useState("00");
    let [ secs, setSecs ] = useState("00");
    let [ start, setStart ] = useState(false);


    const onHrsChange = (e)=>{
        if(start){
            e.preventDefault();
            return;
        }
        const num = Number(e.target.value);
        if(num < 10) setHrs(`0${num}`);
        else if(num < 23) setHrs(num.toString());
        else return;
    };
    const onMinsChange = (e)=>{
        if(start){
            e.preventDefault();
            return;
        }
        const num = Number(e.target.value);
        if(num < 10) setMins(`0${num}`);
        else if(num < 59) setMins(num.toString())
        else return;
    };
    const onSecsChange = (e)=>{
        if(start){
            e.preventDefault();
            return;
        }
        const num = Number(e.target.value);
        console.log(num);
        if(num < 10) setSecs(`0${num}`);
        else if(num < 59) setSecs(num.toString())
        else return;
    };

    const isOnes = (number)=>{
        return number < 10 ? `0${number}` : number.toString();
    }

    const updateTime = ()=>{
        [ hrs, mins, secs ] = [ Number(hrs), Number(mins), Number(secs)];
        if(secs === 0){
            if(mins === 0){
                if(hrs === 0){
                    audio.play();
                    start=false;
                    setStart(false);
                    clearInterval(intervalId);
                }else{
                    console.log("here from hours chang", typeof(hrs));
                    hrs--;
                    setHrs(isOnes(hrs));
                    mins=59;
                    setMins(59);
                }
            }else{
                console.log("here from mins chang", typeof(mins));
                mins--;
                setMins(isOnes(mins));
                secs=59;
                setSecs(59);
            }
        }else{
            console.log("here from secs chang", typeof(secs));
            secs--;
            setSecs(isOnes(secs));
        }
    }
    const onStartClick = (e)=>{
        if(!start){
            intervalId = setInterval(updateTime, 1000);
            console.log("interval id is " + intervalId);
            start=true;
            setStart(true);
        }else{
            console.log("interval id is " + intervalId);
            clearInterval(intervalId);
            start=false;
            setStart(false);
            console.log("interval id is " + intervalId);
        }
    }

    const onResetClick = (e)=>{
        clearInterval(intervalId);
        setStart(false);

    }


    return(
        <>
            <div className="timer">
                <input type="number" value={ hrs } onChange = { onHrsChange} />
                :
                <input type="number" value={ mins } onChange = { onMinsChange } />
                :
                <input type="number" value={ secs } onChange = { onSecsChange } />
            </div>
            <footer className="button-container">
                <button className={start?"stop":"start"} onClick = { onStartClick }>{start?"Stop":"Start"}</button>
                <button className="reset" onClick = { onResetClick }>Reset</button>
            </footer>
        </>
    )

}

export default Timer;