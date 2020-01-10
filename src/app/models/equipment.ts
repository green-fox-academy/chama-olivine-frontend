import { AttributeModifier } from './attributeModifier';

export class Equipment {
  private _name: string;
  private _modifiers: Array<AttributeModifier>;
  private _type: string;
  private _active: boolean;

  constructor(name: string, modifier: Array<AttributeModifier>, type: string, active: boolean) {
    this._name = name;
    this._modifiers = modifier;
    this._type = type;
    this._active = active;
  }

  get name(): string {
    return this._name;
  }

  get modifiers(): Array<AttributeModifier> {
    return this._modifiers;
  }

  get type(): string {
    return this._type;
  }

  get active(): boolean {
    return this._active;
  }
}
