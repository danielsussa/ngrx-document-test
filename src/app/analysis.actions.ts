import {Action} from '@ngrx/store';
import {Field} from './field.interface';


// ///////////GET NEW ANALYSIS///////////////////////

export const NEW_ANALYSIS = '[Analysis] Get New';

export class GetAnalysis implements Action {
  readonly type = NEW_ANALYSIS;

  constructor() {}
}

// ///////////SELECT DOCUMENT///////////////////////

export const SELECT_DOCUMENT = '[Document] Select';

export class SelectDoc implements Action {
  readonly type = SELECT_DOCUMENT;

  constructor(public id: string) {}
}

// ///////////CHANGE FIELD VALUE///////////////////////

export const FIELD_VALUE = '[Field] change value';

export class ChangeFieldValue implements Action {
  readonly type = FIELD_VALUE;

  constructor(
    public value: any,
    public docIndex: number,
    public fieldIndex: number
  ) {}
}


export type All = SelectDoc
  | GetAnalysis
  | ChangeFieldValue;
