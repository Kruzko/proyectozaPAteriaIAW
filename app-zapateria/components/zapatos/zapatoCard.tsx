import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import { IZapato } from "../../interfaces/zapato";
import NextLink  from 'next/link';

interface Props {
    zapato: IZapato;
}
export const zapatoCard:FC<Props> = ({ zapato }) => {
  return (
    <Grid item  xs= {6} sm={3}>
        <Card sx={{ width: '90%' }}>
          <Link href={`/zapato/${zapato.cod}`}  passHref component={NextLink} prefetch={false}>
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
            <Typography fontWeight={700}>{zapato.nombre}</Typography>
            <Typography fontWeight={500}>{zapato.precio}</Typography>
        </Box>
    </Grid>
  )
}
