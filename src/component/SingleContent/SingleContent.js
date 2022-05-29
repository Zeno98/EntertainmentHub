import { img_300, unavailable } from "../../Config/Config"
import "./SingleContent.css"
import Badge from '@mui/material/Badge';
import ContentModal from "../ContentModal/ContentModal"
let SingleContent = ({ items,media_type,id}) => {
    console.log(id)

    // console.log(media_type);
   
    // console.log("trending"+items)
    // console.log(media_type)
    return (
        <ContentModal media_type={media_type} id={id}>
            
            <Badge badgeContent={items.vote_average} color={items.vote_average > 6 ? "success":"secondary"}> 
            </Badge> 
            {/* in this badge is use for showing the rating of the movies or series */}
            <img className="poster" src={items.poster_path ? `${img_300}/${items.poster_path}` : unavailable} alt={items.original_title} />
            <b className="title">{items.original_title}{items.original_name}</b>
            <span className="subTitle">{media_type === "movie" ? "Movie" : "TV Series"}
                <span className="subTitle">{items.release_date}{items.first_air_date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent;