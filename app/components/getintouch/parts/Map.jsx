import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";
import Tooltip from "@mui/material/Tooltip";

import Skeleton from "@mui/material/Skeleton";

export default function Map() {
  return (
    <Stack
      margin={{ xll: "100px 0 0 0", md: "100px 0 0 0", sm: "150px 0 0 0" }}
    >
      <Typography
        fontSize={{
          xll: "2.5rem",
          xl: "2.3rem",
          lg: "2rem",
          md: "1.8rem",
          sm: "1.5rem",
        }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        We'd Love To Hear From You
      </Typography>
      <Typography color={"#F8575A"} textAlign={"center"}>
        We Have Offices And Teams All Around The World.
      </Typography>
      <Box
        margin={{
          xll: "45px auto",
          xl: "30px auto",
          lg: "40px auto",
          md: "30px auto",
          smm: "25px auto",
          sm: "0px auto",
        }}
        height={{ xl: "300px", md: "200px", xs: "34vh" }}
        width={{ xl: "900px", md: "600", xs: "100%" }}
        sx={{
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        }}
      >
        <Tooltip title="India">
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "37%",
              right: "32%",
            }}
          ></Skeleton>
        </Tooltip>
        <Tooltip title="Russia">
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "13%",
              right: "37%",
            }}
          ></Skeleton>
        </Tooltip>
        <Tooltip title="USA">
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "33%",
              left: "27%",
            }}
          ></Skeleton>
        </Tooltip>
        <Tooltip title="Sri Lanka">
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "50%",
              right: { xl: "29%", md: "38%" },
            }}
          ></Skeleton>
        </Tooltip>
        <Tooltip title="Singapore">
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: { xl: "58%", md: "58%" },
              right: { xl: "24%", md: "35%" },
            }}
          ></Skeleton>
        </Tooltip>
      </Box>
    </Stack>
  );
}
