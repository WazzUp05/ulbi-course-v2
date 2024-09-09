import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { type ArticleImageBlock } from '../../types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleDetailsBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleDetailsBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleDetailsBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} className={cls.title} />}
        </div>
    );
});
