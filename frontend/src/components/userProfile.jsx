import {Box,Typography,styled} from "@mui/material"
import img from "../images/img1.JPG"
import { Star as StarRate} from '@mui/icons-material';
import {PhoneInTalk} from '@mui/icons-material';
import {Email} from '@mui/icons-material'

const Container=styled(Box)`
    outline:2px solid ; 
    outline-color:#9E9FA5;
    box-shadow: 10px 10px 10px #A9A9A9;
    width:100%;
    border-radius:25px;
    padding:25px 0px 25px 0px;
    background:#F3F3F3;
`
const IconContainer=styled(Box)`
    width:100%;
    height:35%;
    display:flex;
    flex-direction:column;
    align-items:center;
    Text-align:left;
`
const Image=styled("img")({
    width:"60%",
    borderRadius:"50%",
    objectFit:"contain"
})

const Metrics=styled(Box)`
    text-align:left;
    width:100%;
`   

const Info=styled(Box)`
    padding:15px;
    text-align:left;
`

const Contact=styled(Box)`
    text-align:left;
    margin-top:20px;
    width:100%;
`
const User=()=>{
    return (
        <Container>
                <IconContainer>
                    <Image src={img}></Image>
                    <Typography style={{marginTop:"5px",fontWeight:600,}}>Yash Kshatriya <Typography style={{display:"inline",color:"#FFB000",fontWeight:"600"}}> <StarRate style={{fontSize:15}}/>Pro User</Typography></Typography>
                    <Info>
                        <Typography style={{fontWeight:"600",fontSize:"18px",}}>Bio</Typography>
                        <Typography style={{fontSize:"15px",color:"#868686"}}>Passionate full stack developer with a knack for crafting robust and scalable web solutions</Typography>
                    </Info>
                    <Metrics>
                            <Typography  style={{fontWeight:"600",paddingLeft:"15px"}}>Graphs Created: <Typography style={{display:"inline",color:"#868686",fontWeight:"600"}}>16</Typography></Typography>
                            <Typography style={{fontWeight:"600",paddingLeft:"15px"}}>Graphs Shared: <Typography style={{display:"inline",color:"#868686",fontWeight:"600"}}>12</Typography></Typography>
                            <Typography style={{fontWeight:"600",paddingLeft:"15px"}}>Papers Collected: <Typography style={{display:"inline",color:"#868686",fontWeight:"600"}}>15</Typography></Typography>
                    </Metrics>
                    <Contact>
                      <Box style={{display:"flex",alignItems:"center",paddingLeft:"15px"}}>
                        <PhoneInTalk />
                        <Typography style={{paddingLeft:"5px",color:"#868686"}}>+91 7880266113</Typography>
                      </Box>
                      <Box style={{display:"flex",alignItems:"center",paddingLeft:"15px"}}>
                        <Email />
                        <Typography style={{paddingLeft:"5px",color:"#868686"}}>yash108@gmail.com</Typography>
                      </Box>
                    </Contact>
                </IconContainer>
        </Container>
    )
}

export default User;