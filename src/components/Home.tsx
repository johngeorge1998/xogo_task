import { Box, Stack, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";

function Home() {
  return (
    <Box
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "5%",
      }}
    >
      <Text
        c={"#ffff"}
        style={{
          fontSize: "120px",
          fontWeight: "600",
          marginBottom: "-10px",
          marginTop: "-70px",
        }}
      >
        Title Here
      </Text>
      <Stack style={{ width: "720px" }}>
        <Text
          c={"#ffff"}
          style={{ fontSize: "30px", fontWeight: "100", marginBottom: "40px" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit Fugit
          perspiciatis ea, possi architecto.
        </Text>

        <button className="order-button">ORDER NOW</button>
      </Stack>
    </Box>
  );
}

export default Home;
