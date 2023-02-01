// const myFunction = (...args) => console.log(args); => In JS it will return an array with all the arguments we passed it
import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'Pipo',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

export const checkRoleV3 = (...roles: string[]) => {
  // the '...' receive the arguments as an array 'rest params'
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const result = checkAdminRole();
const result2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
const result3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
const result4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);

console.log(result, result2, result3, result4);
