import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '../CategoryWiseProductPage/Rating';
import prodcontext from '../Context/ProductContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function MediaCard({ id,price, title, description, rating, brand,image }) {
  const navigate=useNavigate();
  const context=useContext(prodcontext);
  const {cart}=context;
  const cardStyle = {
    margin: '3%',
    transition: 'transform 0.3s ease',
    width: '300px', // Increased card width
    display: 'flex',
    flexDirection: 'column',
  };
  
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', // Make the content take full height
  };
  const handleClickimg=()=>{
    navigate(`/SoloProduct/${id}/customer`);
    console.log("CLicked");
  }
  const handleClick = async () => {
    const newobj={
        product_name: title,
        
        product_brand:brand,
        price:price,
        image: image,
        
    }
    
    const token=localStorage.getItem('token');
    console.log(token);
    cart.push(newobj);
    try{
      const response = await axios.post(
        "http://localhost:3000/api/auth/customer/addToCart/",
        newobj,{
          headers: {
            "Content-Type": "application/json",
            "auth_token":token
          }
        }
      );
    }
    catch(error){
      console.log(error);
    }
    console.log("Pushed");
    toast.success("Added "+title+" to Cart");
    
  };
 
  return (
    <Card
      sx={{ marginBottom: '15px' }}
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onClick={handleClickimg}
    >
      <div style={{ flex: 1 }}>
        <CardMedia
          component="img"
          sx={{
            height: '200px', // Set a fixed height for the image
            width: '100%',
            objectFit: 'cover',
          }}
          image={image}
          title="Product Image"
        />
      </div>
      <CardContent style={contentStyle}>
        <div>
          <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          {title.length > 20? `${title.substring(0, 20)}...` : title}
          </Typography>
          <Typography variant="body2" component="div" style={{ color: "#848484", fontSize: '0.9rem' }}>
            by {brand}
          </Typography>
          <Rating rating={rating} />
        </div>
        <div>
          <Typography variant="body2" component="div" style={{ color: "#67AD5B", fontSize: '0.9rem' }}>
            Todays Deal
          </Typography>
          <div className="price" style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" style={{ fontSize: '1.1rem' }}>
              ${price}
            </Typography>
            <Typography variant="body2" component="div" style={{ color: "#848484", fontSize: '0.9rem', marginLeft: '5px' }}>
              <s>${(price + 50).toFixed(2)}</s>
            </Typography>
          </div>
          <Typography variant="body2" component="div" style={{ color: "#67AD5B", fontSize: '0.9rem' }}>
            you save {(100 - (price / (price + 50)) * 100).toFixed(2)}%
          </Typography>
        </div>
        <Button
        onClick={handleClick}
          variant="contained"
          style={{
            backgroundColor: '#FFD814',
            color: '#111',
            marginTop: '10px',
            fontWeight: 'bold',
            borderRadius: "100px",
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
 