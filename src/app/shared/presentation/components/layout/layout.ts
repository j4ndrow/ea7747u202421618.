import { DOCUMENT } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Toolbar } from '../toolbar/toolbar';

@Component({ selector: 'app-layout', imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatListModule, TranslatePipe, Toolbar],
  templateUrl: './layout.html', styleUrl: './layout.css' })
export class Layout {
  private document = inject(DOCUMENT);
  private translate = inject(TranslateService);
  constructor() { effect(() => this.document.documentElement.lang = this.translate.currentLang() || 'en'); }
}
