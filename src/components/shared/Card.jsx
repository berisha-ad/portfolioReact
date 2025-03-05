const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl bg-secondary border ${className}`}>
      {children}
    </div>
  );
};

export default Card;
