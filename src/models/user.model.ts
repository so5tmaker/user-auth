import { Column, Model, Table } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  password: string;
}
