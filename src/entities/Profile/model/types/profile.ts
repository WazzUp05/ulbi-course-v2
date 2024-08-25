import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

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
    validateErrors: ValidateProfileErrors[] | undefined;
}
