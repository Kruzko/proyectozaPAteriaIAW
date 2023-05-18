import React from 'react'
import { MainLayouts } from '../../layouts'
import { ClientesList } from '@/components/clientes'
import { useClientes } from '@/hooks/useClientes';
import { Mundo } from '../../components';

const ClientesIndex = () => {
  
  const { clientes, isLoading } = useClientes ('/clientes');
  console.log("l=", isLoading, "c=", clientes);

  return (
    <MainLayouts>
        <h2>Clientes</h2>
        <ClientesList clientes={clientes} />
        {
          (isLoading)
          ? <ClientesList clientes = {clientes} />
          : ''
        }
    </MainLayouts>
    
  )
}


export default ClientesIndex