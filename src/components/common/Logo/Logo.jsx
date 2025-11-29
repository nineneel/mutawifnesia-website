import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants/imageConstants';
import './Logo.css';

const Logo = ({
  to = '/',
  className = '',
  showText = true
}) => {
  const logoClasses = `logo ${className}`.trim();

  return (
    <Link to={to} className={logoClasses}>
      <img src={IMAGES.LOGO} alt="Mutawifnesia Logo" className="logo-image" />
      {showText && (
        <div className="logo-text-container">
          <h1 className="logo-text">MUTAWIFNESIA</h1>
          <span className="logo-subtitle">by AHLAN Certification</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
