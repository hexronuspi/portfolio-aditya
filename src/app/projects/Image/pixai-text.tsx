import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { Box } from '@mui/material';


export default function PixaiText() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="coming soon"
        height="140"
        image="/com.png"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className="flex items-center">
      PixaiText 
 
</Typography>
        <Typography variant="body2" color="text.secondary">
            Make your images talk, this model can generate text from images using the CLIP model.
</Typography>
  </CardContent>
      <CardActions>
            <Link href='/image-ai/pixaitext' target='blank'>
        <Button size="small">
        Live
            </Button>
            </Link>

            <Link href='/ai-ml/image-ai' target='blank'>
        <Button size="small">
        Docs
          
            </Button>
            </Link>
         
           
      </CardActions>
    </Card>
  );
}