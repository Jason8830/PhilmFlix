import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SearchParams from '../models/searchParams.js'
import {movieSearch} from "backend/movie";
import {useUser} from "hook/User";
import {detailMovieSearch} from "backend/movie";

import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";


const Search = () => {
    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();
    
    const submitForm = () =>{          
        var query = new SearchParams();

        if (title){
            query.setTitle(title);
        }

        if (year){
          query.setYear(year);
        }


        if (genre){
          query.setGenre(genre);
        }


        if (director){
          query.setDirector(director);
        }

        query.setLimit(limit);
        query.setOrderBy(orderBy);
        query.setDirection(direction);

        var response = movieSearch(accessToken,query);

        response.then(value => setMovies(value.data.movies));

        movies.map(movie => {
          movie.backdropPath = "https://image.tmdb.org/t/p/original"+movie.backdropPath
          movie.posterPath = "https://image.tmdb.org/t/p/original"+movie.posterPath

        }
        );

        
        setSearchButtonClicked(true);
    };


    const navigate = useNavigate();

    const [movies, setMovies] = React.useState([]);

    const [searchButtonClicked,setSearchButtonClicked] = React.useState(false);

   // This variable gets the input of the title/(keywords)
    const [userInput, setUserInput] = React.useState();


    // Start of the query "baiscally tittle"
    const [title, setTitle] = React.useState();



    const [year, setYear] = React.useState();
    const [genre, setGenre] = React.useState();
    const [director, setDirector] = React.useState();

    
    const [direction, setDirection] = React.useState("asc");

    const [orderBy, setOrderBy] = React.useState("title");

    const [limit, setLimit] = React.useState(10);


    const [selectedMovieId, setSelectedMovieId] = React.useState(-1);


    // const selectOption = (event) => {
    //   setOption(event.target.value);
    // };

    const handleDirection = (event) => {
        setDirection(event.target.value);
    };
    
    const handleOrderBy = (event) => {
        setOrderBy(event.target.value);
    };

    const handleLimit = (event) => {
        setLimit(event.target.value);
    };


    const handleView =() =>{

    console.log(selectedMovieId)          
    var response = detailMovieSearch(accessToken,selectedMovieId);
    response.then(value =>{ 
      
      navigate("/movie/"+selectedMovieId,{state:value.data});
 
    });
   
    }

    const columns = [
        { field: 'id',   sortable: false, headerName: 'Id', width: 100 },
        { field: 'title',sortable: false,headerName: 'Title', width: 250 },
        { field: 'year', sortable: false,headerName: 'Year', width: 70 },
        { field: 'director',   sortable: false, headerName: 'Director', width: 200 },
        { field: 'rating',   sortable: false, headerName: 'Rating', width: 70 },
        { field: 'backdropPath',sortable: false,headerName: 'Backdrop Path', width: 130 },
        { field: 'posterPath', sortable: false,headerName: 'Poster Path', width: 130 },
      ];

    return (
        <>
        
        <div>
        <button onClick={handleView}>View</button>
        
        <div id = "table">

        {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
          onChange={selectOption}
        >
          <MenuItem value={"title"}>Title</MenuItem>

           <MenuItem value={"year"}>Year</MenuItem>
          <MenuItem value={"director"}>Director</MenuItem>
          <MenuItem value={"genre"}>Genre</MenuItem> 
        </Select>
        </FormControl>
        </Box> */}




<Box sx={{ minWidth: 300 , paddingLeft: 4}}>
<FormControl variant="standard">

  <TextField
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    id="input-with-icon-textfield"
    label="Title"
    variant="standard"
  />
</FormControl>
</Box>


    <Box sx={{ minWidth: 300 , paddingLeft: 4}}>
      <FormControl variant="standard">

        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          id="input-with-icon-textfield"
          label="Search"
          variant="standard"
        />
      </FormControl>
    </Box>





    <Button onClick = {submitForm} sx={{ minWidth: 100, maxHeight: 50 }} variant="outlined">Search</Button>
    





    <Box sx={{ minWidth: 120, paddingLeft: 4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderBy}
          label="Order By"
          onChange={handleOrderBy}
        >
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"rating"}>Rating</MenuItem>
          <MenuItem value={"year"}>Year</MenuItem>
        </Select>
        </FormControl>
        </Box>



        <Box sx={{ minWidth: 120, paddingLeft: 4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Direction</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={direction}
          label="Direction"
          onChange={handleDirection}
        >
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
        </Select>
        </FormControl>
        </Box>



        <Box sx={{ minWidth: 70, paddingLeft: 4}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Limit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={limit}
          label="limit"
          onChange={handleLimit}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        </FormControl>
        </Box>

        </div>


        <Box sx={{ minWidth: 300 , paddingLeft: 4}}>
      <FormControl variant="standard">

        <TextField
          value={year}
          onChange={(e) => setYear(e.target.value)}
          id="input-with-icon-textfield"
          label="Year"
          variant="standard"
        />
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 300 , paddingLeft: 4}}>
      <FormControl variant="standard">

        <TextField
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          id="input-with-icon-textfield"
          label="Genre"
          variant="standard"
        />
      </FormControl>
    </Box>


    <Box sx={{ minWidth: 300 , paddingLeft: 4}}>
      <FormControl variant="standard">

        <TextField
           value={director}
           onChange={(e) => setDirector(e.target.value)}
          id="input-with-icon-textfield"
          label="Director"
          variant="standard"
        />
      </FormControl>
    </Box>


<span>
            { searchButtonClicked &&  <DataGrid
                rows={movies}
                sx = {{mt:10}}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onSelectionModelChange={(move_id) => {
                  setSelectedMovieId(move_id[0]);
                }}
                />}
</span>

</div>
        </>
    );
}

export default Search;
