import { Component } from '@angular/core';
import { Card } from '../card';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.css'],
})
export class MemoryMenuComponent {
  // emoji: https://getemoji.com/
  // color pattern:
  // TODO: should use figure as identifier?
  // TODO: auto-generate any size (with max?)
  cards: Card[] = [
    { id: uuid(), figure: '😍', found: false },
    { id: uuid(), figure: '🧐', found: false },
    { id: uuid(), figure: '🤪', found: false },
    { id: uuid(), figure: '😍', found: false },
    { id: uuid(), figure: '🥶', found: false },
    { id: uuid(), figure: '🧐', found: false },
    { id: uuid(), figure: '🤑', found: false },
    { id: uuid(), figure: '🥶', found: false },
    { id: uuid(), figure: '🤬', found: false },
    { id: uuid(), figure: '🤬', found: false },
    { id: uuid(), figure: '🤪', found: false },
    { id: uuid(), figure: '🤑', found: false },
  ];
  lastSelected: Card | undefined;
  canSelect = true;

  selectCard(card: Card) {
    console.log(this.canSelect);
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
  }

  // TODO: small race condition if called more than once
  async hideCard(card: Card) {
    this.canSelect = false;
    await this.timeout(2000);
    card.found = false;
    this.canSelect = true;
  }

  // TODO: move to utils folder
  timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
