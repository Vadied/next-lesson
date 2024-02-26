import { Schema, models, model } from 'mongoose';

const SALT = 43;

const schema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    password: {
      type: String,
      hide: true
    },
    token: { type: String, unique: true, hide: true },
    image: String
  },
  { timestamps: true }
);

schema.methods.getToken = function () {
  return this.token;
};


export const User = models.User || model('User', schema);
