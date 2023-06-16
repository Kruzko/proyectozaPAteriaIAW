import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IZapato } from '../../interfaces/zapato/IZapato';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ZapateriaApi } from '@/api';

interface Props {
    zapatos: IZapato[]
}
export const ZapatosList:FC<Props> = ({zapatos}) => {
  
  const colums: GridColDef[] = [
        { field: 'nombre', headerName: 'Nombre', width: 130, editable:true},
        { field: 'cod', headerName: 'COD', width: 130},
        { field: 'tipo', headerName:'Tipo', width: 300, editable:true },
        { field: 'precio', headerName:'Precio', width: 300, editable:true },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: (params) => (
              <>
                <DeleteIcon sx={{ color: 'red'}} 
                onClick={ async (event) => {
                  const cod = params.row.cod
                  console.log(cod)
                  const { data } = await ZapateriaApi.delete(`/zapatos/${cod}`);
                }}
                />

                <EditIcon sx={{ color: 'blue'}} 
                onClick={ async (event) => {
                  const cod = params.row.cod
                  const zapato = params.row
                  console.log(cod, zapato)
                  const { data } = await ZapateriaApi.patch(`/zapatos/${cod}`, zapato);
                }}
                />
              </>
            ) 
        }
  ];
  const rows = zapatos;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
              <a href='/formulario/createZapatos'>
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }}/>
              </a>
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '90%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IZapato ) => row.cod}
                  />
               </Grid>
            </Grid>
  )
}