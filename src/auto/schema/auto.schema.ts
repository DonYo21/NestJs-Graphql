import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AutoDocument = Auto & Document;

@Schema()
export class Auto {
  @Prop()
  modelo: string;

  @Prop()
  marca: string;

  @Prop()
  tipo: string;

  @Prop()
  precio: number;
}

export const AutoSchema = SchemaFactory.createForClass(Auto);