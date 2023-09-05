import '../style/Image.css';

const Image = (props) => {
    const date = new Date();
    const endDate = new Date(props.endDate);
    return (
        <div className='Image--Container'>
            {date < endDate && <span className='current'>Present</span>}
            <img src={props.src} className="Image" alt="place" />
        </div>
    )
}

export default Image;