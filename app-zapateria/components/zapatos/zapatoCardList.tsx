import { Grid } from "@mui/material";
import { FC } from "react"
import { IZapato } from '../../interfaces/zapato/IZapato';
import ZapatoCard from "./ZapatoCard";

interface Props {
    zapatos: IZapato[]
}

 const ZapatosCardList:FC<Props> = ({ zapatos }) => {
  return (
    <Grid container spacing={4}>
      {
        zapatos.map( (zapato ) => (
          <ZapatoCard 
            zapato = { zapato }
            key = { zapato.cod }
          />
        ))
      }

    </Grid>
  )
}
export default ZapatosCardList