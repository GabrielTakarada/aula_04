import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "../Button";
import { Link } from "@mui/material";

export default function Lojas() {
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
        <Link href="/atari" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Atari"></Button>
          </CardActions>
        </Link>
        <Link href="/PlayStation5" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="PlayStation 5"></Button>
          </CardActions>
        </Link>
        <Link href="/Nintendo" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Super Nintendo"></Button>
          </CardActions>
        </Link>
        <Link href="/Xbox" underline="none">
          <CardActions style={{ marginBottom: "10px" }}>
            <Button Text="Xbox Series S"></Button>
          </CardActions>
        </Link>
      </div>
    </Card>
  );
}
