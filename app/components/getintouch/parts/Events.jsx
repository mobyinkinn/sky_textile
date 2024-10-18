"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/eventsBanner.png";
import conference from "./assets/conference.png";
import location from "./assets/location.png";
import time from "./assets/clock.png";
import Image from "next/image";

export default function Events() {
  const data = [
    {
      Date: "Wednesday, March 29",
      Title: "Sky Primwear Founders day",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "1st Founders Day marked with commitments, uniform policy, and annual event.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Independence Day celebration",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Independence Day celebration fostering patriotism and unity among our team.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Ganesh Chaturthi",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Navratri Celebration",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Navratri celebration at our factory embraces Gujarat's culture, dance, and unity.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Sardar Patel Jayanti",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Sardar Patel Jayanti, National Unity Day, honors India’s first Deputy PM.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Vishwakarma Pooja",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Vishwakarma Puja celebrates Lord Vishwakarma, the divine architect, creator.",
    },
    {
      Date: "Wednesday, March 29",
      Title: "Fire and safety programmes",
      time: "11 AM - 1 PM",
      location: "Sky Textiles",
      description:
        "Comprehensive Fire & Safety Programs ensuring a secure, compliant workplace environment.",
    },
  ];
  return (
    <Stack>
      <Navbar />
      <Stack
        height={"80vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Stack>
      <Stack margin={"40px 0"}>
        <Typography fontSize={"3rem"} fontWeight={"bold"} textAlign={"center"}>
          Events at Sky Textiles
        </Typography>
        <Typography fontSize={"1rem"} textAlign={"center"}>
          View Upcoming And Past Events Hosted By Sky Textiles.
        </Typography>
        {/* <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          margin={"30px"}
        >
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "none",
              backgroundColor: "#F85658",
              color: "white",
            }}
          >
            Upcoming Events
          </button>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              padding: "10px",
              border: "1px solid black",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Post Events
          </button>
        </Stack>*/}
      </Stack>
      <Stack
        margin={{
          xl: "50px 70px 200px 70px",
          md: "50px 40px 200px 40px",
          smm: "50px 30px 200px 30px",
          sm: "50px 20px 200px 20px",
        }}
        justifyContent={"space-between"}
        direction={{ md: "row", sm: "column" }}
        flexWrap={"wrap"}
        gap={"20px"}
      >
        {data.map((d) => (
          <Stack
            gap={"10px"}
            fontSize={"5px"}
            width={{ xl: "30%", lg: "50%", md: "50%", sm: "100%" }}
            padding={"20px"}
            backgroundColor={"#f9f9f9"}
          >
            <Box
              width="100%"
              height="30vh"
              sx={{
                backgroundImage: `url(${conference.src})`,
                backgroundSize: "cover",
                borderRadius: "5px",
              }}
            ></Box>
            {/* <Typography
              fontSize={"0.9rem"}
              backgroundColor={"#D9D9D9"}
              padding={"5px 8px"}
              borderRadius={"3px"}
              width={"fit-content"}
              margin={"10px 0"}
            >
              {d.Date}
            </Typography> */}
            <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
              {d.Title}
            </Typography>
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Image src={time} alt="" height={15} width={15} />
              <Typography>{d.time}</Typography>
            </Stack>
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Image src={location} alt="" height={16} width={12} />
              <Typography>{d.Title}</Typography>
            </Stack>
            <Typography>{d.description}</Typography>
            <button
              style={{
                marginTop: "20px",
                width: "200px",
                borderRadius: "5px",
                padding: "10px",
                fontSize: "1.2rem",
                border: "none",
                backgroundColor: "#F85658",
                color: "white",
              }}
            >
              View More
            </button>
          </Stack>
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
}
