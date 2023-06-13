import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IEmpleado } from '../../interfaces/empleados/IEmpleados';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ZapateriaApi } from '@/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface Props {
    empleados: IEmpleado[]
}
export const EmpleadosList:FC<Props> = ({empleados}) => {
  
  const colums: GridColDef[] = [
        { field: 'nif', headerName: 'nif', width: 130},
        { field: 'nombre', headerName: 'nombre', width: 130},
        { field: 'apellido', headerName:'apellido', width: 300 },
        { field: 'telefono', headerName:'telefono', width: 300 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: (params) => (
              <>
                <DeleteIcon sx={{ color: 'red'}} 
                onClick={ async (event) => {
                  const nif = params.row.nif
                  console.log(nif)
                  const { data } = await ZapateriaApi.delete(`/empleados/${nif}`);
                }}
                />
              
              <EditIcon sx={{ color: 'blue'}} 
                onClick={ async (event) => {
                  const nif = params.row.nif
                  const empleados = params.row
                  console.log(nif, empleados)
                  const { data } = await ZapateriaApi.patch(`/empleados/${nif}`, empleados);
                }}
                />
              </>
            ) 
        }
  ];
  const rows = empleados;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
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
                    getRowId = {( row: IEmpleado ) => row.nif}
                  />
               </Grid>
            </Grid>
  )
}