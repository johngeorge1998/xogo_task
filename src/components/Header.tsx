import { AppShell, Image, Text } from "@mantine/core";
import logo from "./images/logo.png";
import Search from "./images/Search.png";

function Header() {
  return (
    <AppShell
      header={{
        height: 88,
      }}
    >
      <AppShell.Header bg="#21243d">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 20px 5px 30px",
            height: "100%",
          }}
        >
          <Image src={logo} alt="Logo" />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "70px",
              marginLeft: "130px",
            }}
          >
            <Text c="#fff" style={{ fontSize: "24px", fontWeight: "100" }}>
              Home
            </Text>
            <Text c="#fff" style={{ fontSize: "24px", fontWeight: "100" }}>
              Product
            </Text>
            <Text c="#fff" style={{ fontSize: "24px", fontWeight: "100" }}>
              Promo
            </Text>
            <Text c="#fff" style={{ fontSize: "24px", fontWeight: "100" }}>
              About
            </Text>
            <Text c="#fff" style={{ fontSize: "24px", fontWeight: "100" }}>
              Contact
            </Text>
          </div>

          <Image
            src={Search}
            alt="Search"
            style={{ marginLeft: "auto", marginRight: "10px" }}
          />
        </div>
      </AppShell.Header>
    </AppShell>
  );
}

export default Header;
