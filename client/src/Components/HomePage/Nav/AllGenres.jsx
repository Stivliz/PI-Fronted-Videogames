


const AllGenres = ({genres}) => {
   
    return (
        <>
            {/* {
                genres.map((genre) => (
                 
                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                    
                ))
            } */}
            {
                genres.map((genre) => {
                    console.log('prueba 2 :', genre.name);
                    return (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    );
                })
            }
        </>
    )
}

export default AllGenres;