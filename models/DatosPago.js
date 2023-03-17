import mongoose from "mongoose";

const datosPagoSchema = mongoose.Schema(
  {
    cedula: {
      type: String,
      trim: true,
      required: true,
    },
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    proyecto: {
        type: String,
        trim: true,
        required: true,
      },
    titular: {
      type: String,
      trim: true,
      required: true,
    },
    incentivo: {
        type: String,
        trim: true,
        required: true,
    },
   
    
  },

);

const Pagos= mongoose.model("Pagos", datosPagoSchema);
export default Pagos;
