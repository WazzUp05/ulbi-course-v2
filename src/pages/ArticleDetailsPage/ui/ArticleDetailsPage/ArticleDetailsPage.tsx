import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticalDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticalDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className={classNames(cls.articalDetailsPage, {}, [className])}>{t('Article not found')}</div>;
    }

    return (
        <div className={classNames(cls.articalDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
