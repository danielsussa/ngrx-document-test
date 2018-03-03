export interface Field {
  id: string;
  kind: string;
  title: string;
  value: any;
  radio_box?: RadioBoxInput;
  check_box?: CheckBoxInput;
}

export interface CheckBoxInput {
  selected: number[];
  options: Options[];
}

export interface RadioBoxInput {
  selected: number;
  options: Options[];
}

export interface Options {
  name: string;
  value: string;
  text: string;
}
