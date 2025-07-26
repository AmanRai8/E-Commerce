import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Name is required"],
      type: String,
    },
    email: {
      required: [true, "Email is required"],
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      required: [true, "Password is required"],
      type: String,
      minlength: [6, "Password must be at least 6 characters long"],
    },
<<<<<<< HEAD
    cartItems: [
=======
    cartItem: [
>>>>>>> 8015b03c5573b656d41c39d027a5aa8b4f8bfa74
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

//hashing password before saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// comparing the password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
