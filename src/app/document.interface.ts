import {Field} from './field.interface';

export interface Document {
  key: string;
  title: string;
  fields: Field[];
}
