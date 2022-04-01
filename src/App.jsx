import "./App.css";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import {SearchBar,VideoDetail,VideoList} from './components' 
import { useState } from "react";
// import VideoDetail from './components/VideoDetail'
// import VideoList from './components/VideoList'
// import SearchBar from './components/SearchBar'
function App() {
  const [videos,setVideos] = useState([]);
  const [selectedVideo , setSelectedVideo] = useState(null)

  const submitHandler = async (searchTerm)=>{
    const response = await youtube.get('search',{
      params: {
        part: "snippet",
        maxResaults: 10,
        key: "AIzaSyAihBTWighoiaQxS-VZQJvDnQ0p2kgGbxU",
        q:searchTerm,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  }
  return (
    <Grid justifyContent="center" container spacing={9}>
      <Grid item xs={11}>
        <Grid container spacing={9}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={submitHandler}></SearchBar>
          </Grid>
          <Grid style={{height:'70vh'}} item xs={8}>
          {videos.length >=1 && <VideoDetail video={selectedVideo}></VideoDetail>}
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} chooseVideo={setSelectedVideo}></VideoList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
   );
}

export default App;
