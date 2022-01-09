import { NAME_IN, NAME_OUT } from '../actionTypes/auth';

export const nameIn = data => (
    {
        type: NAME_IN,
        payload: data,
    }
);
export const nameOut = () => (
    {
        type: NAME_OUT,
    }
);