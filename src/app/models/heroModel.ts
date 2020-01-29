import { AttributeModifier } from './attributeModifier';
import { Equipment } from './equipment';

export class HeroModel {
  private _id: number;
  private _name: string;
  private _experience: number;
  private _neededExp: number;
  private _level: number;
  private _healthmax: number;
  private _healthact: number;
  private _attackmax: number;
  private _attackmin: number;
  private _defense: number;
  private _inventory: Array<Equipment>;
  private _smallImage: string;
  private _bigImage: string;
  private _finalwords: string;
  private _healthMaxUpgraded: number;
  private _healthActUpgraded: number;
  private _attackMaxUpgraded: number;
  private _attackMinUpgraded: number;
  private _defenseUpgraded: number;
  private _healthActPercentage: number;
  private _activeItems: Equipment[];
  _idleAction: any;

  constructor(champion) {
    this._id = champion.id;
    this._name = champion.name;
    this._experience = champion.experience;
    this._level = champion.level;
    this._healthmax = champion.healthmax;
    this._healthact = champion.healthact;
    this._attackmax = champion.attackmax;
    this._attackmin = champion.attackmin;
    this._defense = champion.defense;
    this._inventory = champion.inventory || [];
    this._bigImage = champion.bigImage;
    this._smallImage = champion.smallImage;
    this._finalwords = champion.finalWords;
    this._healthMaxUpgraded = this.healthMaxUpgrade();
    this._healthActUpgraded = this.healthActUpgrade();
    this._attackMaxUpgraded = this.attackMaxUpgrade();
    this._attackMinUpgraded = this.attackMinUpgrade();
    this._defenseUpgraded = this.defenseUpgrade();
    this._neededExp = this.calcNeededExp(this.level);
    this._healthActPercentage = this.calcHealthActPercentage();
    this._activeItems = this.activeEquipments();
    this._idleAction = champion.idleAction;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get level(): number {
    return this._level;
  }

  get experience(): number {
    return this._experience;
  }

  get neededExp(): number {
    return this._neededExp;
  }

  get healthmax(): number {
    return this._healthmax;
  }

  get healthact(): number {
    return this._healthact;
  }

  get attackmin(): number {
    return this._attackmin;
  }

  get attackmax(): number {
    return this._attackmax;
  }

  get defense(): number {
    return this._defense;
  }

  get inventory(): Array<Equipment> {
    return this._inventory;
  }

  get bigImage(): string {
    return this._bigImage;
  }

  get healthMaxUpgraded(): number {
    return this._healthMaxUpgraded;
  }

  get healthActUpgraded(): number {
    return this._healthActUpgraded;
  }

  get attackMaxUpgraded(): number {
    return this._attackMaxUpgraded;
  }

  get attackMinUpgraded(): number {
    return this._attackMinUpgraded;
  }

  get defenseUpgraded(): number {
    return this._defenseUpgraded;
  }

  get smallImage(): string {
    return this._smallImage;
  }

  get finalWords(): string {
    return this._finalwords;
  }

  get healthActPercentage(): number {
    return this._healthActPercentage;
  }

  private calcNeededExp(level): number {
    let calced = 0;
    for (let i = 0; i <= level + 1; i++) {
      calced += i;
    }
    return calced - this._experience;
  }

  private activeItemsModifiers(): AttributeModifier[][] {
    return this.inventory.filter((equipment: Equipment) => equipment.active === true).map((element) => {
      return element.modifiers;
    });
  }

  private filteringAndSum(x: number[]): number {
    return x.filter((element: number) => element).reduce((a, b) => a + b, 0);
  }

  private healthMaxUpgrade(): number {
    const healthMaxModifiers = this.filteringAndSum(this.activeItemsModifiers().map((item) => {
      if (item['attributeName'] === 'healthmax') { return item['value']; }
    }));
    return this._healthmax + healthMaxModifiers;
  }

  private healthActUpgrade(): number {
    const healthActModifiers = this.filteringAndSum(this.activeItemsModifiers().map((item) => {
      if (item['attributeName'] === 'healthact') { return item['value']; }
    }));
    return this._healthact + healthActModifiers;
  }

  private attackMaxUpgrade(): number {
    const attackMaxModifiers = this.filteringAndSum(this.activeItemsModifiers().map((item) => {
      if (item['attributeName'] === 'attackmax') { return item['value']; }
    }));
    return this._attackmax + attackMaxModifiers;
  }

  private attackMinUpgrade(): number {
    const attackMinModifiers = this.filteringAndSum(this.activeItemsModifiers().map((item) => {
      if (item['attributeName'] === 'attackmin') { return item['value']; }
    }));
    return this._attackmin + attackMinModifiers;
  }

  private defenseUpgrade(): number {
    const defenseModifiers = this.filteringAndSum(this.activeItemsModifiers().map((item) => {
      if (item['attributeName'] === 'defense') { return item['value']; }
    }));
    return this._defense + defenseModifiers;
  }

  private calcHealthActPercentage() {
    return Math.round(this.healthActUpgraded / (this.healthMaxUpgraded / 100));
  }

  public activeEquipments(): Equipment[] {
    return this.inventory.filter((equipment: Equipment) => equipment.active).map((element) => {
      return element;
    });
  }
}
