import mongoose from "mongoose";

const Form = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  device: { type: Number, default: 0 },
  reason: { type: String, required: true },
});

export default mongoose.model("Form", Form);
