import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization')} />
            {error && <Text theme={TextTheme.ERROR} text={t('You entered an incorrect username or password')} />}
            <Input
                className={cls.input}
                autofocus
                placeholder={t('Enter username')}
                type="text"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                placeholder={t('Enter password')}
                type="text"
                onChange={onChangePassword}
                value={password}
            />

            <Button theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading} className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
});
