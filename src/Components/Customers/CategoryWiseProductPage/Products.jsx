import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '../CategoryWiseProductPage/Rating'
export default function MediaCard({ price, title, description, rating, brand }) {

  const cardStyle = {
    margin: '5% 1% 5% 1%',
    transition: 'transform 0.3s ease',
  };

  // const cardHoverStyle = {
  //   transform: 'scale(1.05)',
  // };

  return (
    <Card sx={{ marginBottom: '25px'}}
    style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <CardMedia
        sx={{
          height: '300px',
          width: '80%',
          margin: 'auto',
          paddingLeft: '5%',

        }}
        image={description}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography component="div" style={{color:"#848484"}}>
          by The Plant Company
        </Typography>
        <Rating />
        <Typography component="div" style={{color:"#67AD5B"}}>
          Todays Deal
        </Typography>
        <div className="price" style={{display:'flex'}}>
          
            <Typography gutterBottom variant="h4" component="div">
              ${price}
            </Typography>

            <Typography gutterBottom variant="h4" component="div" style={{color:"#848484"}}>
            &nbsp;<s>${price+50}</s>
            </Typography>


        </div>
            
            <Typography gutterBottom variant="h5" component="div" style={{color:"#67AD5B"}}>
           you save {(100-(price/(price+50))*100).toFixed(2)}%
            </Typography>
        
      </CardContent>

    </Card>
  );
}
