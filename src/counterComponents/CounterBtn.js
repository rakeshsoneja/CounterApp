import '../customStyles/counterComponentStyles.css';

function CounterButton(props) {
    console.log(props);

    return (
        <button className={props.className} onClick={props.action}>{props.title}</button>
    );
}


export default CounterButton;