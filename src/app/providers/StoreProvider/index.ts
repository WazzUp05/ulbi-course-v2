import { createReduxStore, type AppDispatch } from './config/store';
import { type StateSchema, type ReduxStoreWitchMenager, type ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    type AppDispatch,
    type StateSchema,
    type ReduxStoreWitchMenager,
    type ThunkConfig,
};
