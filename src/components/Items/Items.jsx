import React from 'react';
export default function Items(props){
    return(
        <>
            <h3 className="itemEncabezado"> {props.ContenidoItem}</h3>
            <span className="spanEncabezado">*</span>
        </>
    )
    
}