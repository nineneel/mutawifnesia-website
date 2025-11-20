import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const className = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''}`;

  return (
    <button
      className={className}
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
