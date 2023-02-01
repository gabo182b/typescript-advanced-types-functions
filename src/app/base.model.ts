// the readonly keyword makes a property as read-only in the class, type or interface.

export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
