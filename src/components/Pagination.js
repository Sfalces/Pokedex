import React from "react";

export const Pagination = (props) =>{

    const {onLeftClick, onRightClick, page, totalPages}= props

    return(
        <div className="pagination">
            <button className="move__btn" onClick={onLeftClick}><div>👈</div></button>
            <div className="btn__text font-regular-medium">{page} de {totalPages}</div>
            <button className="move__btn " onClick={onRightClick}><div>👉</div></button>
        </div>
    )
}