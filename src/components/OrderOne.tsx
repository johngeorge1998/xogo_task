import { Box, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";

function OrderOne() {
  return (
    <>
      <Box
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: "10%",
        }}
      >
        <Box style={{ maxWidth: "520px", textAlign: "left" }}>
          <Text
            c="#21243d"
            style={{
              fontSize: "70px",
              fontWeight: "600",
              marginBottom: "10px",
              marginTop: "-70px",
            }}
          >
            Title Here
          </Text>
          <Text
            c="#21243d"
            style={{
              fontSize: "20px",
              fontWeight: "100",
              marginBottom: "40px",
              lineHeight: "25px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur enim fugit quis ex facilis
            doloremque assumenda sint ab. alias cupiditate incidunt!{" "}
          </Text>
          <button className="order-button">ORDER NOW</button>
        </Box>
      </Box>
    </>
  );
}

export default OrderOne;
