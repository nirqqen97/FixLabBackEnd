import mongoose from "mongoose";

const Form = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  device: { type: String, default: 0 },
  reason: { type: String, required: true },
});

export default mongoose.model("Form", Form);
