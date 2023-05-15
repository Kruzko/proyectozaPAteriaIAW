import useSWR, { SWRConfiguration } from 'swr';
import { IEmpleado } from '../interfaces/empleados';

export const useEmpleados = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IEmpleado[]>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        empleados: data || [],
        isLoading: !error && !data,
        isError: error
    }
}