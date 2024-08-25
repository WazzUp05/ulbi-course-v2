import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileErrors,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const reducers: ReducerList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const vaidateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Server error when saving'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('First and last name are required'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Uncorrect age'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Uncorrect country'),
        [ValidateProfileErrors.NO_DATA]: t('No data'),
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ last: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: number) => {
            const age = value && !isNaN(Number(value)) ? Number(value) : undefined;
            dispatch(profileActions.updateProfile({ age }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {vaidateErrors?.length &&
                    vaidateErrors.map((err) => (
                        <Text key={err} text={validateErrorsTranslates[err]} theme={TextTheme.ERROR} />
                    ))}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
