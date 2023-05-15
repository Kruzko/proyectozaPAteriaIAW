import useSWR, { SWRConfiguration } from 'swr';
import { IMaterial } from '../interfaces/material';

export const useMateriales = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IMaterial[]>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        materiales: data || [],
        isLoading: !error && !data,
        isError: error
    }
}