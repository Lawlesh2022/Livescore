// import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import { useEffect, useState } from 'react';

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(()=>{
    getMatches().then((res)=> {      
      setMatches(res.data);
      console.log(res.data);
    })
      .catch((error)=> alert("Could not load data"));
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to my Live Score App</h1>      
      <Grid container> 
         <Grid sm = "2"></Grid> 
         <Grid sm ="8">   
            {
               matches.map((match)=>(
                <MyCard key={match.unique_id} match = {match} />                
               ))
            }
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
