import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import banner from "./assets/csrBanner.png";
import sl from "./assets/sl.png";
import sl2 from "./assets/sl2.png";
import stethoscope from "./assets/stethoscope.png";
import community from "./assets/communityEngagement.png";
import labour from "./assets/labour.png";
import pine from "./assets/pine.png";

export default function Csr() {
  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Stack margin={"100px 0"}>
        <Typography width={"80%"} textAlign={"center"} margin={"0 auto"}>
          Commitment to ethical and sustainable business practices that
          positively impact society and the environment. This includes
          initiatives such as reducing carbon emissions through renewable
          energy, minimizing waste through recycling, ensuring fair labor
          practices, and supporting community development. SKY Textiles focuses
          on responsible sourcing of materials, sustainable production methods,
          and contributing to the well-being of the communities where it
          operates, while maintaining transparency and ethical standards
          throughout its supply chain.
        </Typography>
        <Stack margin={"200px"} position={"relative"}>
          <Box
            sx={{
              backgroundImage: `url(${sl.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "150px",
              position: "absolute",
              bottom: "-100px",
              left: "-100px",
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${sl2.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "200px",
              height: "200px",
              position: "absolute",
              right: "-100px",
              bottom: "-100px",
            }}
          ></Box>
          <Typography
            fontSize={"3rem"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Development CSR <br /> at SKY Textile
          </Typography>
          <Typography textAlign={"center"} width={"90%"} margin={"30px auto"}>
            SKY Textiles is committed to fostering community development through
            its CSR initiatives. We offer skill development programs that
            empower employees and local community members, enhancing their job
            prospects. By prioritizing local employment, we contribute to
            economic growth and support families. Additionally, we collaborate
            with local entrepreneurs, providing resources and mentorship to
            promote innovation. Our investment in community infrastructure,
            including education, clean water, and health services, ensures a
            better quality of life. Through these efforts, SKY Textiles drives
            sustainable development and strengthens the communities where we
            operate.
          </Typography>
        </Stack>
        <Stack margin={"0 200px"} position={"relative"}>
          <Box
            sx={{
              backgroundImage: `url(${stethoscope.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
              position: "absolute",
              bottom: "-150px",
              left: "-100px",
            }}
          ></Box>
          <Typography
            fontSize={"3rem"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Health
          </Typography>
          <Typography textAlign={"center"} margin={"30px auto"}>
            At SKY Textiles, we prioritize health and well-being through our
            Corporate Social Responsibility initiatives. We maintain safe
            working conditions and provide comprehensive health services,
            including regular check-ups and health insurance. Our commitment
            extends to mental health support, offering counseling and wellness
            programs for our employees. Additionally, we engage in community
            health initiatives, organizing free medical camps and partnering
            with local organizations to improve healthcare access in underserved
            areas. By focusing on workplace and community health, SKY Textiles
            strives to enhance the quality of life for our employees and the
            communities we serve.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          gap={"100px"}
          margin={"0 100px"}
          marginTop={"150px"}
        >
          <Stack width={"60%"}>
            <Typography color="#FB5457" fontSize={"1.3rem"}>
              Community Engagement
            </Typography>
            <Typography fontSize={"1rem"}>
              SKY Textiles is committed to uplifting the communities where we
              operate by providing local employment opportunities, supporting
              educational and skill development initiatives, and fostering
              long-term community growth.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${community.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
          ></Stack>
        </Stack>
        <Stack direction={"row-reverse"} gap={"100px"} margin={"0 100px"}>
          <Stack width={"60%"}>
            <Typography color="#FB5457" fontSize={"1.3rem"} textAlign={"right"}>
              Fair Labour Practices
            </Typography>
            <Typography fontSize={"1rem"} textAlign={"right"}>
              We uphold the highest standards of labor rights and employee
              well-being, certified by global organizations such as WRAP, SEDEX,
              and SLCP. SKY Textiles promotes fair wages, safe working
              conditions, and equal opportunities for all employees.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${labour.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
          ></Stack>
        </Stack>
        <Stack direction={"row"} gap={"100px"} margin={"0 100px"}>
          <Stack width={"60%"}>
            <Typography color="#FB5457" fontSize={"1.3rem"}>
              Environmental Sustainability
            </Typography>
            <Typography fontSize={"1rem"}>
              We actively reduce our environmental impact through renewable
              energy investments, such as solar power, and by implementing
              energy-efficient production processes. Our dedication to
              sustainability extends to using eco-friendly materials, minimizing
              water consumption through advanced recycling technologies, and
              reducing waste by adhering to the 5 R’s—Reduce, Reuse, Recycle,
              Refuse, and Recover.
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${pine.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
            }}
          ></Stack>
        </Stack>
        <Stack margin={"200px"} position={"relative"}>
          <Typography
            fontSize={"3rem"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Women Empowerment <br /> at SKY Textile
          </Typography>
          <Typography textAlign={"center"} margin={"30px auto"}>
            At SKY Textiles, 70% of our workforce is composed of women,
            reflecting our strong commitment to women’s empowerment. We actively
            promote gender equality by providing equal opportunities, fair
            wages, and leadership development programs for women. Through skills
            training, education, and mentorship, we empower women to take on key
            roles across all levels of our organization. Additionally, we create
            a safe and supportive work environment that fosters personal and
            professional growth. SKY Textiles is proud to contribute to the
            economic and social upliftment of women, driving positive change
            within our industry and communities.
          </Typography>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
