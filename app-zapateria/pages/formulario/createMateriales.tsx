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
    descripcion: string;
    isActive: boolean;
    roles: String[]
}
type MaterialesData = {
    cod: string,
    descripcion: string,
};
const createMateriales = () => {
    const router = useRouter();
    //hook
    // const { registerClient } = ZapateriaApi(`/clientes`);

    const { register, handleSubmit, formState: { errors } } = useForm<MaterialesData>();

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //manejador del evento submit del formulario
    const newMateriales = async (InputData: MaterialesData) => {

        console.log(InputData);
        setShowError(false);
        const { cod, descripcion } = InputData;


        const response = await ZapateriaApi.post(`/materiales`, InputData)
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
            <form onSubmit={handleSubmit(newMateriales)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h1'>Crear Materiales</Typography>
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
                                    required: 'codigo obligatorio',
                                })}
                                error={!!errors.cod}
                                helperText={errors.cod?.message}
                                label="Codigo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register('descripcion', {
                                    required: 'Descripcion requerido',
                                })}
                                error={!!errors.descripcion}
                                helperText={errors.descripcion?.message}
                                label="Descripcion" variant='filled' fullWidth />
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

export default createMateriales