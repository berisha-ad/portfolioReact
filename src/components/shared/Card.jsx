const Card = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl bg-secondary border ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
