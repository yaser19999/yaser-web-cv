import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  provider: string;
  passwordResetToken: string;
  passwordResetTokenExpiry: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required(this) {
      return this.provider === "local";
    },
  },
  email: {
    type: String,
    required(this) {
      return this.provider === "local";
    },
  },

  password: {
    type: String,
    select:false,
    required(this) {
      return this.provider === "local";
    },
  },
  role: { type: String, default: "user" },
  provider: { type: String, default: "local" },
  passwordResetToken: { type: String ,default: ""},
  passwordResetTokenExpiry: {type: Date , default:  1000-10-10},
});


export const User = mongoose.models.User || mongoose.model("User",UserSchema)


