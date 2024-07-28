import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
export default function Eagle() {
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
          eagleview
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A package for greatly increasing the visualisation of datasets, in minimal lines of code.</Typography>
      </CardContent>
      <CardActions>
            <Link href='https://github.com/hexronuspi/eagle' target='blank'>
        <Button size="small">
       
        Code
           
        
            </Button>
            </Link>
      </CardActions>
    </Card>
  );
}