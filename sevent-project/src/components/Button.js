import '../style/Button.css';
const Button = (props) => {
    return (
        <button className="Button" style={{background:`${props.color}`}}><span style={{ color: `${props.buttonText ==='LinkedIn' && 'white'}`}}><img src={props.icon} alt="social media icons"/> {props.buttonText}</span></button>
    )
}

export default Button;