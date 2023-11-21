import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import atari from "../../Assets/atari.webp";

export default function Atari() {
  useEffect(() => {
    // Inicialize o VanillaTilt no elemento do cartão
    VanillaTilt.init(cardRef.current, {
      max: -7,
      speed: 800,
      glare: true,
      "max-glare": 0.4,
    });
  }, []);

  const cardRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 820,
        height: "455px",
        alignItems: "center",
        justifyContent: "center",
        border: "solid black 2px",
        boxShadow: "4px 4px 10px 6px rgb(130,130,130)",
        backgroundColor: "rgb(250,250,250)",
      }}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea>
        <img
          src={atari}
          alt="atari"
          style={{
            maxWidth: "380px",
            alignItems: "center",
            marginLeft: "23%",
            marginTop: "8px",
          }}
        ></img>
        <br></br>
        <br></br>
        <Divider> Flashback X </Divider>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            ATARI
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            R$ 550,00
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            À vista no PIX ou até 10X de R$ 60,00 no cartão.
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="body2" color="text.secondary">
            Com um preço em conta estamos anunciando o famoso videogame Atari
            que já marcou a infância de muitas pessoas com seus jogos e visual
            clássico, aproveite este incrível preço e reviva suas memórias de
            infância.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
