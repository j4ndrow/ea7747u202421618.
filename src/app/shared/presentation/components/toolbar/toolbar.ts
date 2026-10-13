import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({ selector: 'app-toolbar', imports: [MatToolbarModule, TranslatePipe, LanguageSwitcher],
  templateUrl: './toolbar.html', styleUrl: './toolbar.css' })
export class Toolbar {}
