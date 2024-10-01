"use client";

import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Image from "next/image";

import handShake from "./assets/handShake.png";
import tree from "./assets/sustainable.gif";
import sun from "./assets/sun.png";
import graph from "./assets/graph.png";

import community from "./assets/skyTextile/Knitting.jpg";
import curiosity from "./assets/skyTextile/DEYING.jpg";
import collab from "./assets/skyTextile/FABRIC.jpg";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "./assets/skyTextile/1.1.jpg";
import img2 from "./assets/skyTextile/1.2.jpg";
import img3 from "./assets/skyTextile/1.3.jpg";
import img4 from "./assets/skyTextile/1.4.jpg";

const processData = [
  {
    id: 0,
    head: "Innovations",
    data1:
      "SKY Textiles drives innovation by responding to customer needs for unique, high-quality products that reflect emerging trends and changing consumer preferences.",
    data2:
      "We stay ahead of the curve, consistently delivering tailored, differentiated solutions to meet market demands.",
    data3:
      "By monitoring trends and end-user expectations, we provide cutting-edge designs and superior products that exceed client expectations in a dynamic industry.",
  },
  {
    id: 1,
    head: "Technologies",
    data1:
      "SKY Textiles integrates technology into every facet of production, quality assurance, and R&D, ensuring precision, efficiency, and innovation.",
    data2:
      "Our use of cutting-edge tools and techniques allows us to maintain top-quality standards while fostering continuous improvement and creativity in our products.",
    data3:
      "This commitment to technology empowers us to meet the evolving needs of our clients and stay ahead in the market.",
  },
  {
    id: 2,
    head: "Economy Scale",
    data1:
      "SKY Textiles' large production capacity optimizes every stage, from sourcing raw materials to delivering a wide range of products across the vertical.",
    data2:
      "Our capacity advantage allows us to efficiently meet diverse customer demands while maintaining flexibility and offering a superior variety of products.",
    data3:
      "Operating at scale enables us to provide clients with both quality and choice, ensuring competitiveness and responsiveness to market needs.",
  },
  {
    id: 3,
    head: "Verticle Integration",
    data1:
      "SKY Textiles has established a strong presence across the entire textile and garment value chain, from yarns and fabrics to finished garments.",
    data2:
      "Our comprehensive integration allows us to oversee every production stage, ensuring quality and consistency throughout the process.",
    data3:
      "With end-to-end capabilities, we efficiently meet diverse customer needs, making us a trusted partner in the textile and garment industry.",
  },
  {
    id: 4,
    head: "Product Range",
    data1:
      "SKY Textiles offers an end-to-end solution across a wide range of product categories, from raw cotton to finished garments.",
    data2:
      "Our fully integrated services manage every aspect of the textile production process, ensuring quality and efficiency at each stage.",
    data3:
      "This comprehensive approach enables us to meet diverse client needs, making us a reliable partner for all textile and garment requirements.",
  },
  {
    id: 5,
    head: "Global Presence",
    data1:
      "SKY Textiles has established a global presence in 14 countries, delivering exceptional quality and innovation as one of India's fastest-growing textile units.",
    data2:
      "We cater to the biggest domestic brands, providing high-quality garments and fabrics, making us a trusted partner in the industry.",
    data3:
      "Our commitment to excellence and innovation drives growth and expansion both in India and internationally, keeping us ahead in the competitive global market.",
  },
];

const milestoneData = [
  "To lead the industry with innovative, sustainable textile solutions, delivering exceptional quality and design while fostering a responsible, eco-friendly future for fashion and fabric production",
  "To produce high-quality, sustainable textiles through innovation and ethical practices, exceeding customer expectations while minimizing environmental impact and supporting the growth of our communities and partners.",
  "Quality, Sustainability, Innovation, Integrity, Customer Focus, Collaboration, Responsibility.",
];

