
import "./Button.css";

function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      className={`wt-button wt-button--${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
