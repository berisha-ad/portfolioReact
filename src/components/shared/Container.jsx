const Container = ({children, classNames}) => {
    return ( 
        <div className={`max-w-6xl flex flex-col mx-auto px-8 ${classNames}`}>{children}</div>
     );
}
 
export default Container;