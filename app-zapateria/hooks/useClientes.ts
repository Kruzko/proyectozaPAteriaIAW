import useSWR, { SWRConfiguration } from 'swr';
import { ICliente } from '../interfaces/clientes';

export const useClientes = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<ICliente[]>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        clientes: data || [],
        isLoading: !error && !data,
        isError: error
    }
}