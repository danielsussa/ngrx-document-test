import {Field} from './field.interface';

export interface Document {
  id: string;
  title: string;
  fields: Field[];
}
