"use client";

import { Box, Stack, Typography } from "@mui/material";
import img from "./assets/our.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./assets/main/1.jpg";
import img2 from "./assets/main/2.jpg";
import img3 from "./assets/main/3.jpg";
import img4 from "./assets/main/4.jpg";

export default function Our() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
  };
  return (
    <Stack margin={{ md: "100px 70px", xs: "50px 30px" }} gap={"10px"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        fontWeight={"bold"}
      >
        Our <span style={{ color: "#FB5457" }}>Infrastructure</span>
      </Typography>
      <Typography>
        We are India's only composite manufacturing plant having
        state-of-the-art manufacturing facilities right from Fiber to Made-ups..
        We are equipped with highly advanced and modern machineries like
        Knitting, Singeing, Inspection, Processing, Cutting, Embroidery,
        Stitching & Packing facilities that helps us in delivering an impeccable
        range.
      </Typography>
      <Typography>
        Today SKY textiles has Unit at Lathidad manufacturing a wide range of
        knitted fabrics for Indian and International markets.
      </Typography>
      <Stack
        direction={"row"}
        height={"60vh"}
        display={{ md: "flex", xs: "none" }}
        sx={{ justifyContent: "space-between", margin: "40px 0" }}
      >
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img1.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img2.src})`,
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            cursor: "pointer",
            filter: "grayscale(100%)",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
            cursor: "pointer",
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
        <Box
          width={"20%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${img4.src})`,
            backgroundPosition: "center center",
            transition: "filter 0.5s ease",
            backgroundSize: "cover",
            borderRadius: "20px",
            filter: "grayscale(100%)",
            cursor: "pointer",
            "&:hover": {
              filter: "grayscale(0%)",
            },
          }}
        ></Box>
      </Stack>
      <Stack height={{ smm: "60vh" }} display={{ md: "none", xs: "flex" }}>
        <Slider {...settings}>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img1.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img2.src})`,
                backgroundPosition: "center center",
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img3.src})`,
                backgroundPosition: "center center",
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${img4.src})`,
                backgroundPosition: "center center",
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
                filter: "grayscale(100%)",
                cursor: "pointer",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            ></Box>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
