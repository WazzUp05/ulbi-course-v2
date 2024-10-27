import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const disabled = useAppDispatch();

    const onEdit = useCallback(() => {
        disabled(profileActions.setReadonly(false));
    }, [disabled]);

    const onCancelEdit = useCallback(() => {
        disabled(profileActions.cancelEdit());
    }, [disabled]);

    const onSave = useCallback(() => {
        disabled(updateProfileData());
    }, [disabled]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit} className={cls.editBtn}>
                            {t('Edit')}
                        </Button>
                    ) : (
                        <div className={cls.btns}>
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                {t('Cancel')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Save')}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
