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
    cod: string;
    tipo: string;
    nombre: string;
    precio: string;
    thumbnailUrl: string;
    isActive: boolean;
    roles: String[]
}
type ZapatoData = {
    cod: string;
    tipo: string;
    nombre: string;
    precio: string;
    thumbnailUrl: string;
};
const createZapato = () => {
    const router = useRouter();
    //hook
    // const { registerClient } = ZapateriaApi(`/clientes`);

    const { register, handleSubmit, formState: { errors } } = useForm<ZapatoData>();

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //manejador del evento submit del formulario
    const newZapato = async (InputData: ZapatoData) => {

        console.log(InputData);
        setShowError(false);
        const { cod, tipo, nombre, precio, thumbnailUrl } = InputData;


        const response = await ZapateriaApi.post(`/zapatos`, InputData)
        const hasError = response.data.hasError;
        const message = response.data.message;
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
            <form onSubmit={handleSubmit(newZapato)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h1'>Crear Zapato</Typography>
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
                                {...register('cod', {
                                    required: 'Codigo Obligatorio'
                                })}
                                error={!!errors.cod}
                                helperText={errors.cod?.message}
                                label="Codigo" variant='filled' fullWidth />
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
                                {...register('tipo', {
                                    required: 'tipo de zapato requerido',
                                })}
                                error={!!errors.tipo}
                                helperText={errors.tipo?.message}
                                label="Tipo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('precio', {
                                    required: 'precio del zapato'
                                })}
                                error={!!errors.precio}
                                type='string'
                                helperText={errors.precio?.message}
                                label="Precio" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('thumbnailUrl', {
                                    required: 'thumbnailUrl del zapato'
                                })}
                                error={!!errors.thumbnailUrl}
                                type='string'
                                helperText={errors.thumbnailUrl?.message}
                                label="thumbnailUrl" variant='filled' fullWidth />
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

export default createZapato