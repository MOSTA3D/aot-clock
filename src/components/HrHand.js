function HrHand (props){
    const { height, width, transform, classname } = props;

    return(
        <div className={`hand ${classname}`} style={{
            height,
            width,
            transform
        }}></div>
    )
}

export default HrHand;