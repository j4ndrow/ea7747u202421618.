import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({ selector: 'app-language-switcher', imports: [MatButtonToggleModule, TranslatePipe],
  templateUrl: './language-switcher.html', styleUrl: './language-switcher.css' })
export class LanguageSwitcher {
  readonly translate = inject(TranslateService);
  change(language: string): void { this.translate.use(language); }
}
