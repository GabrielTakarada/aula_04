import Navbar from "../../Components/Navbar";
import Rodape from "../../Components/Rodape";
import Box from "../../Components/Card_xbox/play";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Xbox = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="content-container" style={{ marginBottom: "4%" }}>
          <Container maxWidth="md" style={{ marginTop: "40px" }}>
            <Grid container spacing={12} justifyContent="center">
              <Grid item xs={12}>
                <Box />
              </Grid>
            </Grid>
          </Container>
        </div>
        <Rodape />
      </>
    </div>
  );
};

export default Xbox;
