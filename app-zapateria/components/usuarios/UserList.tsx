import { Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { IUser } from '../../interfaces/Users/IUser';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
interface Props {
    usuarios: IUser[]
}
export const UserList:FC<Props> = ({usuarios}) => {
  
  const colums: GridColDef[] = [
        { field: 'usuario', headerName: 'usuario', width: 130},
        { field: 'cod', headerName: 'COD', width: 130},
        { field: 'email', headerName:'email', width: 300 },
        { field: 'opciones',
          headerName: 'Acciones',
          description: 'Muestra información si la orden está pagada o no',
          width: 200,
          renderCell: () => (
              <>
                <a onClick={deleteOne}>
                  <ModeEditOutlineTwoToneIcon sx={{ color: 'red'}} />
                </a>
                <a onClick={update}>
                  <ClearIcon  sx={{ color: 'blue'}} />
                </a>
              </>
            ) 
        }
  ];
  const rows = usuarios;
  return (
            <Grid container sx={{ width: '70%', display: 'flex',justifyContent: 'flex-end'}}>
              <Box >
                <AddBoxIcon sx={{  color: 'green', fontSize:40 }} />
              </Box>
               
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
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
                    getRowId = {( row: IUser ) => row.cod}
                  />
               </Grid>
            </Grid>
  )
}