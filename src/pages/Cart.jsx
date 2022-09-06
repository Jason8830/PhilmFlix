import React,{useEffect,useState} from "react";
import styled from "styled-components";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {getCart} from "backend/billing"
import {useUser} from "hook/User";
import Box from '@mui/material/Box';
import {deleteItem} from "backend/billing";
import {updateItem} from "backend/billing";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate  } from "react-router-dom";


const Cart = ({movies}) => {


  const [movieState, setMovieState] = useState(movies);  
  
  useEffect(() => {
    setMovieState(movies);
  }, [movies]);

   

    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();
    const navigate = useNavigate();
    const [movieId,setMovieId] = React.useState();

    const handleDeleteItem=(id)=>{
        
        console.log(id);
        deleteItem(accessToken,id);
        // navigate("/");
        window.location.reload(false);
    }

    const [open, setOpen] = React.useState(false);

    const [selectedMovie,setSelectedMovie] = React.useState(0);
    
    const [quantity, setQuantity] = React.useState();
    
    const handleClickOpen = (movieId) => {
        setSelectedMovie(movieId);
        setOpen(true);
    };
  
    const handleQuantity=(event)=>{
        setQuantity(event.target.value);
    }    
    
    const handleClose = () => {
      setOpen(false);
    };


    const handleUpdate = () => {
        
        updateItem(accessToken,selectedMovie,quantity);
        window.location.reload(false);
        setOpen(false);
    };

    const handleBIN= ()=>{
        navigate("/checkout");

    };


    return (
        <>
        <div className="cart">
            {/* <p> Total: ${props.items.total.toLocaleString("en-US")}</p> */}
          <Card sx={{ maxWidth: 1000, mr:100 }}>
          <CardHeader>

          </CardHeader>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shopping Cart
        </Typography>


        <Typography sx ={{mb:4}} variant="body2" color="text.secondary">
        Please review your order before your purchase. Thank you!
        </Typography>
  
          { movieState && movieState.map((movie) => (
                <>
                <div key = {movie.movieId}>{movie.movieTitle}
                </div>
                <div className="quantity">
                <Box sx ={{backgroundColor: 'primary.light',}}>
                Quantity: {movie.quantity} Cost: ${movie.unitPrice} 
                </Box>
                
                <Button variant="contained" onClick={()=>handleDeleteItem(movie.movieId)}>Delete</Button>
        <Button variant="outlined" onClick={()=>handleClickOpen(movie.movieId)}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Desired Quantity
          </DialogContentText>
                <TextField
                id="outlined-number"
                label="Number"
                type="number"
                value={quantity}
                onChange={handleQuantity}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
                </div>
                </>
            ))}
  
      
      </CardContent>

    </Card>


  
    <Button onClick={handleBIN} variant="contained" sx={{ marginLeft:-80,maxHeight: 100 }} size="large">Buy Now</Button>
  

    </div>
        </>
    );
}

export default Cart;

