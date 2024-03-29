import { Paper, Typography } from "@material-ui/core";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video);
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "100%" }}>
        <iframe
          frameBorder={0}
          height="100%"
          width={"100%"}
          title="Video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
