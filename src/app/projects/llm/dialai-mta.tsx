import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { Box } from '@mui/material';


export default function MTA() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="mta"
        height="140"
        image="/mta.png"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className="flex items-center">
  Dialai MTA 
 
</Typography>
        <Typography variant="body2" color="text.secondary">
        Leveraged cutting-edge AI technology to create an advanced text generation tool, transforming brief user inputs into captivating stories.</Typography>
      </CardContent>
      <CardActions>
            <Link href='/llms/mta' target='blank'>
        <Button size="small">
        Live
            </Button>
            </Link>

            <Link href='/ai-ml/dialai-mta' target='blank'>
        <Button size="small">
        Docs
          
            </Button>
            </Link>
         
           
      </CardActions>
    </Card>
  );
}