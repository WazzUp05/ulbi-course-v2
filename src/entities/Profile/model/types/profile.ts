import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';

export interface Profile {
    id?: string;
    first?: string;
    last?: string;
    age?: number;
    city?: string;
    currency?: Currency;
    country?: Country;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
