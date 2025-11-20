import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <div className={`input-wrapper ${fullWidth ? 'input-full-width' : ''}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`input ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