export default function SkyTextiles() {
  const [img, setImg] = useState(community);
  const [activeDiv, setActiveDiv] = useState(0);
  const [activeMileStone, setActiveMileStone] = useState(0);

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var settingsImages = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div>{i + 1}</div>,
  };

  return (
    <Stack>
      <Navbar />
      <Stack margin={{ md: "100px 0", xs: "100px 0" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
          width={{ md: "65%", xs: "80%" }}
          margin={"20px auto"}
          marginTop={"0"}
        >
          Where innovation meets tradition, we weave quality into every thread.
        </Typography>

        <Typography
          textAlign={"center"}
          width={{ md: "50%", xs: "80%" }}
          fontSize={{ md: "1.0rem", xs: "0.8rem" }}
          margin={"0 auto"}
        >
          We are thrilled to announce that SKY Textiles has emerged as a premier
          fully vertical facility, offering a comprehensive, one-stop solution
          for all your garment needs. From raw cotton to finished apparel, we
          handle every stage of production, including design, development,
          sourcing, industrial manufacturing, and sales. Our mission is to
          empower our clients by helping them unlock new possibilities and
          innovations in their product lines. Through close collaboration, we
          craft unique, high-quality garments that inspire confidence and bring
          delight to every customer.
        </Typography>
      </Stack>
      <Stack
        backgroundColor={"#F9F9F9"}
        padding={{ md: "100px 70px", xs: "50px 50px" }}
        direction={{ md: "row" }}
        justifyContent={"space-around"}
        gap={"20px"}
      >
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            150+
          </Typography>
          <Typography fontSize={"1.2rem"}>
            Trusted by companies who believe in us.
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            2020
          </Typography>
          <Typography fontSize={"1.2rem"}>Since we are</Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Image src={handShake} alt="" width={100} height={100} />
          <Typography fontSize={"2.5rem"} fontWeight={"bold"}>
            100+
          </Typography>
          <Typography fontSize={"1.2rem"}>Valid Certifications</Typography>
        </Stack>
      </Stack>
      <Stack margin={{ md: "100px 70px", xs: "50px 30px" }}>
        <Typography
          width={{ md: "70%" }}
          margin={"5px auto"}
          textAlign={"center"}
          fontSize={{ md: "1rem", xs: "0.7rem" }}
        >
          Founded in October 2020 under the Companies Act of 2013 (CIN:
          U17299GJ2020PTC116984), SKY Textiles is headquartered at B-105,
          Westgate Tower Unit 2, near YMCA Club, S.G. Highway, Makarba,
          Ahmedabad, Gujarat. We take pride in our cutting-edge vertical
          facility, located at Survey No Paiki, 32 & 33, Bhavnagar Road,
          Lathidad, District Botad, Gujarat. With our commitment to excellence,
          innovation, and customer satisfaction, SKY Textiles is poised to
          become a leading partner for all your garment production needs. We
          look forward to an exciting journey ahead, creating world-class
          apparel together !
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
            // onMouseEnter={() => setContent(1)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(0)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>

          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Box
            width={"25%"}
            height={"30vh"}
            // onMouseEnter={() => setContent(2)}
            borderRadius={"10px"}
            sx={{
              cursor: "pointer",
              backgroundImage: `url(${img4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Stack>
        <Stack height={{ smm: "40vh" }} display={{ md: "none", xs: "flex" }}>
          <Slider {...settingsImages}>
            <Box padding={"10px"}>
              <Box
                height={{ smm: "40vh", xs: "40vh" }}
                sx={{
                  backgroundImage: `url(${img1.src})`,
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
                  backgroundImage: `url(${img2.src})`,
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
                  backgroundImage: `url(${img3.src})`,
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
                  backgroundImage: `url(${img4.src})`,
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
      <Stack backgroundColor={"#FB5457"} padding={10}>
        <Slider ref={sliderRef} {...settings}>
          {processData.map((el, i) => {
            return (
              <Stack
                direction={{ md: "row", xs: "column-reverse" }}
                justifyContent={"space-between"}
                gap={{ md: "40px", xs: "10px" }}
                alignItems={"center"}
                backgroundColor={"#F9F9F9"}

                // margin={{ lg: "70px 100px", xs: "40px 30px" }}
                // padding={{ md: "40px", xs: "10px" }}
              >
                <Stack
                  direction={"row"}
                  padding={5}
                  justifyContent={"space-evenly"}
                >
                  <Stack width={"62%"}>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={{ lg: "3rem", md: "2rem", xs: "1.5rem" }}
                      color={"#FB5457"}
                      marginBottom={"20px"}
                    >
                      {el.head}
                    </Typography>
                    <Box
                      height={"1.5px"}
                      width={"200px"}
                      backgroundColor={"black"}
                      marginBottom={"40px"}
                    ></Box>
                    <Stack
                      direction={"row"}
                      gap={"20px"}
                      alignItems={"center"}
                      border={"1px solid #FB5457"}
                      padding={"15px"}
                      backgroundColor={"white"}
                      marginBottom={"20px"}
                    >
                      <Image src={sun} alt="" width={"10px"} height={"10px"} />
                      <Typography>{el.data1}</Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      gap={"20px"}
                      alignItems={"center"}
                      border={"1px solid #FB5457"}
                      padding={"15px"}
                      backgroundColor={"white"}
                      marginBottom={"20px"}
                    >
                      <Image src={sun} alt="" width={"10px"} height={"10px"} />
                      <Typography>{el.data2}</Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      gap={"20px"}
                      alignItems={"center"}
                      border={"1px solid #FB5457"}
                      padding={"15px"}
                      backgroundColor={"white"}
                      marginBottom={"20px"}
                    >
                      <Image src={sun} alt="" width={"10px"} height={"10px"} />
                      <Typography>{el.data3}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    width={{ lg: "33%", md: "50%", xs: "90%" }}
                    position={"relative"}
                  >
                    <Image src={tree} fill objectFit="contain" />
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
      <Stack
        direction={{ md: "row" }}
        gap={"20px"}
        backgroundColor={"#f9f9f9"}
        padding={{ lg: "50px 70px", xs: "30px" }}
        marginBottom={"70px"}
      >
        <Stack width={{ md: "60%" }}>
          <Typography
            fontWeight={"bold"}
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          >
            We Are Passionate About
          </Typography>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            Solving Problems
          </Typography>
          <Stack margin={{ lg: "40px 0" }}>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 0 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(community), setActiveDiv(0);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Knitting
                </Typography>
                <Typography fontSize={"1rem"}>
                  The process of creating fabric by interlocking yarn loops to
                  form flexible, stretchable textiles.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 1 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(curiosity), setActiveDiv(1);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Dyeing
                </Typography>
                <Typography fontSize={"1rem"}>
                  Applying color to fabric through various methods to achieve
                  vibrant and consistent shades.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              width={{ lg: "70%", md: "100%" }}
              padding={"20px"}
              paddingLeft={0}
              direction={"row"}
              gap={"20px"}
              color={activeDiv === 2 ? "black" : "#d2d2d2"}
              onMouseEnter={() => {
                setImg(collab), setActiveDiv(2);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Image src={graph} alt="" width={50} height={50} />
              <Stack gap={"10px"}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>
                  Finishing
                </Typography>
                <Typography fontSize={"1rem"}>
                  Enhancing fabric properties like texture, strength, and
                  appearance through treatments and processes after knitting and
                  dyeing.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          height={"90vh"}
          width={{ md: "40%" }}
          sx={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "30px",
          }}
        ></Stack>
      </Stack>
      {/* <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        margin={{ md: "100px 70px", xs: "50px 30px" }}
        gap={"10px"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Stack gap={"10px"} width={{ md: "50%", smm: "70%", xs: "100%" }}>
          <Typography
            fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
            fontWeight={"bold"}
          >
            What Is Lorem Ipsum?
          </Typography>
          <Typography
            fontSize={{ md: "1rem", xs: "0.7rem" }}
            width={{ md: "70%" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <button
            style={{
              backgroundColor: "#FB5457",
              border: "none",
              width: "100px",
              padding: "10px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Button
          </button>
        </Stack>
        <Stack
          width={{ md: "50%", xs: "100%" }}
          height={{ md: "30vw", xs: "30vh" }}
          sx={{
            backgroundImage: `url(${maskGroup.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Stack>
      </Stack> */}
      <Stack margin={{ md: "50px 0", xs: "30px 0" }}>
        <Typography
          fontSize={{ lg: "3rem", smm: "2rem", xs: "1.5rem" }}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Milestones
        </Typography>
        <Typography
          fontSize={{ md: "1rem", xs: "0.7rem" }}
          textAlign={"center"}
          width={"60%"}
          margin={"0 auto"}
        >
          {milestoneData[activeMileStone]}
        </Typography>
        <Stack
          direction={{ md: "row" }}
          justifyContent={"center"}
          gap={"20px"}
          margin={"30px 0"}
        >
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(0)}
          >
            Vision
          </Stack>
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(1)}
          >
            Mission
          </Stack>
          <Stack
            minWidth={{ lg: "150px", xs: "100px" }}
            maxWidth={{ lg: "150px", xs: "100px" }}
            height={{ lg: "150px", xs: "100px" }}
            backgroundColor="#FB5457"
            borderRadius={"50%"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            sx={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&: hover": {
                scale: 1.1,
              },
            }}
            onMouseEnter={() => setActiveMileStone(2)}
          >
            Values
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}
