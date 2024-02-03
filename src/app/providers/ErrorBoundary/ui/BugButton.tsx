import { t } from 'i18next';
import { useEffect, useState } from 'react';

// Компонент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <button onClick={onThrow}>{t('throw error')}</button>;
};
