import React from 'react'


function Paginacao(props){

    const {page, totalPages, backButton, nextButton} = props;

    return(
        <div className='pages-container'>
            <i className='fa-solid fa-angle-left' onClick={backButton}></i>
             <div className='quantidade'>{page} de {totalPages}</div>
            <i className='fa-solid fa-angle-right'onClick={nextButton}></i>
        </div>
    )
}

export default Paginacao