import { useState } from "react";

import {Box,Typography,styled,FormControl,InputBase,Button,TextareaAutosize} from "@mui/material"
import {AddCircle as Add,} from '@mui/icons-material';

const Error=styled(Typography)`
    font-size:20px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const Imagecontainer=styled(Box)`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    background: linear-gradient(to bottom, #f2f2f2, #e0e0e0); /* Example gradient colors */
    margin-top:84px;
`
const Image=styled('img')({
    width: "100%",
    height: "100%",
    objectFit: "contain",
    
})

const Container=styled(Box)`
    margin:50px 100px;
`
const StyledIcon=styled(Add)`
    cursor:pointer;

`
const StyledFormControl=styled(FormControl)`
    margin-top:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const InputField=styled(InputBase)`
    flex:1;
    font-size:25px;
    width:100%;
`

const TextArea=styled(TextareaAutosize)`
    width:100%;
    margin-top:20px;
    font-size:18px;
    // border:none;
    &:focus-visible{
        outline:none;
    }
`

const Pbutton=styled(Button)`
    margin-top:15px;
`

const CreatePost=()=>{
 
    const [url,setUrl]=useState("https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/Head%20and%20shoulders.png/jcr:content/renditions/original-size.webp")
 
    return (
        <Container style={{textAlign:"center",marginTop:"20px"}}>
            <Imagecontainer>
                <Image alt="image" src={url}></Image>
            </Imagecontainer>

            <StyledFormControl style={{marginTop:"20px"}}>
                <label htmlFor="fileInput">
                    <StyledIcon fontSize="large" color="action" />
                </label>

                <input id="fileInput" style={{display:"none"}} type="file" />

                 <Button  variant="contained">Upload</Button>
            </StyledFormControl>
            <Box style={{marginTop:"20px"}}>
                <InputField  placeholder="Title"  name="title"/>
                <TextArea
                minRows={5}
                placeholder="Write Your Description here ..."
                name="description"
                />
                <Pbutton variant="contained">Create</Pbutton>
            </Box>
        </Container>
    )
}

export default CreatePost;