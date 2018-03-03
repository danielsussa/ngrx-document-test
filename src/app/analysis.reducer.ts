import * as AnalysisActions from './analysis.actions';
import {Analysis} from './analysis.interface';
import {Document} from './document.interface';
import {Field} from './field.interface';

export type Action = AnalysisActions.All;

const rg_field: Field[] = [
  {id: 'first', title: 'Nome', value: null},
  {id: 'last', title: 'Sobrenome', value: null}
]

const cpf_field: Field[] = [
  {id: 'number', title: 'Número CPF', value: null},
]

const documents: Document[] = [
  {id: 'rg', title: 'Registro Geral', fields: rg_field},
  {id: 'cpf', title: 'Comprovante CPF', fields: cpf_field}
]

const defaultState: Analysis =  {
  id: '',
  current_doc: 'rg',
  documents: documents
}


const mergeState = (state, newData) => {
  return Object.assign({}, state, newData);
}

export function analysisReducer(state: Analysis = defaultState, action: Action) {

  switch (action.type) {
    case AnalysisActions.SELECT_DOCUMENT:
      return mergeState(state, {current_doc: action.id});
    case AnalysisActions.FIELD_VALUE:

      const newState = state;
      newState.documents[action.docIndex].fields[action.fieldIndex].value = action.value;

      return mergeState(state, newState);
    case AnalysisActions.NEW_ANALYSIS:
      return state;
  }

}
