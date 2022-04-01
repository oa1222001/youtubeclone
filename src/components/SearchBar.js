import { Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={submitHandler}>
        <TextField
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          fullWidth
          label="Search..."
        ></TextField>
      </form>
    </Paper>
  );
};

export default SearchBar;
