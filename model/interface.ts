import { Observable } from 'rxjs';
import { FormProperty, PropertyGroup } from './form.property';
export interface SFSchema {
  type?: 'number' | 'integer' | 'string' | 'boolean' | 'object' | 'array';
  enum?: SFSchemaEnumType[];
  minimum?: number;
  exclusiveMinimum?: boolean;
  maximum?: number;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  items?: SFSchema;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  additionalItems?: SFSchema;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  properties?: {
    [key: string]: SFSchema;
  };
  if?: SFSchema;
  then?: SFSchema;
  else?: SFSchema;
  allOf?: SFSchema[];
  anyOf?: SFSchema[];
  oneOf?: SFSchema[];
  format?: string;
  title?: string;
  description?: string;
  default?: any;
  readOnly?: boolean;
  definitions?: SFSchemaDefinition;
  $ref?: string;
  $comment?: string;
  ui?: SFUISchemaItem | string;
}
export interface SFSchemaDefinition {
  [key: string]: SFSchema;
}
export interface SFSchemaEnum {
  [key: string]: any;
  disabled?: boolean;
  label?: any;
  title?: any;
  value?: any;
  checked?: boolean;
  group?: boolean;
  children?: SFSchemaEnum[];
}
export declare type SFSchemaEnumType = SFSchemaEnum | number | string | boolean;

export interface ErrorData {
  keyword: string;
  dataPath?: string;
  schemaPath?: string;
  params?: {
    [key: string]: any;
  };
  message?: string;
  _custom?: boolean;
}
export interface ErrorSchema {
  liveValidate?: boolean;
  errors?: {
    [key: string]: string | ((obj: ErrorData) => string);
  };
  firstVisual?: boolean;
  onlyVisual?: boolean;
  ingoreKeywords?: string[];
  validator?: (
    value: any,
    formProperty: FormProperty,
    form: PropertyGroup,
  ) => ErrorData[] | Observable<ErrorData[]>;
}
export interface SFGridSizeSchema {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}
export interface SFGridSchema {
  gutter?: number;
  span?: number;
  arraySpan?: number;
  offset?: number;
  xs?: number | SFGridSizeSchema;
  sm?: number | SFGridSizeSchema;
  md?: number | SFGridSizeSchema;
  lg?: number | SFGridSizeSchema;
  xl?: number | SFGridSizeSchema;
  xxl?: number | SFGridSizeSchema;
}
export interface SFRenderSchema {
  widget?: string;
  class?: string | string[];
  size?: 'default' | 'large' | 'small';
  grid?: SFGridSchema;
  optional?: string;
  optionalHelp?: string;
}
export interface SFHorizontalLayoutSchema {
  spanLabel?: number;
  spanControl?: number;
  offsetControl?: number;
  spanLabelFixed?: number;
}
export interface SFArraySchema {
  addTitle?: string;
  addType?: string;
  removable?: boolean;
  removeTitle?: string;
}
export interface SFInputSchema {
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}
export interface SFDataSchema {
  asyncData?: (input?: any) => Observable<SFSchemaEnumType[]>;
}
export interface SFUISchemaItem
  extends SFRenderSchema,
    SFArraySchema,
    SFHorizontalLayoutSchema,
    SFDataSchema,
    SFInputSchema,
    ErrorSchema {
  [key: string]: any;
  debug?: boolean;
  order?: string[];
  visibleIf?: {
    [key: string]: any[] | ((value: any) => boolean);
  };
}
export interface SFUISchema {
  [key: string]: SFUISchemaItem | SFUISchemaItemRun;
}
export interface SFUISchemaItemRun extends SFUISchemaItem {}
