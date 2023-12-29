import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
import { Box,styled,Typography } from "@mui/material";

const Image=styled("img")({
  width:"100%",
  height:150,
  objectFit:"cover",
  outline:"2px solid", 
  outlineColor:"#A9A9A9",
  borderRadius:"25px;"
})

const Component=styled(Box)`
    background:#ffffff;
    width:100%;
    margin-top:40px;
    text-align:center;
    outline:4px solid ; 
    outline-color:#F0F0F0;
    box-shadow: 10px 10px 10px #A9A9A9;
    height:30vh;
    border-radius:20px;
    background:#F3F3F3;
`
const Text=styled(Typography)`
    font-size:14px;
    margin-top:5px;
    color:#868686;
`

const Heading=styled(Typography)`
    font-size:20px;
    font-weight:600;
    color:#868686;
`


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  


const Slide = ({heading,data}) => {
  return (
    <Component>
      <Heading>{heading}</Heading>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {data.map((image) => (
            <Link to="/view" style={{textDecoration:"none"}}>
            <Box textAlign="center" style={{padding:"10px 15px 0px 15px"}}>
              <Image src={image.url} alt="Image"></Image>
              <Text style={{fontWeight:600}}>{image.label}</Text>
            </Box>
            </Link>
        
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;


