import User from "./userProfile";
import Slide from "./carousel";
import { ImageData } from "../constants/constants.js";
import { PaperData } from "../constants/constants.js";

import {Box,styled,Button} from "@mui/material"
import {Link} from "react-router-dom"


const Container=styled(Box)`
    display:flex;
    height:100vh;
    background:#F5F5F5
`

const Graph=styled(Box)`
    width:80%;
    margin:0px auto 0px auto;
`

const Profile=styled(Box)`
    width:15%;
    margin:auto 20px auto 20px;
`

const ButtonContainer=styled(Box)`
    margin-top:20px;
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#161A30
`

const Home=()=>{
    return (
        <Container>
            <Profile>
                <User/>
            </Profile>
            <Graph>
                <Slide heading={"Recent Graphs"} data={ImageData}/>
                <Slide heading={"Recent Papers"} data={PaperData}/>
                <ButtonContainer>
                    <Link to="/create"><Button style={{padding:"10px 20px 10px 20px",marginRight:"20px"}} variant="contained">Create Graph</Button></Link>
                    <Link to="/create"><Button style={{padding:"10px 20px 10px 20px",marginLeft:"20px"}} variant="contained">Create Paper</Button></Link>
                </ButtonContainer>
            </Graph> 
        </Container>
    )
}

export default Home;