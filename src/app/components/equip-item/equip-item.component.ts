import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipment } from 'src/app/models/equipment';
import { HeroService } from '../../services/heroservice/hero.service';

@Component({
  selector: 'app-equip-item',
  templateUrl: './equip-item.component.html',
  styleUrls: ['./equip-item.component.scss']
})
export class EquipItemComponent implements OnInit {
  @Input() selectedItem: Equipment;
  @Output() itemEquipped: EventEmitter<any> = new EventEmitter;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  equipItem() {
    return this.heroService.equipItem(this.selectedItem.id, 'equip').subscribe((res) => {
      this.itemEquipped.emit(res);
    });
  }


}
