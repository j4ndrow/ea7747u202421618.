import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({ selector: 'app-page-not-found', imports: [RouterLink, MatButtonModule, TranslatePipe],
  templateUrl: './page-not-found.html', styleUrl: './page-not-found.css' })
export class PageNotFound { readonly route = inject(Router).url; }
