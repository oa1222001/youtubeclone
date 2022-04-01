import { Grid } from "@material-ui/core";
import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, chooseVideo }) => {
  const listOfVideos = videos.map((v, id) => (
    <VideoItem video={v} setVideo={chooseVideo} key={id}></VideoItem>
  ));
  return (
    <Grid container spacing={1}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
