// TypeScript provides both numeric and string-based enums.
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const gabriel: User = {
  username: 'gabo182',
  role: ROLES.ADMIN,
};
