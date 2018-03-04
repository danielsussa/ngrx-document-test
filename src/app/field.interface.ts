export interface Field {
  key: string;
  type: string;
  title: string;
  value: any;
  radio_box?: Options[];
  check_box?: Options[];
}


export interface Options {
  name?: string;
  value: string;
  text: string;
  index: number;
}
