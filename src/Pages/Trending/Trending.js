import axios from "axios";
import React from "react";
import SingleContent from "../../component/SingleContent/SingleContent";  //use to display the items content
import CustomPagination from "../../component/Pagination/CustomPagination";
import Genres from "../../component/Genres/Genres"
import "./Trending.css";
import "../../App.css"


let Trending = () => {
    window.scroll(0, 0)

    let [content, setContent] = React.useState([]); //to hold the api data

    let [page, setPage] = React.useState(1); //setting the default page mumber is 1;

    




    let fetchTrending = async () => {
        //data is destructure the object data from the api
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)// use to fetch the api
        // console.log(typeof (data.results));

        setContent(data.results);
    }

    React.useEffect(() => {
        fetchTrending()

    }, [page]);//use to all the async function //[page]for page dependency if any page changes it all the api


    return (
        <div>
            <span className="pageTitle">Trending</span>

           


            <div className="trending">


                {
                    
                    content && content.map((items) => <SingleContent items={items} media_type={items.media_type} id={items.id} key={items.id} />) //it will check if data is present or not if presenet then it will map each elemet in that data and call the <SingleContent/> component and if data is not present it will run the map method
                }

            </div>

            <CustomPagination setPage={setPage} />


        </div>
    )
}

export default Trending;
