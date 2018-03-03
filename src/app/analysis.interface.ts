import {Field} from './field.interface';
import {Document} from './document.interface';

export interface Analysis {
  id: string;
  current_doc: string;
  documents: Document[];
}
