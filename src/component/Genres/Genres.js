import React from "react";
import axios from "axios";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "../Genres/Genres.css";
let Genres = (
    {
        type, //type of genres
        selectedGenres, //add currently selected genres in the selectedGenres array
        setSelectedGenres, // method to select genres
        genres, // genres data getting from api
        setGenres, //method to select the genres and add int array
        setPage, //
        
    }
) => {

    let fetchGenres=async()=>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres)
    }
    

    React.useEffect(()=>{
        fetchGenres();

        // return ()=>{       //for unmounting the the component
        //     setGenres({});
        // }

    },[])

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id !== genre.id))
        setPage(1)
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected)=>selected.id !== genre.id))
        setGenres([...genres,genre]);
        setPage(1)
        console.info('You clicked the delete icon.');
      };

    return (
        <>
        <div className="genres">
            
        {
                selectedGenres.map((genres)=>{
                    return (
                        <div>
                    <Stack direction="row" spacing={1} sx={{margin:"5px"}}>
                    <Chip 
                    label={genres.name} 
                    key={genres.id}
                    size="small"
                    clickable
                    color="primary"
                    onDelete={()=>handleDelete(genres)}
                    />
                    </Stack>
                    </div>
                    )

                    })
                }

            {
                genres && genres.map((genres)=>{
                    return (
                        <div>
                    <Stack direction="row" spacing={2} sx={{margin:"5px"}}>
                    <Chip 
                    label={genres.name} 
                    key={genres.id}
                    size="small"
                    clickable
                    onClick={()=>{handleAdd(genres)}}
                    />
                    </Stack>
                    </div>
                    )

                    })
                    // <Stack direction="row" spacing={1}>
                    // <Chip/>
                    // </Stack>
                
                
            }
        </div>
        {/* <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack> */}
            
        </>
    )
}
export default Genres;