import { Component, OnInit } from '@angular/core';
import { Property } from '../property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  property: Property[] = [
    {
      id: 1,
      name: 'Nyumba kumi',
      size: 10,
      date: new Date('2020, 07, 12'),
    }, //0
    {
      id: 2,
      name: 'Nyumba two',
      size: 12,
      date: new Date('2021, 08, 19'),
    }, //1
  ];

  constructor() {}

  ngOnInit(): void {}

  removeProperty(index) {
    this.property.splice(index, 1);
  }
}
