import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IZapato } from "../../interfaces/zapato";
import NextLink  from 'next/link';

interface Props {
    zapato: IZapato;
}
export const ZapatoCard:FC<Props> = ({ zapato }) => {
  return (
    <Grid item  xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/zapatos/${zapato.cod}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ zapato.thumbnailUrl } alt={ zapato.nombre } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{zapato.precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700} fontSize={'30px'}>{zapato.nombre}</Typography>
            <Typography fontWeight={500} fontSize={'25px'}>{zapato.precio} €</Typography>
        </Box>
    </Grid>
  )
}
