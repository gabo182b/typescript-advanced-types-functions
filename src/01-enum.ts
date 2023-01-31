// TypeScript provides both numeric and string-based enums.
enum ROLES {
  id = 1,
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const gabriel: User = {
  username: 'gabo182',
  role: ROLES.ADMIN,
};
