import React from 'react'

export const CustomMenu = React.forwardRef(({children,style,className},ref) =>{
    return(
        <div
         ref={ref}
         style={{backgroundColor:"#222"}}
         className={className}
        >
            {children}
        </div>
    )
})