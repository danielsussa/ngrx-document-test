import * as AnalysisActions from './analysis.actions';
import {Analysis} from './analysis.interface';
import {Document} from './document.interface';
import {Field} from './field.interface';

export type Action = AnalysisActions.All;

const rg_field: Field[] = [
  {key: 'first', title: 'Nome', value: null, type: 'text'},
  {key: 'last', title: 'Sobrenome', value: null, type: 'text'},
  {key: 'est_civil', title: 'Estado Civil', value: null, type: 'radio', radio_box: [
      {value: 'solteiro', text: 'Solteiro', index: 0}, {value: 'casado', text: 'Casado', index: 1}
    ]},
]

const cpf_field: Field[] = [
  {key: 'number', title: 'Número CPF', value: null, type: 'text'},
]

const documents: Document[] = [
  {key: 'rg', title: 'Registro Geral', fields: rg_field},
  {key: 'cpf', title: 'Comprovante CPF', fields: cpf_field}
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
      const docs = state.documents
      docs[action.docIndex].fields[action.fieldIndex].value = action.value;
      mergeState(state, {documents: docs});
      console.log(state);
      return state
    case AnalysisActions.NEW_ANALYSIS:
      return state;
  }

}
