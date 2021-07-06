import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

export default function DataCard() {
  const classes = useStyles();

  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/fetchingdata`).then((res) => {
      console.log(res);
      setposts(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Medium Blog Posts
        </Typography>
        <Grid container spacing={3}>
          {posts.map((character) => (
            <Grid item xs={12} sm={4} key={character.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography color="primary" variant="h5">
                    Post Title: {character.postTitle}
                  </Typography>
                  <Typography color="primary" variant="h6">
                    Creator Name: {character.creatorName}
                  </Typography>

                  <Typography color="primary" variant="h6">
                    Date of Post: {character.detailPosted}
                  </Typography>
                  <Typography color="primary" variant="h6">
                    Reading Time: {character.detailReading}
                  </Typography>
                  <Typography color="textSecondary" variant="p">
                    url :{character.postUrl}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" className="primary">
                    Book Session
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
