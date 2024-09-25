"use client";

import { Box, Stack, Typography } from "@mui/material";
import enduro1 from "./assets/events/b1.jpg";
import enduro2 from "./assets/events/b2.jpg";
import enduro3 from "./assets/events/s1.jpg";
import enduro4 from "./assets/events/s2.jpg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

export default function Enduro() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(
      ".image",
      { backgroundPosition: "center -300px" },
      {
        backgroundPosition: "center 0",
        scrollTrigger: {
          trigger: ".image",
          start: "top bottom",
          end: "center top",
          scrub: true,
          //   markers: true,
        },
      }
    )
      .fromTo(
        ".image3",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image3",
            start: "top bottom",
            end: "center top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image2",
        { backgroundPosition: "center -300px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image2",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      )
      .fromTo(
        ".image4",
        { backgroundPosition: "center -150px" },
        {
          backgroundPosition: "center 0",
          scrollTrigger: {
            trigger: ".image4",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      );
  });
  return (
    <Stack margin={{ md: "0 50px", xs: "20px" }} gap={"10px"}>
      <Typography
        fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
        textAlign={"center"}
        fontWeight={"bold"}
        padding={"20px 0"}
      >
        Enduro Pulse
      </Typography>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"end"}
        height={"100vh"}
        direction={"row"}
        gap={"10px"}
      >
        <Stack
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="image3"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              top: "80%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Enterpreneur's Launchpad</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Stack>
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
          }}
          className="image"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              top: "85%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack
        display={{ md: "flex", xs: "none" }}
        width={"100%"}
        alignItems={"start"}
        height={"100vh"}
        direction={"row"}
        gap={"10px"}
      >
        <Box
          width={"60%"}
          height={"100%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0px",
          }}
          className="image2"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              top: "75%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Emerging Legends of Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          width={"40%"}
          height={"70%"}
          position={"relative"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="image4"
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              top: "80%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack width={"100%"} gap={"10px"} display={{ md: "none" }}>
        <Box
          width={"100%"}
          height={"40vh"}
          position="relative"
          sx={{
            backgroundImage: `url(${enduro1.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Emerging Legends of Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          position="relative"
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro2.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          width={"100%"}
          position="relative"
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro3.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Enterpreneur's Launchpad</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
        <Box
          position="relative"
          width={"100%"}
          height={"40vh"}
          sx={{
            backgroundImage: `url(${enduro4.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            position={"absolute"}
            direction={"row"}
            sx={{
              bottom: "5%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              width: "100%",
              padding: "20px",
            }}
            justifyContent={"space-between"}
          >
            <Typography color="white">Vibrant Gujarat</Typography>
            <Stack
              backgroundColor={"#E39B97"}
              width={"25px"}
              height={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"2px"}
            >
              <MdOutlineArrowOutward color="white" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
