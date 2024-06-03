import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ type ,img}) {
    return (
        <div className='m-2'>

            <Card sx={{ maxWidth: 175 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // height="70"
                        margin='auto'
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
