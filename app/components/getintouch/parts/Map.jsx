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
          sm: "25px auto",
          xs: "0px auto",
        }}
        sx={{
          width: "90%",
          maxWidth: "900px",
          position: "relative",
          aspectRatio: "3 / 2", // Ensures the map maintains aspect ratio
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
              top: "43%", // Use percentage values
              right: "27%",
            }}
          />
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
              top: "33%",
              right: "25%",
            }}
          />
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
              top: "40%",
              left: "25%",
            }}
          />
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
              right: "26%",
            }}
          />
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
              top: "60%",
              right: "17%",
            }}
          />
        </Tooltip>
      </Box>
    </Stack>
  );
}
