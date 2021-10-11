import React from "react";
import {Link} from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CardActionArea } from "@mui/material";

export default function Character(props) {


  
  return (

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' alt={props.name} height='250' image={props.image} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {props.name}
            </Typography>
            <List dense>
              <ListItem sx={{ pl: 0 }}>
                <ListItemText primary='STATUS' secondary={props.status} />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemText primary='GENDER' secondary={props.gender} />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemText primary='SPECIES' secondary={props.species} />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <Link to="/SingleCharacter">
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Link>
        
        
      </Card>
    
    
  )
}
