import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 80, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

    return <img className={classNames(cls.Avatar, {}, [className])} src={src} style={styles} alt={alt} />;
};
