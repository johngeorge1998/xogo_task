import { Box, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";

function Subscribe() {
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
            maxWidth: "720px",
            textAlign: "center",
            marginLeft: "80px",
            marginTop: "-200px",
          }}
        >
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
          <div className="order-container">
            <input
              type="text"
              placeholder="Your Email"
              className="order-input"
            />
            <button className="subs-button">SUBSCRIBE</button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Subscribe;
