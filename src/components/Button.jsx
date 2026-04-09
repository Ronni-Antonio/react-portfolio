

function Button(props){
    return (
        <button
            id={props.id}
            className={props.className}
            onClick={props.clickHandler}
            type={props.type}
        >
            {props.value}
        </button>
    )
}

export default Button