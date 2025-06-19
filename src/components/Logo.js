import logo from "../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className='login-topleft'>
        <img src={logo} alt="Company Logo" className='logo'/>
      </div> 
  );
};

export default Logo;
