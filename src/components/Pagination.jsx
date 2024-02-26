import React from 'react'
import styles from './pagination.module.css'


const Pagination = ({LIMIT, totalLength, setCurrentPage, currentPage}) => {

  let pageNumbers = [];
  for(let i=1;i<=Math.ceil(totalLength / LIMIT); i++)
    pageNumbers.push(i);

  return (
    <div>
        {pageNumbers.length ? "Pages : " : ""}  
        {pageNumbers.map((pg, ind) => {
            return (<button className={`${styles.pageButton} ${pg === currentPage ? styles.highlighted : ""}`} onClick={() => setCurrentPage(pg)} key={ind}>{pg}</button>)
        })}
    </div>
  )
}

export default Pagination