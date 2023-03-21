import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import PlaylistDesign from "../playlistDesign/playlistDesign"



const drawerWidth = 240;


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = { playlists: [] };
    }

    
    render() {
        return <>
        <h1 >This is home page</h1>

        <PlaylistDesign></PlaylistDesign>  
        </>
      }
}

// function PlaylistDisplay (props){

//     const[playlistTitle,setplaylistTitle]=useState(null)
//     const connect = async()=>{
//         try{
//         const token= await fetch('http://localhost:3600/api/playlists',{
//             method: 'GET',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({ playlistTitle: playlistTitle})} )
           
//         console.log(token);
//     } 
//     catch(e){
//         console.log("ftyhtyhedyhhy")
//     } 
    
//         }
    
//     return (
//         <>
        
//         <div>
       
//         </div>
        
        
        
//         </>
                
//     )

// }

export default Home
