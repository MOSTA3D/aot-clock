import { useState } from "react";

function Timer(props){
    const [ sHrs, setHrs ] = useState("00");
    const [ sMins, setMins ] = useState("00");
    const [ sSecs, setSecs ] = useState("00");
    const [ start, setStart ] = useState(false);
    const [ once, setOnce ] = useState(true);

    const { tmrHrs, tmrMins, tmrSecs, setTmrHrs, setTmrMins, setTmrSecs } = props;
    let hrs, mins, secs;

    if(start){
        [ hrs, mins, secs ] = [ tmrHrs, tmrMins, tmrSecs ];
    }else{
        [ hrs, mins, secs ] = [ sHrs, sMins, sSecs ];
    }

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

    const onStartClick = (e)=>{
        if(once){
            setStart(true);
        }

        console.log("onStart click");

        if(start && once){
            setTmrHrs(sHrs);
            setTmrMins(sMins);
            setTmrSecs(sSecs);
            setOnce(false);
            console.log("start and once");
        }else if(start){
            setOnce(true);
            setStart(false);
            console.log("start");
        }
    }

    const onResetClick = (e)=>{
        setStart(false);
    }

    // const runTimer = ()=>{
    //     let { hrs, mins, secs } = this.state;
    //     [hrs, mins, secs] = [Number(hrs), Number(mins), Number(secs)]
    //     const key = setInterval(()=>{
    //         if(Number(secs != 0)){
    //             this.setState({secs: secs--})
    //         }
    //     }, 1000)
    // }

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