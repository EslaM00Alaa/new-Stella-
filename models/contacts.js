import mongoose from "mongoose";

const ContactsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// اسم الموديل هيكون "Contact"
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactsSchema);

export default Contact;
