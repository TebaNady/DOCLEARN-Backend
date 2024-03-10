import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: [3, 'Full name must contain at least 3 characters'],
      validate: {
        validator: function (v) {
          const parts = v.split(' ');
          return parts.length === 3;
        },
        message: props => `${props.value} is not a valid full name. A full name must consist of exactly three parts.`
      }
    },
    id: {
      unique: true,
      type: String,
      required: true,
      minLength: [14, "ID must be 14 characters"],
      maxLength: [14, "ID must be 14 characters"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must contain at least 8 characters"]
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    year: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isPay: { type: Boolean, default: false },
    university: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
