"use client";
import { Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import arrow from "./assets/arrow.png";
import career from "./assets/career.gif";
import location from "./assets/location.png";
import time from "./assets/time.png";

import Image from "next/image";

export default function Careers() {
  const data = [
    {
      designation: "HR Head",
      Description:
        "We're Looking For A Mid-level Product Designer To Join Our Team.",
      type: "Full-time",
      Remote: "100% Remote",
    },
    {
      designation: "Textiles Merchandiser",
      Description:
        "We're Looking For A Mid-level Product Designer To Join Our Team.",
      type: "Full-time",
      Remote: "100% Remote",
    },
    {
      designation: "Shift Supervisor",
      Description:
        "We're Looking For A Mid-level Product Designer To Join Our Team.",
      type: "Full-time",
      Remote: "100% Remote",
    },
    {
      designation: "Sales and Marketing Garments",
      Description:
        "We're Looking For A Mid-level Product Designer To Join Our Team.",
      type: "Full-time",
      Remote: "100% Remote",
    },
  ];
  return (
    <Stack>
      <Navbar />
      <Stack
        direction={{ md: "row" }}
        margin={{ md: "100px 70px", xs: "30px" }}
        alignItems={"center"}
        height={{ md: "70vh" }}
      >
        <Stack width={{ md: "70%" }}>
          <Typography
            fontSize={{ lg: "4.5rem", smm: "3rem", xs: "2rem" }}
            fontWeight={"bold"}
          >
            Want To Join
          </Typography>
          <Typography
            fontSize={{ lg: "4.5rem", smm: "3rem", xs: "2rem" }}
            fontWeight={"bold"}
          >
            The Team ?
          </Typography>
          <Typography
            fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
            fontWeight={"bold"}
          >
            Be Our Next Human Experience
          </Typography>
          <Typography
            fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
            fontWeight={"bold"}
          >
            Designer
          </Typography>
        </Stack>
        <Image src={career} alt="" width={300} height={300} />
      </Stack>
      <Stack>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          margin={{ md: "0", xs: "0 30px" }}
        >
          Why Join Sky Textiles?
        </Typography>
        <Typography
          width={"80%"}
          margin={"10px auto"}
          textAlign={"center"}
          fontSize={{ ms: "1rem", xs: "0.7rem" }}
        >
          Joining SKY Textiles means becoming part of an innovative and
          sustainable textile company dedicated to quality and social
          responsibility. We prioritize employee growth, offering training and
          development programs to enhance skills and career advancement. Our
          commitment to eco-friendly practices ensures you contribute to a
          greener future while working with high-quality materials in a fully
          integrated setup. As part of our team, you’ll collaborate with
          passionate professionals who value creativity and excellence.
          Additionally, our focus on ethical labor practices fosters a
          supportive and inclusive work environment. Join SKY Textiles to make a
          meaningful impact in the textile industry while advancing your career.
        </Typography>
      </Stack>
      <Stack margin={{ md: "100px 70px", xs: "30px" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          marginBottom={{ md: "50px" }}
          fontWeight={"600"}
        >
          Current Job Openings
        </Typography>
        {data.map((d) => (
          <Stack
            margin={{ md: "30px 0", xs: "20px 0px" }}
            gap={"20px"}
            sx={{ border: "1px solid black", padding: "30px" }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                fontSize={{ lg: "1.8rem", smm: "1.6rem", xs: "1.4rem" }}
                fontWeight={"bold"}
              >
                {d.designation}
              </Typography>
              <Stack
                direction={"Row"}
                gap={"15px"}
                alignItems={"center"}
                display={{ md: "flex", xs: "none" }}
              >
                <Typography fontSize={"1.6rem"}>Apply Now</Typography>
                <Image src={arrow} alt="" width={"20"} height={"20"} />
              </Stack>
            </Stack>
            <Typography>{d.Description}</Typography>
            <Stack direction={"row"} justifyContent={"start"} gap={"20px"}>
              <Stack
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
                padding={{ md: "5px 20px", sm: "5px 15px" }}
                sx={{
                  border: "1px solid black",
                  width: "fit-content",
                  borderRadius: "20px",
                }}
              >
                <Image src={location} alt="" width={15} height={20} />
                <Typography fontSize={{ smm: "20px", sm: "11px" }}>
                  {d.Remote}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={"10px"}
                alignItems={"center"}
                padding={{ md: "5px 20px", sm: "5px 15px" }}
                sx={{
                  border: "1px solid black",
                  width: "fit-content",
                  borderRadius: "20px",
                }}
              >
                <Image src={time} alt="" width={20} height={20} />
                <Typography fontSize={{ smm: "20px", sm: "11px" }}>
                  {d.type}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"Row"}
              gap={"15px"}
              alignItems={"center"}
              display={{ md: "none", smm: "flex" }}
            >
              <Typography fontSize="18px">Apply Now</Typography>
              <Image src={arrow} alt="" width={"15"} height={"15"} />
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Footer />
    </Stack>
  );
}
