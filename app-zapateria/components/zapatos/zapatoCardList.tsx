import { Grid } from "@mui/material";
import { FC } from "react"
import { ZapatoCard } from ".";
import { IZapato } from '../../interfaces/zapato/IZapato';

interface Props {
    zapatos: IZapato[]
}
export const ZapatosCardList:FC<Props> = ({ zapatos }) => {
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