
function Dgclck (props){
    const { hours, secs, mins } = props;
    return(
        <div className="dig-clock">
            {`${hours<10?("0"+hours):(hours)}: ${mins<10?("0"+mins):mins}: ${secs<10?("0"+secs):secs}`}
        </div>
    );
}

export default Dgclck;