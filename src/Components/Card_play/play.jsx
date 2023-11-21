import * as React from "react";
import Card from "@mui/material/Card";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import play from "../../Assets/play.png";

export default function Play() {
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
          src={play}
          alt="atari"
          style={{
            maxWidth: "244px",
            alignItems: "center",
            marginLeft: "32%",
          }}
        ></img>
        <Divider>Versão FAT</Divider>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            PlayStation 5
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            R$ 3.600,00
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            À vista no PIX ou até 10X de R$ 360,00 no cartão.
          </Typography>

          <br></br>

          <br></br>
          <Typography variant="body2" color="text.secondary">
            Com um preço em conta estamos anunciando o mais desejado videogame
            da nova geração que é o Ps5 com seu lindo desing nas cores preto e
            branco em sua versão original, vindo junatmente com um controle e um
            jogo. Além de ter a oportunidade de jogar os melhores jogos da
            atualidade.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
