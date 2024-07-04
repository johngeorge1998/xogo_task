import { Box, Grid, Stack, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";

import Food3 from "./images/food3.png";
import Food2 from "./images/food2.png";
import Food1 from "./images/food1.png";

function Menu() {
  return (
    <>
      <Box
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          c={"#ffff"}
          style={{
            fontSize: "55px",
            fontWeight: "600",
            marginBottom: "0px",
            marginTop: "40px",
          }}
        >
          Popular Menu
        </Text>
        <Stack style={{ width: "40%" }}>
          <Text
            c={"#ffff"}
            style={{
              fontSize: "17px",
              fontWeight: "100",
              marginBottom: "0px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>

          <Text
            c={"#ffff"}
            style={{
              fontSize: "17px",
              fontWeight: "100",
              marginTop: "0px",
              textAlign: "center",
            }}
          >
            Fugit perspiciatis ea, possimus architecto.
          </Text>
        </Stack>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 70px" }}
          >
            <img
              src={Food3}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />

            <Text
              c={"#ffff"}
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "0",
                marginBottom: "10px",
              }}
            >
              Title Here
            </Text>

            <Text
              c={"#ffff"}
              style={{
                fontSize: "12px",
                fontWeight: "100",
                marginBottom: "0",
                marginTop: "0",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur.
            </Text>

            <Text
              c={"#ffff"}
              style={{ fontSize: "12px", fontWeight: "100", marginTop: "0" }}
            >
              perspiciatis ea, possimus architecto.
            </Text>
          </div>

          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 70px" }}
          >
            <img
              src={Food2}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />

            <Text
              c={"#ffff"}
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "0",
                marginBottom: "10px",
              }}
            >
              Title Here
            </Text>

            <Text
              c={"#ffff"}
              style={{
                fontSize: "12px",
                fontWeight: "100",
                marginBottom: "0",
                marginTop: "0",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur.
            </Text>

            <Text
              c={"#ffff"}
              style={{ fontSize: "12px", fontWeight: "100", marginTop: "0" }}
            >
              perspiciatis ea, possimus architecto.
            </Text>
          </div>

          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 70px" }}
          >
            <img
              src={Food1}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />

            <Text
              c={"#ffff"}
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "0",
                marginBottom: "10px",
              }}
            >
              Title Here
            </Text>

            <Text
              c={"#ffff"}
              style={{
                fontSize: "12px",
                fontWeight: "100",
                marginBottom: "0",
                marginTop: "0",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur.
            </Text>

            <Text
              c={"#ffff"}
              style={{ fontSize: "12px", fontWeight: "100", marginTop: "0" }}
            >
              perspiciatis ea, possimus architecto.
            </Text>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Menu;
