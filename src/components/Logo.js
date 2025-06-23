import logo from "../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className='logo-flex'>
        <img src={logo} alt="Company Logo" className='logoImg'/>
      </div> 
  );
};

export default Logo;
