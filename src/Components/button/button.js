function button(props){
    console.log(props)
    return (<button className={props.nameclass} onClick={function(){
        props.print(props.text)
    }} >{props.text}</button>)
}

export default button