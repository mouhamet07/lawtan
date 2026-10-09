import { Component, ElementRef, HostListener, computed, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { HEADER_CTA, NAV_ITEMS, NavItem } from '@core/config/navigation.config';
import { SITE_CONFIG } from '@core/config/site.config';

/** Doit correspondre au breakpoint du CSS (min-width: 1100px). */
const DESKTOP_QUERY = '(min-width: 1100px)';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly burger = viewChild<ElementRef<HTMLButtonElement>>('burger');

  protected readonly site = SITE_CONFIG;
  protected readonly items = NAV_ITEMS;
  protected readonly cta = HEADER_CTA;

  // Barre supérieure : affichée uniquement si au moins une coordonnée existe.
  private readonly contact = SITE_CONFIG.contact;
  protected readonly telHref = this.contact.phone ? 'tel:' + this.contact.phone.replace(/[^\d+]/g, '') : null;
  protected readonly whatsappHref = this.contact.whatsapp
    ? 'https://wa.me/' + this.contact.whatsapp.replace(/\D/g, '')
    : null;
  protected readonly hasTopbar = !!(this.contact.phone || this.contact.whatsapp || this.contact.address);

  protected readonly mobileOpen = signal(false);
  protected readonly openSubmenu = signal<string | null>(null);
  protected readonly scrolled = signal(false);
  private readonly url = signal(this.router.url);
  private readonly path = computed(() => this.url().split(/[?#]/)[0]);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((e) => {
        this.url.set(e.urlAfterRedirects);
        this.closeAll();
      });
  }

  /** Le groupe « Nos activités » est actif si l'une de ses pages enfants est affichée. */
  protected isGroupActive(item: NavItem): boolean {
    const p = this.path();
    return !!item.children?.some((c) => p === c.route || p.startsWith(c.route + '/'));
  }

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
    this.openSubmenu.set(null);
  }

  /** Clic souris sur desktop : le survol a déjà ouvert le menu, on le garde ouvert. Clavier/tactile : bascule. */
  protected onSubmenuClick(label: string, event: MouseEvent): void {
    if (this.isDesktop() && event.detail > 0) {
      this.openSubmenu.set(label);
    } else {
      this.openSubmenu.update((c) => (c === label ? null : label));
    }
  }

  protected onSubmenuEnter(label: string): void {
    if (this.isDesktop()) this.openSubmenu.set(label);
  }

  protected onSubmenuLeave(): void {
    if (this.isDesktop()) this.openSubmenu.set(null);
  }

  /** Ferme le sous-menu desktop quand le focus clavier en sort. */
  protected onFocusOut(event: FocusEvent): void {
    if (!this.isDesktop()) return;
    const next = event.relatedTarget as Node | null;
    if (!next || !(event.currentTarget as HTMLElement).contains(next)) {
      this.openSubmenu.set(null);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    const wasMobileOpen = this.mobileOpen();
    if (!wasMobileOpen && !this.openSubmenu()) return;
    this.closeAll();
    if (wasMobileOpen) this.burger()?.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) this.closeAll();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (this.isDesktop()) this.mobileOpen.set(false);
  }

  private closeAll(): void {
    this.mobileOpen.set(false);
    this.openSubmenu.set(null);
  }

  private isDesktop(): boolean {
    return window.matchMedia(DESKTOP_QUERY).matches;
  }
}
