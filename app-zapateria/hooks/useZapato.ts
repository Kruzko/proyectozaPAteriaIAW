import useSWR, { SWRConfiguration } from 'swr';
import { IZapato } from '../interfaces/zapato';

export const useZapato = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IZapato>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        // zapato: data || undefined, 
        zapato: data,

        isLoading: !error && !data,
        isError: error
    }
}

export const useZapatos = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IZapato[]>(`http://89.117.54.151:3000/api/zapatos`, config);
    console.log(data);
    return {
        // zapato: data || undefined, 
        zapatos: data || [],

        isLoading: !error && !data,
        isError: error
    }
}