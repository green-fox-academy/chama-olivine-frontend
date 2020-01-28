import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { HeroModel } from '../../models/heroModel';

@Component({
  selector: 'app-equipped-inventory',
  templateUrl: './equipped-inventory.component.html',
  styleUrls: ['./equipped-inventory.component.scss']
})
export class EquippedInventoryComponent implements OnInit {
  @Input() hero: HeroModel;
  @Output() equippedEmitter = new EventEmitter();
  private selectedItem: Equipment;
  private itemsEquipped: Array<any> = [];
  private typeToLabel = {
    leftHand: 'Left hand',
    rightHand: 'Right hand',
    head: 'Head',
    chest: 'Chest',
    hands: 'Hands',
    waist: 'Waist',
    legs: 'Legs'
  };

  constructor() { }

  ngOnInit() {
    const activeItems = this.hero.activeEquipments();

    for (const key in this.typeToLabel) {
      if (this.typeToLabel.hasOwnProperty(key)) {
        const typeToLookUp = key;
        let typeFound = false;
        for (const item in activeItems) {
          if (activeItems.hasOwnProperty(item) && activeItems[item].type === typeToLookUp) {
              const itemObject = {
                itemTitle: this.typeToLabel[key],
                itemObject: activeItems[item]
              };
              typeFound = true;
              this.itemsEquipped.push(itemObject);
          }
        }
        if (!typeFound) {
          const itemObject = {
            itemTitle: this.typeToLabel[key],
            itemObject: '-'
          };
          this.itemsEquipped.push(itemObject);
        }
      }
    }
  }

  itemClicked(equipment: Equipment) {
    this.selectedItem = equipment;
    this.equippedEmitter.emit(this.selectedItem);
  }

  isActive(item) {
    return this.selectedItem === item;
  }
}
