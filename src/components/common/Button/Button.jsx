import { Link, useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const navigate = useNavigate();
  const buttonClasses = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''} ${className}`.trim();

  // Handle smooth scroll for hash links
  const handleHashClick = (e, hash) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle cross-page navigation with hash
  const handleCrossPageHash = (e, path, hash) => {
    e.preventDefault();
    navigate(path);
    // Wait for navigation to complete then scroll
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // If 'to' prop is provided, render as Link (internal navigation)
  if (to) {
    // Check if it's a same-page hash link (anchor)
    if (to.startsWith('#')) {
      return (
        <a
          href={to}
          className={buttonClasses}
          onClick={(e) => handleHashClick(e, to)}
          {...props}
        >
          {children}
        </a>
      );
    }

    // Check if it's a cross-page navigation with hash (e.g., /#program-mutawifnesia)
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      return (
        <a
          href={to}
          className={buttonClasses}
          onClick={(e) => handleCrossPageHash(e, path, `#${hash}`)}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // If 'href' prop is provided, render as anchor tag (external links)
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
