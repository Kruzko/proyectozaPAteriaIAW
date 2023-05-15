import React from 'react'
import { MainLayouts } from '../../layouts'
import { PedidosList } from '@/components/pedidos'
import { usePedidos } from '@/hooks/usePedidos';
import { Mundo } from '../../components';

const PedidosIndex = () => {

  const { pedidos, isLoading } = usePedidos ('/pedido');
  console.log("l=", isLoading, "c=", pedidos);

  return (
    <MainLayouts>
        <h2>Pedidos</h2>
        <PedidosList pedidos={pedidos} />
        {
          (isLoading)
          ? <PedidosList pedidos = {pedidos} />
          : <Mundo />
        }
    </MainLayouts>
    
  )
}


export default PedidosIndex