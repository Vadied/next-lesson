import { Schema, models, model } from 'mongoose';

const schema = new Schema(
  {
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
      required: true
    },
  },
  { timestamps: true }
);

export const Customers = models.Customers || model('Customers', schema);
