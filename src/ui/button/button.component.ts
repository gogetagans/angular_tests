import { CommonModule } from '@angular/common';
import { Component, HostAttributeToken, inject, output } from '@angular/core';

type Appearance = 'primary' | 'secondary' | 'raised' | 'flat' | 'stroked';

@Component({
  selector: 'dgl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  imports: [CommonModule],
  standalone: true,
})
/**
 * Represents a button component. 
 */
export class ButtonComponent {
  appearance: string = inject(new HostAttributeToken('appearance'), {optional: true}) || 'primary' as Appearance;
  onClick = output();

  /**
   * Handles the click event of the button.
   */
  handleClick(): void {
    this.onClick.emit();
  }
}
