const Section = ({ children, className }) => {
  return <section className={`relative z-10 ${className}`}>{children}</section>;
};

export default Section;
