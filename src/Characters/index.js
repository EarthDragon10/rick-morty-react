import React, {useEffect, useState} from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios"

export default function Characters({page}) {

  const [characters, setCharacter] =  useState([]);


  useEffect( () => {
    async function fetchData() {
      
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

      response.status === 200 && setCharacter(response.data.results);
      
    }

    fetchData();

  }, [page])
  
  console.log(characters)
  // console.log(charactersImage);
  

  return (

    <Container fixed sx={{ mt: 4 }}>
      
      <Grid container spacing={2}>
        {characters.map((elem) => {
          return (
            <Grid item xs={3} key={elem.id}>
              <Character image={elem.image} name={elem.name} type={elem.type} gender={elem.gender} />
            </Grid>
          )
        })
          }
      </Grid>

    </Container>
  );
}
