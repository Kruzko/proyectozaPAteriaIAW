import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IMaterial } from '../../interfaces/material/IMaterial';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ZapateriaApi } from '@/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
interface Props {
    materiales: IMaterial[]
}
export const MaterialesList:FC<Props> = ({materiales}) => {
  
  const colums: GridColDef[] = [
        { field: 'cod', headerName: 'COD', width: 130},
        { field: 'descripcion', headerName: 'descripcion', width: 130, editable:true},
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
                  const { data } = await ZapateriaApi.delete(`/materiales/${cod}`);
                }}
                />
              
              <EditIcon sx={{ color: 'blue'}} 
                onClick={ async (event) => {
                  const cod = params.row.cod
                  const materiales = params.row
                  console.log(cod, materiales)
                  const { data } = await ZapateriaApi.patch(`/materiales/${cod}`, materiales);
                }}
                />
              </>
            ) 
        }
  ];
  const rows = materiales;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
              <Link href='/formulario/createMateriales'>
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }}/>
              </Link>
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
                    // pageSize= {10}
                    // // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    // rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: IMaterial ) => row.cod}
                  />
               </Grid>
            </Grid>
  )
}