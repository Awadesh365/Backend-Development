import mongoose from "mongoose"

const medicaRecordSchema = new mongoose.Schema({}, { timestamps: true })

export const MedicalRecord = mongoose.model("MedicalRecord", medicaRecordSchema)