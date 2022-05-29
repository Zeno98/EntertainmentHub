import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../SingleContent/SingleContent.css"
import axios from 'axios';
import { img_500, unavailable } from '../../Config/Config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./ContentModal.css";
import Carousel from "../Carousel/Carousel"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'80%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

  function ContentModal({children,media_type,id}) {
    // console.log(media_type)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [content,setContent]=React.useState();
  let [video,setVideo]=React.useState();

  const fetchData=async ()=>{
    let {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    setContent(data)
    // console.log(data.poster_path)
  }

  const fetchVideo=async()=>{
    let {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    // console.log(data)

    setVideo(data.results[0]?.key); // use of key is to open the video of the item
  }

  React.useEffect(()=>{
    fetchData();
    fetchVideo();
  },[])

  return (
    <>
    <div className='media' onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {
            content && (
              <Box sx={style}>
            <div className='contentModal'>
              <img className='contentModalPortrait' src={content.poster_path ? `${img_500}/${content.poster_path}`:unavailable}/>

              <img className='contentModalLandscape' alt={content.name||content.title}  src={content.backdrop_path ? `${img_500}/${content.backdrop_path}`:unavailable}/>

              <div className='contentModalAbout'>
                <span className='contentModalTitle'>
                {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                    </span>

                    {content.tagline && (
                    <i className="tagline">{ " "+ content.tagline}</i>
                  )}

                    <span className="contentModalDescription">
                    {content.overview}
                  </span>
                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>

              </div>
            </div>












            {/* {id}
            {media_type} */}
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
            )
          }
          
        </Fade>
      </Modal>
    </>
  );
}

export default ContentModal;