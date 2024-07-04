import { Box, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";
import People from "./images/people.png";

function Review() {
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "10%",
        }}
      >
        <Box
          style={{
            maxWidth: "730px",
            textAlign: "center",
            marginLeft: "80px",
            marginTop: "0px",
          }}
        >
          <img
            src={People}
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto", marginBottom: "0px" }}
          />

          <Text
            c="#fff"
            style={{
              fontSize: "30px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            If you are a culinary fan, if you like to spend time in your
            kitchen, you likely find yourself looking for reliable resources
            through which you can
          </Text>

          <Text
            c="#ffff"
            style={{
              fontSize: "35px",
              fontWeight: "600",
              marginBottom: "40px",
              lineHeight: "25px",
            }}
          >
            Phoebe Frazier
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Review;
