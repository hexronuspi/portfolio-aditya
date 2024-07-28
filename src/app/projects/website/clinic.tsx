import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
export default function ClinicMedia() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="clinic"
        width={140}
        height={140}
        image="/clinic.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Clinic Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A Clinic Website built using various UI libraries like shadcn, accertenityUI and other. It contains a form which works using emailjs.
        </Typography>
      </CardContent>
      <CardActions>

      <Link href='https://6603f50d440e8a00081186c6--kaleidoscopic-tiramisu-1313ed.netlify.app/' target='blank'>
        <Button size="small">Live
            </Button></Link>
            
            <Link href='https://github.com/hexronuspi/clinic' target='blank'>
        <Button size="small">
       
        Code
           
        
            </Button>
            </Link>
      </CardActions>
    </Card>
  );
}