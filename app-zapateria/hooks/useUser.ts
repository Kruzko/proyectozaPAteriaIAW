import useSWR, { SWRConfiguration } from 'swr';
import { IUser } from '../interfaces/Users';

export const useUser = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IUser[]>(`http://89.117.54.151:3000/api${url}`, config);
    console.log(data);
    return {
        user: data || [],
        isLoading: !error && !data,
        isError: error
    }
}