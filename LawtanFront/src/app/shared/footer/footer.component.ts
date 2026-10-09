import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';

import { FOOTER_ACTIVITIES, FOOTER_NAV, LEGAL_LINKS, NAV_ITEMS } from '@core/config/navigation.config';
import { SITE_CONFIG, toTelHref, toWhatsappHref } from '@core/config/site.config';
import { routes } from '@app/app.routes';

function collectRoutePaths(routeConfig: Routes, parentPath = ''): Set<string> {
  const paths = new Set<string>();

  for (const route of routeConfig) {
    const path = route.path ?? '';
    const fullPath = [parentPath, path].filter(Boolean).join('/');
    paths.add(`/${fullPath}`);

    if (route.children?.length) {
      for (const childPath of collectRoutePaths(route.children, fullPath)) {
        paths.add(childPath);
      }
    }
  }

  return paths;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly site = SITE_CONFIG;
  private readonly routePaths = collectRoutePaths(routes);
  protected readonly nav = FOOTER_NAV.filter((link) => this.routePaths.has(link.route));
  protected readonly activities = FOOTER_ACTIVITIES.map((activity) => ({
    ...activity,
    description: this.getActivityDescription(activity.label),
    routeAvailable: this.routePaths.has(activity.route),
  }));
  protected readonly legal = LEGAL_LINKS.filter((link) => this.routePaths.has(link.route));
  protected readonly contactRouteAvailable = this.routePaths.has('/contact');
  protected readonly year = new Date().getFullYear();

  private readonly contact = SITE_CONFIG.contact;
  protected readonly telHref = toTelHref(this.contact.phone);
  protected readonly whatsappHref = toWhatsappHref(this.contact.whatsapp);
  protected readonly hasContact = !!(
    this.contact.phone ||
    this.contact.whatsapp ||
    this.contact.email ||
    this.contact.address
  );

  private getActivityDescription(label: string): string {
    const activity = NAV_ITEMS.flatMap((item) => item.children ?? []).find((child) => child.label === label);
    return activity?.description ?? '';
  }
}
