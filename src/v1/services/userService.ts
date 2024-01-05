import UserModel from "../models/userModel";

export class UserService {
  async getUsers(): Promise<any> {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      throw new Error(``);
    }
  }
}
