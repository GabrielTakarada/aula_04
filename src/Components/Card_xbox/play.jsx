import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import Xbox from "../../Assets/Xbox.png";

export default function Box() {
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
        height: "460px",
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
          src={Xbox}
          alt="atari"
          style={{
            maxWidth: "185px",
            alignItems: "center",
            marginLeft: "32%",
            marginTop: "10px",
            marginBottom: "5px",
          }}
        ></img>
        <Divider> </Divider>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Xbox series s
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            R$ 2.399,99
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            À vista no PIX ou até 10X de R$ 240,00 no cartão.
          </Typography>

          <br></br>

          <br></br>
          <Typography variant="body2" color="text.secondary">
            Com um preço em conta estamos anunciando o video game da nova
            geração Xbox series s na cor branca em um estilo moderno e compacto
            tendo diversas vantagens como o seu tamanho, o serviço de game pass
            que este proporciona, além de ser o video game muito potente.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
