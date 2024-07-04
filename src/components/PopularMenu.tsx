import { Box, Grid, Stack, Text } from "@mantine/core";
import "@mantine/core/styles/Button.css";

function PopularMenu() {
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
          Statistics
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
            marginTop: "-80px",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 40px" }}
          >
            <div className="circle-container">
              <div className="circle">
                <div className="inner-circle">
                  <div className="text">123</div>
                  <div className="text">STORE</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 40px" }}
          >
            <div className="circle-container">
              <div className="circle">
                <div className="inner-circle">
                  <div className="text">100</div>
                  <div className="text">MENU</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ textAlign: "center", maxWidth: "350px", margin: "0 40px" }}
          >
            <div className="circle-container">
              <div className="circle">
                <div className="inner-circle">
                  <div className="text">200</div>
                  <div className="text">CHEF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default PopularMenu;
