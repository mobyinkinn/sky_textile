import { Stack, Box, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Form from "./EnquiryForm";

import enquiryGif from "./assets/enquiryGif.gif";
import gate from "./assets/gate.png";
import call from "./assets/Call.png";
import location from "./assets/LocationOutline.png";
import Image from "next/image";

export default function Enquiry() {
  return (
    <Stack>
      <Navbar></Navbar>
      <Stack
        margin={{ md: "200px 100px", xs: "150px 30px" }}
        direction={{ md: "row" }}
        gap={"30px"}
      >
        <Stack width={{ md: "50%" }} gap={"20px"}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ md: "1rem", xs: "0.8rem" }}
          >
            Sky Textiles Customer Platform
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={{ md: "3.5rem", xs: "1.2rem" }}
          >
            Grow Better With Sky Textiles
          </Typography>
          <Typography fontSize={{ md: "1rem", xs: "0.8rem" }}>
            Collaborating with Sky Textiles offers an opportunity to partner
            with a leader in the textile industry known for quality,
            sustainability, and innovation. We welcome businesses seeking
            reliable fabric and garment solutions that meet international
            standards. Together, we can create value-driven products and achieve
            mutual growth through a strong and trusted partnership.
          </Typography>
        </Stack>
        <Stack width={{ md: "50%" }}>
          <Box
            sx={{
              backgroundImage: `url(${enquiryGif.src})`,
              backgroundSize: "contain",
              width: "100%",
              height: "50vh",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Stack>
      </Stack>
      <Form />
      <Stack margin={"100px 0"} padding={"100px"} backgroundColor={"#FFFDF9"}>
        <Typography fontSize={"3.5rem"} textAlign={"center"}>
          Get in touch with Sky Textiles
        </Typography>

        <Stack
          direction={{ md: "row" }}
          marginTop={"50px"}
          justifyContent={"center"}
          gap={"50px"}
        >
          <Stack width={"30%"} gap={"10px"} alignItems={"center"}>
            <Box
              sx={{
                backgroundImage: `url(${gate.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                height: "100px",
                width: "100px",
              }}
            ></Box>
            <Typography fontSize={"2.5rem"} textAlign={"center"}>
              Head Office
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={location} alt="" width={15} height={25} />
              <Typography textAlign={"center"}>
                Sky Textiles India Pvt Ltd. B-105, Westgate Tower Unit 2, Nr.
                YMCA Club, S.G. HIGHWAY , Makarba , AHMEDABAD- 380015
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={call} alt="" width={25} height={25} />
              <Typography>+91 72082 23487</Typography>
            </Stack>
          </Stack>
          <Stack width={"30%"} gap={"10px"} alignItems={"center"}>
            <Box
              sx={{
                backgroundImage: `url(${gate.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                height: "100px",
                width: "100px",
              }}
            ></Box>
            <Typography fontSize={"2.5rem"} textAlign={"center"}>
              Plant
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={location} alt="" width={15} height={25} />
              <Typography textAlign={"center"}>
                Sky Textiles India, pvt ltd, survey no paiki, 32 and 33, near
                sky spintex pvt. limited, Bhavnagar road, Lathidad, Botad,
                Gujarat, 364710 Gujarat, 364710
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={call} alt="" width={25} height={25} />
              <Typography>+91 72082 23487</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
}
