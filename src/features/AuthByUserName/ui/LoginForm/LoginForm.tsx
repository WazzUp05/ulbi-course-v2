import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} autofocus placeholder={t('Enter username')} type="text" />
            <Input className={cls.input} placeholder={t('Enter password')} type="text" />

            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
