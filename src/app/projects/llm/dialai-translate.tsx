import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { Box } from '@mui/material';


export default function MTATranslate() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="mta-translate"
        height="140"
        image="/com.png"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className="flex items-center">
  Dialai MTATranslate 
  <span className='px-2 ml-2 inline-block text-sm bg-white rounded hover:bg-gray-200 transition-colors duration-100 border border-gray-400'>
     API
  </span>
  
</Typography>
        <Typography variant="body2" color="text.secondary">
        An AI tool for text translation enabling seamless communication across languages.
        </Typography>
      </CardContent>
      <CardActions>
            <Link href='/llms/mta-text' target='blank'>
        <Button size="small">
        Live
            </Button>
            </Link>

            <Link href='/ai-ml/dialai-mta-text' target='blank'>
        <Button size="small">
        Docs
          
            </Button>
            </Link>
         
           
      </CardActions>
    </Card>
  );
}