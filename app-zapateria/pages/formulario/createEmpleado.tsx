import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link'
import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import { MainLayouts } from '@/layouts';
import { ZapateriaApi } from '@/api';

interface IRespuestaRegister {
    token: string;
    nif: string;
    nombre: string;
    apellido: string;
    telefono: string;
    isActive: boolean;
    roles: String[]
}
type EmpleadoData = {
    nif: string,
    nombre: string,
    apellido: string,
    telefono: string
};
const createEmpleado = () => {
    const router = useRouter();
    //hook
    // const { registerClient } = ZapateriaApi(`/clientes`);

    const { register, handleSubmit, formState: { errors } } = useForm<EmpleadoData>();

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //manejador del evento submit del formulario
    const newEmpleado = async (InputData: EmpleadoData) => {

        console.log(InputData);
        setShowError(false);
        const { nif, nombre, apellido, telefono } = InputData;


        const { hasError, message } = await ZapateriaApi.post(`/empleados`, InputData)
        console.log(message);
        if (hasError) {
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout(() => setShowError(false), 3000);
            return;
        }

        router.replace('/');
        // router.push('/');

    }

    return (
        <MainLayouts>
            <form onSubmit={handleSubmit(newEmpleado)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h1'>Crear Empleado</Typography>
                            <Chip
                                label="No se reconoce usuario/contraseña"
                                color="error"
                                icon={<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('nif', {
                                    required: 'Nif Obligatorio'
                                })}
                                error={!!errors.nif}
                                helperText={errors.nif?.message}
                                label="Nif" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('nombre', {
                                    required: 'Nombre obligatorio',
                                })}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
                                label="Nombre" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('apellido', {
                                    required: 'Apellido requerido',
                                })}
                                error={!!errors.apellido}
                                helperText={errors.apellido?.message}
                                label="Apellido" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('telefono', {
                                    required: 'numero de telefono'
                                })}
                                error={!!errors.telefono}
                                type='string'
                                helperText={errors.telefono?.message}
                                label="Telefono" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit" color='secondary' className='circular-btn' size='large' fullWidth>
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </MainLayouts>
    )
}

export default createEmpleado