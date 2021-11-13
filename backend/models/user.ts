import { Schema, model, Document } from 'mongoose';

export interface UserType {
  // id: number,
  name: string,
}

const userSchema = new Schema({
  name: { type: String, required: true },
});

export const UserModel = model<UserType>('User', userSchema);