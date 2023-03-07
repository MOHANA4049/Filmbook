import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
function About(props) {
  const posts = [
    {
     title: "Viduthalai(2023)",
     excerpt: "Viduthalai  is an upcoming Crime Thriller film",
     src:require('./images/viduthalai.jpg'),
    },
    {
     title: "Dasara(2023)",
     excerpt: "Dasara is an  Indian Telugulang action drama film ",
     src:require('./images/dasara.jpg'),
    },
    {
     title: "Borrder(2023)",
     excerpt: "Borrder is an upcoming tamil spy thriller film",
     src:require('./images/border.jpg'),
    },
    {
     title: "Kabzaa(2023)",
     excerpt:"This is an Indian Kannada crime action film",
     src:require('./images/kabzaa.jpg'),
    },
   
    {
     title: "Kaasaethan kadavulada(2023)",
     excerpt: "It is an upcoming Indian Tamil heist comedy film",
     src:require('./images/kaasaethan kadavulada.jpg'),
    },
    {
     title: "Jawan(2023)",
     excerpt: "This is upcoming Indian Hindi action thriller film",
     src:require('./images/jawan.jpg'),
    },
    {
      title: "Salaar(2023)",
      excerpt: "It is an upcoming Indian Tamil action film",
      src:require('./images/salaar.jpg'),
     },
     {
      title: "pathu thala(2023)",
      excerpt: "Pathuthala is upcoming gangster crime thriller film",
      src:require('./images/pathuthala.jpg'),
     },
     {
      title: "Shakuntalam(2023)",
      excerpt: "This is upcoming Indian Hindi action thriller film",
      src:require('./images/shakuntalam.jpg'),
     }
   ]
  return (
    <div style={{ marginTop: 20, padding: 30 }} className="Zoom">
      <Grid container spacing={40} justifyContent="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea style={{rowGap:100}}>
                <CardMedia
                  component="img"
                  alt="Movie"
                  height="140"
                  image={post.src}
                  title="Movie"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Get more Details
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default About;