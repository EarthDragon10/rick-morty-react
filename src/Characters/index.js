import React, {useEffect, useState} from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios"


export default function Characters() {

  const [characters, setCharacter] =  useState([]);
  const [charactersImage, setImage] = useState([]);

  useEffect( () => {
    async function fetchData() {
      await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacter(response.data.results)
        const getImages = response.data.results.map(elem => elem.image)
        setImage(getImages);
      })
      .catch((error) => console.log(error))
    }

    fetchData();

  }, [])
  
  // console.log(characters)
  console.log(charactersImage);
  

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Character image={charactersImage} />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
      </Grid>
    </Container>
  );
}
