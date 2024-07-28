import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { Box } from '@mui/material';


export default function MTAAudio() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="mta-audio"
        height="140"
        image="/com.png"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className="flex items-center">
  Dialai MTAAudio 
  
</Typography>
        <Typography variant="body2" color="text.secondary">
        Developed a text-to-audio converter tool facilitating auditory content delivery, enhancing user accessibility.
        </Typography>
      </CardContent>
      <CardActions>
            <Link href='/llms/mta-audio' target='blank'>
        <Button size="small">
        Live
            </Button>
            </Link>

            <Link href='/ai-ml/dialai-mta-audio' target='blank'>
        <Button size="small">
        Docs
          
            </Button>
            </Link>
         
           
      </CardActions>
    </Card>
  );
}