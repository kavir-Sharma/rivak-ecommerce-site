// types.ts

export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface User extends FormData {
  signupTime: string;  
}
