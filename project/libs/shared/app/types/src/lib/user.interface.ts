import { UserRole } from './user-role.enum';

export interface User {
  id?: string;
  email: string;
  firstname: string;
  avatar?: string;
  role: UserRole;
  dateOfReg: Date;
}
