"use client";

import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rnd from "./assets/main/rnd.jpg";
import rnd2 from "./assets/main/rnd2.jpg";
import rnd3 from "./assets/main/rnd3.jpg";

export default function Rnd() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  return (
    <Stack
      margin={{ md: "0 70px 100px 70px ", xs: "0 20px" }}
      marginBottom={"150px"}
      gap={"10px"}
    >
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Research And Development
      </Typography>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"#FB5457"}
      >
        (R&D) Center
      </Typography>
      <Typography textAlign={"center"} width={"70vw"} margin={"0 auto"}>
        Innovation drives us forward, and our dedicated R&D centre plays a vital
        role in fostering breakthroughs in our industry. Our team of experienced
        researchers, designers, and engineers work tirelessly to develop new
        fabrics, textures, and patterns, staying at the forefront of market
        trends.
      </Typography>
      <Stack
        direction={"row"}
        gap={"40px"}
        justifyContent={"center"}
        marginTop={"50px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${rnd.src})`, backgroundSize: "cover" }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${rnd2.src})`, backgroundSize: "cover" }}
        ></Box>
        <Box
          width={"25%"}
          height={"30vh"}
          borderRadius={"10px"}
          sx={{ backgroundImage: `url(${rnd3.src})`, backgroundSize: "cover" }}
        ></Box>
      </Stack>
      <Stack height={{ smm: "40vh" }} display={{ md: "none", xs: "flex" }}>
        <Slider {...settings}>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd2.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "40vh", xs: "40vh" }}
              sx={{
                backgroundImage: `url(${rnd3.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                cursor: "pointer",
              }}
            ></Box>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
