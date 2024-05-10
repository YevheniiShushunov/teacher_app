import {userStore} from './user.store';
import {createHook} from 'react-sweet-state';

export const useUserManager = createHook(userStore);