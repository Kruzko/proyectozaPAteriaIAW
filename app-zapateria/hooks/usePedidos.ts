import useSWR, { SWRConfiguration } from 'swr';
import { IPedido } from '../interfaces/pedido';

export const usePedidos = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IPedido[]>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        pedidos: data || [],
        isLoading: !error && !data,
        isError: error
    }
}