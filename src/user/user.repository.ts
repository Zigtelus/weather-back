import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";
import { TokenService } from "src/service/token-service";
import { User, UserDocument } from "./schemas/user.schema";




@Injectable()
export class UserRepository  {

  constructor (@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne (usersFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(usersFilterQuery);
  }

  async find (usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery);
  }

  async create (user: User): Promise<User> {
    const newUser = new this.userModel(user);

    try {
      return newUser.save();
    } catch (e) {
      console.log(e)
    }
  };

  async findOneAndUpdate (usersFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate(usersFilterQuery, user, {new: true});
  };

  async remove (usersFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOneAndRemove(usersFilterQuery);
  }

  async removeId (usersFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOneAndRemove(usersFilterQuery);
  }


};