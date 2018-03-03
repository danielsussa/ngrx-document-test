import * as AnalysisActions from './analysis.actions';
import {Analysis} from './analysis.interface';
import {Document} from './document.interface';
import {Field} from './field.interface';

export type Action = AnalysisActions.All;

const rg_field: Field[] = [
  {id: 'first', title: 'Nome', value: null, kind: 'text'},
  {id: 'last', title: 'Sobrenome', value: null, kind: 'text'},
  {id: 'est_civil', title: 'Estado Civil', value: null, kind: 'radio', radio_box: {selected: 1, options: [
    {name: 'est_civ', value: 'solteiro', text: 'Solteiro'}, {name: 'est_civ', value: 'casado', text: 'Casado'}
    ]}},
]

const cpf_field: Field[] = [
  {id: 'number', title: 'Número CPF', value: null, kind: 'text'},
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
