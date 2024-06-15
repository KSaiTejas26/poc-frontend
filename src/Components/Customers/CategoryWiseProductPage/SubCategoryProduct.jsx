import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import prodcontext from '../Context/ProductContext';
import { useContext } from 'react';
export default function ActionAreaCard({ type, img, func }) {
 
    const context=useContext(prodcontext);
    const {makefilter,filtered}=context;
    const cardStyle = {
        margin: '1%', // Reduced margin
        transition: 'transform 0.3s ease',
        width: '200px', // Reduced card width
      };
      const handleonClick =()=>{
            func(type)
      }
    return (
        <div className='m-2' onClick={handleonClick}>
            <Card  sx={{
                width: 150,  // Decreased width
                height: 150, // Decreased height
                display: 'flex',
                flexDirection: 'column'
            }}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <CardActionArea  sx={{ height: '100%' }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: '100%',
                            height: '60%',
                            objectFit: 'cover'
                        }}
                        image={img}
                        alt={type}
                    />
                    <CardContent sx={{
                        height: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                fontSize: '0.9rem', // Decreased font size
                                textAlign: 'center',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '100%'
                            }}
                        >
                            {type}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        >
                            {/* Additional content can go here */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}