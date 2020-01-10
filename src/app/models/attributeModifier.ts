export class AttributeModifier {
  private _attributeName: string;
  private _value: number;

  constructor(attributeName: string, value: number, ) {
    this._attributeName = attributeName;
    this._value = value;
  }

  get attributeName(): string {
    return this._attributeName;
  }

  get value(): number {
    return this._value;
  }
}
