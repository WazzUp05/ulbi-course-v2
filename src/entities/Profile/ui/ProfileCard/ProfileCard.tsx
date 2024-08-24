import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
// import { getProfileIsLoading } from 'entities/Profile/model/selectors/getLoginIsLoading/getProfileIsLoading';
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData) as { first?: string; last?: string };
    // const isLoading = useSelector(getProfileIsLoading);
    // const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('First name')} className={cls.input} />
                <Input value={data?.last} placeholder={t('Last name')} className={cls.input} />
            </div>
        </div>
    );
};
