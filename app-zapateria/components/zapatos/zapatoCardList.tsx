import { Grid } from "@mui/material";
import { FC } from "react"
import { zapatoCard } from ".";
import { IZapato } from '../../interfaces/zapato/IZapato';

interface Props {
    zapatos: IZapato[]
}
export const zapatosCardList:FC<Props> = ({ zapatos }) => {
  return (
    <Grid container spacing={4}>
      {
        zapatos.map( (zapato ) => (
          <zapatoCard 
            zapato = { zapato }
            key = { zapato.cod }
          />
        ))
      }

    </Grid>
  )
}