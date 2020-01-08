import { AttributeModifier } from './attributeModifier';

export class Equipment {
  private _id: number;
  private _name: string;
  private _modifiers: Array<AttributeModifier>;
  private _type: string;
  private _active: boolean;

  constructor(equipment: Equipment) {
    this._id = equipment._id;
    this._name = equipment._name;
    this._modifiers = equipment._modifiers;
    this._type = equipment._type;
    this._active = equipment._active;
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
