const Container = ({ children, className }) => {
  return (
    <div className={`max-w-5xl flex flex-col mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
