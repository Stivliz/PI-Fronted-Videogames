import React from 'react';
import style from './Paginated.module.css';

const Paginated = ({ videogames, currentPage, gamePerPage, onPrevPage, onNextPage, onSpecificPage }) => {

  const pagesNumbers = [];

  for (let i = 1; i <= Math.ceil(videogames.length / gamePerPage); i++) {
    pagesNumbers.push(i);
  }

  

  return (
    <div className={style.pagination}>
      <span><button className={`${style.prevNext}`} onClick={onPrevPage}>Prev</button></span>

      {pagesNumbers.length > 0 && pagesNumbers?.map((number) => (
        <span key={number}>
          <button className={`${style.button} ${currentPage === number && style.active}`} onClick={() => onSpecificPage(number)}>{number}</button>
        </span>
      ))}

      <span><button className={`${style.prevNext}`} onClick={onNextPage}>Next</button></span>

    </div>
  )
}

export default Paginated;





// import React from 'react';
// import style from './Paginated.module.css';

// const Paginated = ({videogames, currentPage, gamePerPage, onPrevPage, onNextPage, onSpecificPage}) => {

//     console.log('videogames: ',videogames.length)
//     console.log('gameperpage: ', gamePerPage)
//     const pagesNumbers = [];
//     console.log('pageNumbers: ', pagesNumbers)
//     for (let i = 1; i <= Math.ceil(videogames.length / gamePerPage); i++) {
//         pagesNumbers.push(i);
//     }

//     return (
//         <div className={style.pagination}>
//             <span><button className={style.prevNext} onClick={onPrevPage}>Prev</button></span>

            
//             { 
//                 pagesNumbers.length > 0 && pagesNumbers?.map((number) => (
                     
//                     <span key={number}>
//                         <button className={` ${style.button} ${currentPage === number && style.active} `} class onClick={() => onSpecificPage(number)}>{number}</button>
//                     </span>
                    
//                 ))
//             } 

//             <span><button className={style.prevNext} onClick={onNextPage}>Next</button></span>

//         </div>
//     )

// }

// export default Paginated;



// const Paginated = ({gamePerPage, curretPage, setCurrentPage, totalVideogames}) => {

//     const pagesNumbers = []
//     console.log()

//     for(let i = 1; i <= Math.ceil(totalVideogames/gamePerPage); i++){
//         pagesNumbers.push(i)
//     }
//     //boton de anterior
//     const onPrevPage = () => {
//         setCurrentPage(curretPage - 1)
//     }
//     //boton de siguiente
//     const onNextPage = () => {
//         setCurrentPage(curretPage + 1)
//     }

//     const onSpecificPage = (page) => {
//         setCurrentPage(page)
//     }

//     return(
//         <div>
//          <span><button onClick={onPrevPage}> Prev </button></span>
//            {
//             pagesNumbers?.map(noPage => (
//                 <span key={noPage}> 
//                     <button onClick={() => onSpecificPage(noPage)}>{noPage}</button>
//                 </span>
//             ))
//            }
//          <span><button onClick={onNextPage}> Next </button></span>
//          </div>
//     )

     


// }

// export default Paginated;




// import style from './Paginated.module.css'


// const Paginated = ({allVideogames, currentPage, gamesPages, changedPage, prevPage, nextPage}) => {

//     const numberPages = []

//     for(let i = 1; i<=Math.ceil(allVideogames / gamesPages); i++) {
//         numberPages.push(i)
//     }

//     return (
//         <div className={style.pagination}>
//         <span><button className={style.prevNext} onClick={prevPage}> &larr; </button></span>
//             {
//             numberPages && numberPages.map(num => (
//                 <button key={num} className={`${style.paginationButton} ${currentPage === num  && style.active}`} onClick={() => changedPage(num)}>{num}</button>
//                 ))
//             }
//         <span><button className={style.prevNext} onClick={nextPage}> &rarr; </button></span>
//         </div>
//     )



// }

// export default Paginated;