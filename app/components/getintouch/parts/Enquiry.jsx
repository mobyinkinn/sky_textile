import { Stack, Box, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Form from "./EnquiryForm";

import enquiryGif from "./assets/enquiryGif.png";
import gate from "./assets/gate.png";
import call from "./assets/call.png";
import location from "./assets/LocationOutline.png";
import Image from "next/image";

export default function Enquiry() {
  return (
    <Stack>
      <Navbar></Navbar>
      <Stack margin={"250px 100px"} direction={"row"} gap={"30px"}>
        <Stack width={"50%"} gap={"20px"}>
          <Typography fontWeight={"bold"}>
            Sky Textiles Customer Platform
          </Typography>
          <Typography fontWeight={"bold"} fontSize={"3.5rem"}>
            Grow Better With Sky Textiles
          </Typography>
          <Typography>
            Software That's Powerful, Not Overpowering. Seamlessly Connect Your
            Data, Teams, And Customers On One Ai-powered Customer Platform That
            Grows With Your Business.
          </Typography>
        </Stack>
        <Stack width={"50%"}>
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
          direction={"row"}
          marginTop={"50px"}
          justifyContent={"space-between"}
        >
          <Stack width={"30%"} gap={"10px"} alignItems={"center"}>
            <Box
              sx={{
                backgroundImage: `url(${gate.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100px",
                width: "100px",
              }}
            ></Box>
            <Typography fontSize={"2.5rem"} textAlign={"center"}>
              India
            </Typography>
            <Stack direction={"row"} gap={"10px"} alignItems={"start"}>
              <Image src={location} alt="" width={15} height={25} />
              <Typography textAlign={"center"}>
                Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                Borivali (W), Mumbai: 400 092.
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
              India
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={location} alt="" width={15} height={25} />
              <Typography textAlign={"center"}>
                Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                Borivali (W), Mumbai: 400 092.
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
              India
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Image src={location} alt="" width={15} height={25} />
              <Typography textAlign={"center"}>
                Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                Borivali (W), Mumbai: 400 092.
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
