import { NgClass } from '@angular/common';
import { Component, HostAttributeToken, inject, output } from '@angular/core';

type Appearance = 'primary' | 'secondary' | 'raised' | 'flat' | 'stroked';

@Component({
  
  selector: 'dgl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgClass],
})
/**
 * Represents a card component. 
 */
export default class CardComponent {
  appearance: string = inject(new HostAttributeToken('appearance'), {optional: true}) || 'primary' as Appearance;
  onClick = output();

  /**
   * Handles the click event of the card.
   */
  handleClick(): void {
    this.onClick.emit();
  }
}
