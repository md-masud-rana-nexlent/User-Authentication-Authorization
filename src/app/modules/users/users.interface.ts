//eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  bio: string;
  role: 'user' | 'admin' | 'superAdmin';
  createdAt: string;
  updatedAt: string;
}
