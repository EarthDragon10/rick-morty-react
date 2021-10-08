import React, {useEffect, useState} from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios"


export default function Characters() {

  const [characters, setCharacter] =  useState([]);


  useEffect( () => {
    async function fetchData() {
      await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacter(response.data.results)
      })
      .catch((error) => console.log(error))
    }

    fetchData();

  }, [])
  
  console.log(characters)
  // console.log(charactersImage);
  

  return (
    <Container fixed sx={{ mt: 4 }}>
      
      <Grid container spacing={2}>
        {characters.map((elem) => {
          return (
            <Grid item xs={3}>
              <Character key={elem.id} image={elem.image} name={elem.name} type={elem.type} gender={elem.gender} />
            </Grid>
          )
        })
          }
      </Grid>

    </Container>
  );
}
