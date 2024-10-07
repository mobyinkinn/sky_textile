import { Stack, Typography } from "@mui/material";
import icon from "./assets/icon.png";
import Image from "next/image";

export default function Different() {
  return (
    <Stack backgroundColor={"#FF5256"} color={"white"} padding={"100px 70px"}>
      <Typography fontSize={"2.5rem"} textAlign={"center"} margin={"30px 0"}>
        What Make us Different
      </Typography>
      <Stack direction={{ md: "row", xs: "column" }} gap={"50px"}>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography
            fontSize={{ lg: "2rem", md: "1.5rem", xs: "1.3rem" }}
            textAlign={"center"}
          >
            Sustainability Commitment
          </Typography>
          <Typography textAlign={"center"}>
            SKY Textiles prioritizes eco-friendly practices, using renewable
            energy and sustainable materials, setting us apart in minimizing
            environmental impact.
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography
            fontSize={{ lg: "2rem", md: "1.5rem", xs: "1.3rem" }}
            textAlign={"center"}
          >
            Transparent Supply Chain
          </Typography>
          <Typography textAlign={"center"}>
            Our Fiber-to-Fashion model ensures complete traceability and ethical
            sourcing from farms to production.
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
          <Image src={icon} alt="" width={50} height={50} />
          <Typography
            fontSize={{ lg: "2rem", md: "1.5rem", xs: "1.3rem" }}
            textAlign={"center"}
          >
            Empowerment Focus
          </Typography>
          <Typography textAlign={"center"}>
            We empower communities through local employment and skill
            development, fostering social responsibility.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
