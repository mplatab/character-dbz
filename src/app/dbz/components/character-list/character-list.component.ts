import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public OnDeleteId: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.OnDeleteId.emit(id);
  }
}
