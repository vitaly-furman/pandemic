import mongoose, { Schema, Document } from 'mongoose';

export interface IRecord extends Document {
  userId: string;
  status: 'ARRIVAL' | 'DEPARTURE';
}

export interface ArrivalsPerDay {
  day: Date;
  userIds: string[];
}

const RecordSchema = new Schema(
  {
    userId: { type: String, required: true },
    status: { type: String, enum: ['ARRIVAL', 'DEPARTURE'], required: true },
  },
  { timestamps: true }
);

const RecordModel = mongoose.model<IRecord & Document>('Record', RecordSchema);

export default RecordModel;
