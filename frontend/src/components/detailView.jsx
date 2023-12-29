import {Box,Typography,styled} from "@mui/material"
import {useParams,Link, useNavigate} from "react-router-dom"
import {Edit,Delete} from '@mui/icons-material';


const Image=styled('img')({
    width: "100%",
    height: "100%",
    objectFit: "contain",
})

const Author=styled(Box)`
    color:#878787;
    margin 20px 0;
    display : flex
`
const Icontainer=styled(Box)`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    background: linear-gradient(to bottom, #f2f2f2, #e0e0e0); /* Example gradient colors */
    margin:104px auto 10px
`

const Heading=styled(Typography)`
    font-size:38px;
    font-weight:600;
    text-align:center
    word-break:break-word;
`
const Description=styled(Typography)`
    word-break:break-word;
`

const EditIcon=styled(Edit)`
    margin:5px;
    padding:5px;
    border:1px solid #878787;
    border-radius:10px;
`
const DeleteIcon=styled(Delete)`
    margin:5px;
    padding:5px;
    border:1px solid #878787;
    border-radius:10px;
`

const DetailView=()=>{
 
    const url="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/Head%20and%20shoulders.png/jcr:content/renditions/original-size.webp"
    return (
        <Box style={{width:"95%",margin:"auto"}}>
            <Icontainer>
                <Image src={url} alt="Blog"/>
            </Icontainer>
            <Box style={{float:"right"}}>
                <>
                    <Link  style={{textDecoration:"none",color:"inherit"}}><EditIcon color="primary"/></Link>
                    <DeleteIcon color="error"/>
                </>
            </Box>
            <Heading>Detail View</Heading>
            <Author>
                <Typography>Author:<Box component="span" style={{fontWeight:600}}>Yash</Box></Typography>
                <Typography style={{marginLeft:"auto"}}>{new Date().toDateString()}</Typography>
            </Author>
            <Description>Graph Of Tata sales</Description>
        </Box>
    )
}

export default DetailView;