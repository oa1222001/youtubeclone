import { Grid, Typography, Paper } from "@material-ui/core";
import React from "react";

const videoItem = ({ video, setVideo }) => {
  return (
    <Grid
      item
      xs={12}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        setVideo(video);
      }}
    >
      <Paper style={{ padding: "10px" }}>
        <img
          style={{ marginRight: "12px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography style={{ paddingTop: "10px" }} variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default videoItem;
