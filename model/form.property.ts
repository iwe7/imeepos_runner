export abstract class FormProperty {
  _value: any = null;
  get value() {
    return this._value;
  }
  abstract setValue(value: any, onlySelf: boolean): any;
  abstract resetValue(value: any, onlySelf: boolean): any;
  abstract _hasValue(): boolean;
  abstract _updateValue(): any;
}
export class FormPropertyFactory {}

export abstract class PropertyGroup extends FormProperty {}
export class ArrayProperty extends PropertyGroup {
  _hasValue(): boolean {
    return true;
  }
  _updateValue() {}
  resetValue(value: any, onlySelf: boolean) {}
  setValue(value: any, onlySelf: boolean) {}
}
export class ObjectProperty extends PropertyGroup {
  _hasValue(): boolean {
    return true;
  }
  _updateValue() {}
  resetValue(value: any, onlySelf: boolean) {}
  setValue(value: any, onlySelf: boolean) {}
}

export abstract class AtomicProperty extends FormProperty {
  abstract fallbackValue(): any;
  setValue(value: any, onlySelf: boolean) {}
  resetValue(value: any, onlySelf: boolean) {}
  _hasValue(): boolean {
    return this.fallbackValue() !== this.value;
  }
  _updateValue() {}
}
export class BooleanProperty extends AtomicProperty {
  fallbackValue() {
    return null;
  }
}
export class NumberProperty extends AtomicProperty {
  fallbackValue() {
    return null;
  }
}
export class StringProperty extends AtomicProperty {
  fallbackValue() {
    return '';
  }
}
