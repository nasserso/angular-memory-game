import { Component } from '@angular/core';
import { Card } from '../card';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.css'],
})
export class MemoryMenuComponent {
  cards: Card[] = this.generateCards();
  lastSelected: Card | undefined;
  canSelect = true;
  won = false;

  generateCards() {
    let emojis = ['😍', '🧐', '🤪', '🤑', '🥶', '🤬', '🤩', '👺', '🫠', '👻'];
    let indexes = Array.from(Array(emojis.length * 2).keys());
    let cards: Card[] = Array(emojis.length * 2);
    let key_index = 0;
    let emoji_index = 0;

    while (indexes.length > 0) {
      key_index = Math.floor(Math.random() * indexes.length);
      cards[indexes[key_index]] = {
        id: uuid(),
        figure: emojis[emoji_index],
        found: false,
      };

      if (indexes.length % 2 !== 0) {
        emoji_index++;
      }

      indexes = indexes
        .slice(0, key_index)
        .concat(indexes.slice(key_index + 1, indexes.length));
    }

    return cards;
  }

  selectCard(card: Card) {
    if (!this.canSelect) return;
    if (card.found === true) return;

    if (this.lastSelected === undefined) {
      this.lastSelected = card;
      this.lastSelected.found = true;
    } else {
      card.found = true;
      this.lastSelected.found = true;
      if (this.lastSelected.figure !== card.figure) {
        this.hideCard(card);
        this.hideCard(this.lastSelected);
      }
      this.lastSelected = undefined;
    }

    this.checkWin();
  }

  checkWin() {
    let allSelected = this.cards.reduce(
      (result, card) => result && card.found,
      true
    );

    if (allSelected) {
      this.won = true;
    }
  }

  restart() {
    this.cards = this.generateCards();
    this.won = false;
  }

  // TODO: small race condition if called more than once
  async hideCard(card: Card) {
    this.canSelect = false;
    await this.timeout(1300);
    card.found = false;
    this.canSelect = true;
  }

  // TODO: move to utils folder
  timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
