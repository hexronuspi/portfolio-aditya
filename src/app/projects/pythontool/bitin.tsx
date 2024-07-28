import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
export default function Bitin() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="clinic"
        height="140"
        image="/github.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bitin
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A Python Library for Digital Electronics
     </Typography>
      </CardContent>
      <CardActions>

            <Link href='https://github.com/hexronuspi/bitin' target='blank'>
        <Button size="small">
       
        Code
           
        
            </Button>
            </Link>
      </CardActions>
    </Card>
  );
}