const PageContainer = ({children, className, id, ...props}) => {
    return(
        <div className={`px-[10%] ${className}`} id={id} {...props}>

            {children}

        </div>
    )
}

export default PageContainer;