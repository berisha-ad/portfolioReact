const Button = ({ children, type, className }) => {
  return (
    <button className={`btn w-max ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
