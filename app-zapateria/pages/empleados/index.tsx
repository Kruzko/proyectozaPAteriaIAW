import React from 'react'
import { MainLayouts } from '../../layouts'
import { EmpleadosList } from '@/components/empleados'
import { useEmpleados } from '@/hooks/useEmpleados';
import { Mundo } from '../../components';

const EmpleadosIndex = () => {

  const { empleados, isLoading } = useEmpleados ('/empleados');
  console.log("l=", isLoading, "c=", empleados);

  return (
    <MainLayouts>
        <h2>Empleados</h2>
        <EmpleadosList empleados={empleados} />
        {
          (isLoading)
          ? <EmpleadosList empleados = {empleados} />
          : ''
        }
    </MainLayouts>
    
  )
}


export default EmpleadosIndex