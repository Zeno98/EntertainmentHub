import React from "react";
import axios from "axios"
import useGenre from "../../Hooks/useGenre";
import "../../App.css"
import "./Series.css"
import Genres from "../../component/Genres/Genres"
import SingleContent from "../../component/SingleContent/SingleContent"
import CustomPagination from "../../component/Pagination/CustomPagination"  

let Series=()=>{

    window.scroll(0, 0)

    let [content, setContent] = React.useState();
    let [page, setPage] = React.useState(1);

    let [selectedGenres,setSelectedGenres]=React.useState([]);

    let [genres,setGenres]=React.useState([]);

    let genreUrl=useGenre(selectedGenres);

    let fetchMovies = async () => {
        let { data } = await axios.get(` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genreUrl}`);
        setContent(data.results)
        // console.log(data.results)
    }
    React.useEffect(() => {
        fetchMovies();
    }, [page,genreUrl])


    return(
        <div>
        <span className="pageTitle">Series</span>

         {/* genres is used for filter the type of movie icon using material ui */}
         <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        />

        <div className="series">
            {
                content && content.map((items) => <SingleContent items={items} media_type="tv" key={items.id}/>) //it will check if data is present or not if presenet then it will map each elemet in that data and call the <SingleContent/> component and if data is not present it will run the map method
            }
        </div>
        
            {/* // page>1? */}
        <CustomPagination setPage={setPage} />
        {/* // :"" */}
        


    </div>
    )
}

export default Series;
