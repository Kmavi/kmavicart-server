import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: {},
  email: {},
  password: {},
});

export default mongoose.model<User>("User", UserSchema);
