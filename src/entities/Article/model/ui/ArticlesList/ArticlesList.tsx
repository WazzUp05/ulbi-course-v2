import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { ArticleView, type Article } from '../../types/article';
import { ArticlesListItem } from '../ArticleListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticleListItem/ArticlesListItemSkeleton';

interface ArticlesListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticlesListItemSkeleton key={index} view={view} />);
};

export const ArticlesList = memo((props: ArticlesListProps) => {
    const { className, articles, isLoading, view = ArticleView.SMALL } = props;

    if (isLoading) {
        return <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
    }

    const renderArticle = (article: Article) => {
        return <ArticlesListItem article={article} view={view} key={article.id} />;
    };

    return (
        <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
