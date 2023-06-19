import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { ICliente } from '../../interfaces/clientes/IClientes';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ZapateriaApi } from '@/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

interface Props {
    clientes: ICliente[]
}
export const ClientesList:FC<Props> = ({clientes}) => {
  

  const colums: GridColDef[] = [
        { field: 'nif', headerName: 'nif', width: 130},
        { field: 'nombre', headerName: 'nombre', width: 130, editable:true},
        { field: 'apellido', headerName:'apellido', width: 300, editable:true },
        { field: 'telefono', headerName:'telefono', width: 300, editable:true },
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
                  const { data } = await ZapateriaApi.delete(`/clientes/${nif}`);
                }}
                />
              
              <EditIcon sx={{ color: 'blue'}} 
                onClick={ async (event) => {
                  const nif = params.row.nif
                  const cliente = params.row
                  console.log(nif, cliente)
                  const { data } = await ZapateriaApi.patch(`/clientes/${nif}`, cliente);
                }}
                />
              </>
            ) 
        }
  ];
  const rows = clientes;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <Link href='/formulario/createCliente'>
                  <AddBoxIcon sx={{  color: 'green', fontSize:40 }}
                  // onClick={ async (event) => {
                  //   const nif = params.row.nif
                  //   console.log(nif, clientes)
                  //   const { data } = await ZapateriaApi.post(`/clientes/${nif}`, clientes);
                  // }} 
                  />
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
                    //pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    //rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: ICliente ) => row.nif}
                  />
               </Grid>
            </Grid>
  )
}