const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-5xl flex flex-col mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
