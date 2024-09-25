"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import megan from "./assets/team.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import anand from "./assets/team/AnandMishra.png";
import anurag from "./assets/team/Anurag.png";
import travadai from "./assets/team/MohammadTravadi.png";
import rajiv from "./assets/team/Rajiv.png";
import rakes from "./assets/team/Rakes.png";
import satendar from "./assets/team/Satendar.png";
import uday from "./assets/team/UdayKambe.png";
import Vishno from "./assets/team/Vishno.png";

const teamData = [
  {
    id: 0,
    name: "Rajiv Sharma",
    designation: "AVP Production Fabrics",
    img: anand,
  },
  {
    id: 0,
    name: "Vishnoo Pachori",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Rakesh Jayaraman",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Anand Mishra",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Satendra Singh",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Anurag Duglach",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Uday Kambe",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 0,
    name: "Mohammad Travedi",
    designation: "GM Production Garments",
    img: anand,
  },
];
export default function () {
  var settings = {
    // arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  var settingLarge = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "8%",
  };

  return (
    <Stack margin={{ md: "100px 0 0 0", xs: "30px 0 0 0" }}>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Meet some of Our 2000+
      </Typography>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Professionals
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        marginTop={"40px"}
        gap={"10px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={megan} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}> Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={team2} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={team3} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
        <Stack height={"50vh"} width={"20vw"} alignItems={"center"}>
          <Box position={"relative"} height={"100%"} width={"100%"}>
            <Image src={team2} alt="" fill objectFit="contain" sizes="100vw" />
          </Box>
          <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
            Megan Palms
          </Typography>
          <Typography fontSize={"0.9rem"}>Marketing Director</Typography>
        </Stack>
      </Stack>
      <Stack height={{ smm: "60vh" }} display={{ md: "none", xs: "flex" }}>
        <Slider {...settings}>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${megan.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${team3.src})`,
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
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${team2.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Box>
          <Box padding={"10px"}>
            <Box
              height={{ smm: "60vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${megan.src})`,
                transition: "filter 0.5s ease",
                backgroundSize: "cover",
                borderRadius: "20px",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
