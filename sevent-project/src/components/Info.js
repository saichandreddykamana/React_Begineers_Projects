import '../style/Info.css';
import Profile from '../Images/Profile/Profile.png';
import Button from '../components/Button';
import Mail from '../Images/Icons/Mail.png';
import LinkedIn from '../Images/Icons/Linkedin.png';

const Info = () => {
    return (
        <div className="Info">
            <img src={Profile} className="Info--Profile" alt="Profile" />
            <div className="Info--Details">
                <h1>Sai Chand Reddy Kamana</h1>
                <h2>ServiceNow Developer/Front End Developer</h2>
                <span>Dummy website</span>
                <div className="Info--Buttons">
                    <Button icon = {Mail} buttonText="Email" color='rgba(255, 255, 255, 1)' />
                    <Button icon = {LinkedIn} buttonText="LinkedIn" color='rgba(41, 127, 229, 1)'/>
                </div>
            </div>
        </div>
    )
}

export default Info;