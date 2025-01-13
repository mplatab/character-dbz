import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormDbzComponent } from './components/form-dbz/form-dbz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    FormDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
