import Navbar from "../../Components/Navbar";
import Rodape from "../../Components/Rodape";
import Menu from "../../Components/Card_menu";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Main = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="content-container" style={{ marginBottom: "4%" }}>
          <Container maxWhidth="false">
            <Grid container spacing={12} marginTop="-28px" marginLeft="25%">
              <Grid item xs={12}>
                <Menu />
              </Grid>
            </Grid>
          </Container>
        </div>
        <Rodape />
      </>
    </div>
  );
};

export default Main;
