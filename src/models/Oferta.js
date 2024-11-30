import mongoose from "mongoose";

const OfertaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false
    },
    ofertaID: {
      type: String,
      required: false,
      unique: true,
      trim: true 
    },
    company: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    PR: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    deadline_application: {
      type: Date,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Oferta", OfertaSchema);
