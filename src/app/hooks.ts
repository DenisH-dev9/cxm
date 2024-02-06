import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface User {
  email: string;
  password: string;
  isLogged: boolean;
}
interface AuthState {
  users: User[];
}

export const useAuth = () => {
  const { users } = useAppSelector((state) => state.auth) as AuthState;
  const isLogged = users.some(user => user.isLogged);
  return isLogged;
}
