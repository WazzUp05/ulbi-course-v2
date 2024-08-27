import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticalsPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticalsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(cls.articalsPage, {}, [className])}>ArticlesPage</div>;
};

export default memo(ArticlesPage);
