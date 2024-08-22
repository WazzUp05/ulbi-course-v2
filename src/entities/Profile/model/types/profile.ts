import { type Country, type Currency } from 'shared/const/common';

export interface Profile {
    id: string;
    first: string;
    lastname: string;
    age: number;
    city: string;
    avatar: string;
    currency: Currency;
    username: string;
    country: Country;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
