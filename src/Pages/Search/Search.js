import React from "react";
import TextField from '@mui/material/TextField';
import "../../App.css"
import SearchIcon from '@mui/icons-material/Search';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import axios from "axios";
import SingleContent from "../../component/SingleContent/SingleContent";
import "../Search/Search.css"
import CustomPagination from "../../component/Pagination/CustomPagination";
// import "../Search/Search.css"
// import { TabContext,TabList } from '@material-ui/lab';
// import TabList from '@mui/lab/TabList';
// import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

{

// let Search = () => {

//     let [type, setType] = React.useState(0);

//     let [page,setPage]=React.useState(1);

//     let [searchText,setSearchText]=React.useState();

//     let[content,setContent]=React.useState([]);

//     let [numOfPage,setNoOfPage]=React.useState();

//     console.log(type)

//     const fetchSearch=async ()=>{

//        let {data}= await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
//             process.env.REACT_APP_API_KEY
//           }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

//           setContent(data.results)
//         //   console.log(data.results);


//     }

//     React.useEffect(()=>{
//         fetchSearch();
//          console.log("typeclicked")
//         },[type,page])



//     return (
//         <div>
//             <span className="pageTitle">Search</span>
//             <div style={{display:"flex"}}>
//                 <TextField
//                     style={{ flex: 1 }}
//                     id="filled-basic"
//                     label="Search"
//                     variant="filled"
//                     onChange={(e)=>setSearchText(e.target.value)}
//                 />
//                 <button 
//                 className="btn"
//                 variant="contained" 
//                 style={{ border: "none",marginLeft:10 }}
//                 onClick={fetchSearch}
//                 ><SearchIcon /></button>
//                 </div>

//                 <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>

               

//                 {/* <Tabs
//                    label="basic tabs example"
//                    value={type}
//                    onChange={(event,newValue)=>{
//                        console.log(newValue)
//                        setType(newValue);
//                        setPage(1);
//                    }}
//                    >
//                     <Tab style={{width:"50%"}} label="MOVIES" value="0" />
//                     <Tab style={{width:"50%"}} label="TV SERIES" value="1" />
//                 </Tabs> */}

//                 <div className="movies">
//                 {
//                     content && content.map((items) => <SingleContent items={items} media_type={ type ? "tv": "movie"} key={items.id}/>) //it will check if data is present or not if presenet then it will map each elemet in that data and call the <SingleContent/> component and if data is not present it will run the map method
//                 }
//             </div>
            
//                 {/* // page>1? */}
//             <CustomPagination setPage={setPage} />

           
//         </div>
//     )
// }

// export default Search;











{/* <Box>
{/* <TabContext> */}
    // <TabList>
        // <Tab label="Movies" value="1"/>
        // <Tab label="TV" value="2"/>
    // </TabList>

// </TabContext>
// </Box> */}

}


// **********************************************************************************************************


function TabPanel(props) {
    const { children, value, index, } = props;
  
    return (
      <div>
        {value === index && (
          <Box sx={{ p: 1 }}>
            <div className="search">{children}</div>
          </Box>
        )}
      </div>
    );
  }



let Search=()=> {
let [type, setType] = React.useState(0);

let [page,setPage]=React.useState(1);

let [searchText,setSearchText]=React.useState();

let[content,setContent]=React.useState([]);

let [numOfPage,setNoOfPage]=React.useState();

console.log(type)

const fetchSearch=async ()=>{

   let {data}= await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

      setContent(data.results)
    //   console.log(data.results);


}

React.useEffect(()=>{
    fetchSearch();
     console.log("typeclicked")
    },[type,page])
  
    const handleChange = (event, newValue) => {
      setType(newValue);
      console.log(newValue)
    };
  
    return (
        <div>
        <div style={{display:"flex"}}>
                <TextField
                    style={{ flex: 1 }}
                    id="filled-basic"
                    label="Search"
                    variant="filled"
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button 
                className="btn"
                variant="contained" 
                style={{ border: "none",marginLeft:10 }}
                onClick={fetchSearch}
                ><SearchIcon /></button>
                </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs className="tabs" value={type} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="movies" sx={{width:"50%"}} />
            <Tab label="tv series" sx={{width:"50%"}} />
          </Tabs>
        </Box>
        {
          searchText==="" ? "No data found" :(
            <>
            <TabPanel value={type} index={0} >

        
        {content && content.map((items) => < SingleContent items={items} media_type="movie" key={items.id}/>)
        }
        </TabPanel>
        <TabPanel value={type} index={1}>
        {searchText && content && content.map((items) => <SingleContent items={items} media_type="tv" key={items.id}/>)}
        </TabPanel>
        </>
          )
      }
        
      </Box>
      </div>
    );
  }


  export default Search;