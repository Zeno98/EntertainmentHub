let useGenre=(selectedGenres)=>{ //selectedGenres is the array of containg different genres
    console.log(selectedGenres)
    if(selectedGenres.length<1){
        return "";
    }

    let genreId=selectedGenres.map((g)=>g.id)
    return genreId.reduce((acc,curr)=> acc + "," + curr);
}

export default useGenre;