import { ObjectId } from "mongoose";

export class UserDto {
  email: string;
  id: ObjectId;
  isActivated: boolean;

  constructor(model) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
  }
}