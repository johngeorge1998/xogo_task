import { Box, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";
import Insta from "./images/Instagram.png";
import Face from "./images/Facebook.png";
import Twit from "./images/Twitter.png";
import Whatsapp from "./images/WhatsApp.png";

function Footer() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingRight: "10%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          marginBottom: "40px",
        }}
      >
        <Box
          style={{ maxWidth: "500px", textAlign: "left", marginLeft: "80px" }}
        >
          <Text
            c="#fff"
            style={{
              fontSize: "35px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            Title Here
          </Text>
          <Text
            c="#fff"
            style={{ fontSize: "20px", fontWeight: "400", lineHeight: "30px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            aut cum animi sit eos omnis cupiditate laborum cumque minus, quas
            tempore perspiciatis.
          </Text>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              marginTop: "40px",
            }}
          >
            <img
              src={Insta}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src={Face}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src={Twit}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <img
              src={Whatsapp}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Box>

        <Box style={{ maxWidth: "500px", textAlign: "left" }}>
          <Text
            c="#fff"
            style={{
              fontSize: "35px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            About
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            History
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Our Team
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Brand Guidelines
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Terms & Condition
          </Text>
          <Text c="#fff" style={{ fontSize: "20px", fontWeight: "400" }}>
            Privacy Policy
          </Text>
        </Box>

        <Box style={{ maxWidth: "500px", textAlign: "left" }}>
          <Text
            c="#fff"
            style={{
              fontSize: "35px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            Services
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            How to Order
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Our Product
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Order Status
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Promo
          </Text>
          <Text c="#fff" style={{ fontSize: "20px", fontWeight: "400" }}>
            Payment Method
          </Text>
        </Box>

        <Box style={{ maxWidth: "500px", textAlign: "left" }}>
          <Text
            c="#fff"
            style={{
              fontSize: "35px",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            Other
          </Text>
          <Text
            c="#fff"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "-10px",
            }}
          >
            Help
          </Text>
          <Text c="#fff" style={{ fontSize: "20px", fontWeight: "400" }}>
            Privacy
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
