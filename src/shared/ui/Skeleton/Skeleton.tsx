import { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const { className, borderRadius, height = 100, width = 100 } = props;

    const styles: CSSProperties = { width, height, borderRadius };

    return <div style={styles} className={classNames(cls.Skeleton, {}, [className])}></div>;
};
