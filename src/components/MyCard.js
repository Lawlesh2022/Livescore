import React from 'react'
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { require } from '@mui/material';
import { getMatchDetails } from '../api/Api';

const MyCard = ({match}) => {
    const handleClick = (id)=>{
        alert(id)
      getMatchDetails(id)
      .then((data)=> console.log("MatchData", data.data))
      .then((error)=>console.log(error))
    }
    const getMatchCard = ()=>{
        return (
            <Card style={{marginTop: 20}}>
                <CardContent>
                    <Grid item style = {{color: "blue", fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>{match.name}</Grid>
                    <Grid item style = {{color: "blue", fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Match Type: {match.matchType}</Grid>               
                    <Grid item style = {{color: "blue", fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Match Status: {match.status}</Grid> 
                    <Grid item style = {{color: "blue", fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Stadium: {match.venue}</Grid>                   
                    <Grid container justifyContent = "center" alignItems = "center" spacing = {4}>
                        <Grid item>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>{match.score[0]?.inning}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Run: {match.score[0]?.r}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Wicket: {match.score[0]?.w}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Over: {match.score[0]?.o}</Typography>
                        </Grid>                                        
                        <Grid item>
                        <img style={{width: "150px", height: "130px"}} src = {require("../img/vsimg.png")} alt = ""/>
                        </Grid>                    
                        <Grid item>                            
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>{match.score[1]?.inning}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Run: {match.score[1]?.r}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Wicket: {match.score[1]?.w}</Typography>
                            <Typography style = {{color: "purple", fontWeight: "bold", fontSize: "20px"}}>Over: {match.score[1]?.o}</Typography>
                        </Grid>
                    </Grid>                 
                    
                </CardContent>
                <CardActions>
                    <Grid container justifyContent = "center">
                    <Button variant = "contained" color = "primary" onClick={()=>{handleClick(match.id)}}>Shoe Details</Button>                
                    <Button style={{marginLeft: 10}} variant = "contained" color = "primary">Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
  return getMatchCard();    
  
}

export default MyCard