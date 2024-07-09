import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t('Login')}
            </Button>
            {/* eslint-disable-next-line */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                asda
            </Modal>
        </div>
    );
};
