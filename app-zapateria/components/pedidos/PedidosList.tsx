import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IPedido } from '../../interfaces/pedido/IPedido';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ZapateriaApi } from '@/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
interface Props {
    pedidos: IPedido[]
}
export const PedidosList:FC<Props> = ({pedidos}) => {
  
  const colums: GridColDef[] = [
        { field: 'cod', headerName: 'COD', width: 130},
        { field: 'fecha', headerName:'fecha', width: 300, editable:true },
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
                  const { data } = await ZapateriaApi.delete(`/pedido/${cod}`);
                }}
                />
              
              <EditIcon sx={{ color: 'blue'}} 
                onClick={ async (event) => {
                  const cod = params.row.cod
                  const pedido = params.row
                  console.log(cod, pedido)
                  const { data } = await ZapateriaApi.patch(`/pedido/${cod}`, pedido);
                }}
                />
              </>
            ) 
        }
  ];
  const rows = pedidos;
  return (
            <Grid container sx={{ width: '100%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <Link href='/formulario/createPedido'>
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
                    getRowId = {( row: IPedido ) => row.cod}
                  />
               </Grid>
            </Grid>
  )
}