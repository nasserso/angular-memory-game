import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  card: Card | undefined;

  @Output()
  reveal: EventEmitter<Card> = new EventEmitter();
}
