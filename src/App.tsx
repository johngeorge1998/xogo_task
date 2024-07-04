import { Grid, Image } from "@mantine/core";
import Header from "./components/Header";
import Home from "./components/Home";
import BgHome from "./components/images/bg.png";
import Shape6 from "./components/images/Shape6.png";
import Shape5 from "./components/images/Shape5.png";
import Shape2 from "./components/images/Shape2.png";
import Shape1 from "./components/images/Shape1.png";
import Shape4 from "./components/images/Shape4.png";
import FoodBigTwo from "./components/images/foodbig.png";

import FullcircleYellow from "./components/images/Shapefullcircle.png";

import ReviewBg from "./components/images/reviewbg.png";

import "./App.css";
import Menu from "./components/Menu";
import OrderOne from "./components/OrderOne";
import { BlueShapeOne } from "./components/images/BlueShapeOne";
import { BlueShapeTwo } from "./components/images/BlueShapeTwo";
import { BlueShapeThree } from "./components/images/BlueShapeThree";
import PopularMenu from "./components/PopularMenu";
import OrderTwo from "./components/OrderTwo";
import Subscribe from "./components/Subscribe";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col span={12} style={{ flex: "0 1 auto" }}>
          <Header />
        </Grid.Col>

        <Grid.Col
          span={12}
          style={{
            height: "87.4vh",
            flex: "1 1 auto",
            backgroundImage: `url(${BgHome})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boxShadow: "0 0 0px rgba(255, 255, 255, 0.7)",
            }}
          >
            <Grid>
              <Grid.Col
                span={4}
                style={{
                  height: "87.4vh",
                  flex: "1 1 auto",
                  backgroundImage: `url(${BgHome})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Home />
              </Grid.Col>
            </Grid>
          </div>
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "#21243d",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "50px", left: "300px" }}>
            <img
              src={Shape5}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", top: "200px", left: "100px" }}>
            <img
              src={Shape2}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "100px", left: "0px" }}>
            <img
              src={Shape1}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", top: "0px", right: "0px" }}>
            <img
              src={Shape6}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", top: "330px", right: "30px" }}>
            <img
              src={Shape4}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "50px", right: "5px" }}>
            <img
              src={Shape2}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <Menu />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "#ffd17e",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "100px",
              right: "600px",
              alignContent: "center",
            }}
          >
            <BlueShapeTwo />
          </div>

          <div style={{ position: "absolute", top: "100px", left: "150px" }}>
            <BlueShapeThree />
          </div>

          <div style={{ position: "absolute", top: "150px", left: "200px" }}>
            <Image src={FoodBigTwo} />
          </div>

          <div style={{ position: "absolute", bottom: "50px", left: "50px" }}>
            <BlueShapeOne />
          </div>

          <div style={{ position: "absolute", top: "50px", right: "50px" }}>
            <BlueShapeOne />{" "}
          </div>

          <div style={{ position: "absolute", top: "330px", right: "30px" }}>
            <img
              src={Shape4}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "50px", right: "-25px" }}>
            <BlueShapeThree />{" "}
          </div>

          <OrderOne />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "#21243d",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "50px", left: "100px" }}>
            <img
              src={Shape5}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", top: "200px", left: "100px" }}>
            <img
              src={Shape2}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "-70px", left: "150px" }}>
            <img
              src={FullcircleYellow}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", top: "50px", right: "80px" }}>
            <img
              src={FullcircleYellow}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "50px", right: "50px" }}>
            <img
              src={Shape2}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "20px", right: "450px" }}>
            <img
              src={Shape5}
              alt="Logo"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>

          <PopularMenu />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "#ffd17e",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "100px",
              alignContent: "center",
            }}
          >
            <BlueShapeTwo />
          </div>

          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "600px",
              transform: "rotate(90deg)",
            }}
          >
            <BlueShapeOne />
          </div>

          <div style={{ position: "absolute", top: "100px", right: "150px" }}>
            <BlueShapeThree />
          </div>

          <div style={{ position: "absolute", top: "150px", right: "200px" }}>
            <Image src={FoodBigTwo} />
          </div>

          <div style={{ position: "absolute", bottom: "50px", left: "500px" }}>
            <BlueShapeThree />
          </div>

          <div style={{ position: "absolute", top: "330px", right: "30px" }}>
            <img
              src={Shape4}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "50px", right: "50px" }}>
            <BlueShapeOne />
          </div>

          <OrderTwo />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.7), rgba(10, 15, 30, 0.7)), url(${ReviewBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",

              zIndex: -1,
              opacity: 1,
            }}
          />
          <Review />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "#ffd17e",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "100px",
              right: "300px",
              alignContent: "center",
            }}
          >
            <BlueShapeTwo />
          </div>

          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "100px",
              transform: "rotate(90deg)",
            }}
          >
            <BlueShapeOne />
          </div>

          <div style={{ position: "absolute", top: "30px", right: "-50px" }}>
            <BlueShapeThree />
          </div>

          <div style={{ position: "absolute", bottom: "50px", left: "650px" }}>
            <BlueShapeThree />
          </div>

          <div style={{ position: "absolute", top: "330px", right: "30px" }}>
            <img
              src={Shape4}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div style={{ position: "absolute", bottom: "90px", left: "100px" }}>
            <BlueShapeTwo />
          </div>

          <div style={{ position: "absolute", bottom: "50px", right: "50px" }}>
            <BlueShapeOne />
          </div>

          <Subscribe />
        </Grid.Col>
      </Grid>

      <Grid
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Grid.Col
          span={12}
          style={{
            height: "100vh",
            flex: "1 1 auto",
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "20px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <Footer />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default App;
