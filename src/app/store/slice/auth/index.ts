import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
  isLogged: boolean;
}

interface AuthState {
  users: User[];
  user: User[];
}
const testUser: User = {
  email: "test123",
  password: "123123",
  isLogged: false,
}

const storedUsersString = localStorage.getItem("users");
const storedUsers: User[] = storedUsersString ? JSON.parse(storedUsersString) : [testUser];

// localStorage.setItem("user", JSON.stringify(testUser))
const storedUserString = localStorage.getItem("user");
const storedUser: User[] = storedUserString ? JSON.parse(storedUserString) : [];


const initialState: AuthState = {
  users: storedUsers,
  user: storedUser
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      return {
        ...state,
        user: state.users.map(user => 
          user.email === action.payload.email && user.password === action.payload.password
            ? { ...user, isLogged: true }
            : { ...user, isLogged: false }
        ),
        
      };
    },
    registration(state, action) {
      return {
        ...state,
        users: [
          ...state.users, 
          {
            email: action.payload.email, 
            password: action.payload.password,
            isLogged: false
          }
        ],
        user: state.users.map(user => 
          user.email === action.payload.email && user.password === action.payload.password
            ? { ...user, isLogged: true }
            : { ...user, isLogged: false }
        ),
      };
    },
  },
});

export const { login, registration } = authSlice.actions;

export default authSlice.reducer;
