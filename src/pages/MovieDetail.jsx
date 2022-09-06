import React,{useEffect} from "react";

import {useUser} from "hook/User";
import { useParams } from "react-router-dom";
import {useLocation} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {insertItem} from "backend/billing";
import { useNavigate } from "react-router-dom";

const MovieDetail = ({retrieveCart}) => {
    const id = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();

    const [quantity, setQuantity] = React.useState(0);

    const handleQuantity =(event)=>{
        setQuantity(event.target.value);
    }


    const addItem =()=>{
    
        insertItem(accessToken,id.id, quantity)
        .then(res=>{console.log(res)

            navigate("/search");
        // Telling React to retrieve the cart after we insert an item
            retrieveCart()});       

    }



    return (
        <div>
            <img id="poster" src={"https://image.tmdb.org/t/p/w500"+location.state.movie.posterPath}/>
            
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={"https://image.tmdb.org/t/p/w500"+location.state.movie.backdropPath}
                alt="Movie BackDrop"
                />
                <CardContent>

                <Typography gutterBottom variant="h4" component="div">
                {location.state.movie.title}
                </Typography>

                <Typography gutterBottom variant="h6" component="div">
                {location.state.movie.overview}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Director: {location.state.movie.director}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Revenue: ${location.state.movie.revenue.toLocaleString("en-US")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Budget: ${location.state.movie.budget.toLocaleString("en-US")}
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>

                <Box sx={{ minWidth: 120,paddingLeft:5, paddingRight:10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          label="Quantity"
          onChange={handleQuantity}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={addItem}size="small" color="primary">
                Add Cart
                </Button>
            </CardActions>
            </Card>
                    
           
        </div>
    );
}

export default MovieDetail;
