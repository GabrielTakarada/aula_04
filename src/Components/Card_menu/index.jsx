import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "../Button";
import { Link } from "@mui/material";

export default function Menu() {
  return (
    <Card
      sx={{
        maxWidth: 380,
        border: "4px solid black",
        backgroundColor: "rgb(200, 220, 254)",
      }}
    >
      <div
        style={{
          marginLeft: "3%",
          padding: "40px",
        }}
      >
        <Link href="/contato" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Contato"></Button>
          </CardActions>
        </Link>
        <Link href="/loja" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Loja"></Button>
          </CardActions>
        </Link>
        <Link href="/signin" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Git Hub"></Button>
          </CardActions>
        </Link>
        <Link href="/signin" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Sair"></Button>
          </CardActions>
        </Link>
      </div>
    </Card>
  );
}
