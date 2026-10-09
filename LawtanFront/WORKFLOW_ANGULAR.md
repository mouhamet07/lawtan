# Comprendre le workflow Angular de LawtanFront

Ce guide explique comment les différentes parties de l’application se relient. Il décrit le code tel qu’il est aujourd’hui : il ne modifie pas l’application.

## 1. Le démarrage de l’application

Le navigateur charge `src/main.ts`. Ce fichier appelle `bootstrapApplication` avec `AppComponent` et `appConfig` :

1. `AppComponent` est le composant racine, le point de départ de l’interface.
2. `appConfig` fournit à toute l’application les services configurés, notamment le routeur Angular.
3. Angular construit l’arbre de composants et affiche leurs templates.

Dans `src/app/app.component.html`, l’ordre d’affichage est :

```text
<app-header />
<router-outlet />
<app-footer />
```

L’en-tête et le pied de page restent donc en place pendant que le contenu central dépend de la route. `<router-outlet />` est l’emplacement réservé à la page correspondant à l’URL.

## 2. Un composant Angular : logique, template et styles

Un composant regroupe généralement trois fichiers :

- `*.component.ts` : sa classe TypeScript, ses données et son comportement ;
- `*.component.html` : le template, c’est-à-dire le HTML enrichi par la syntaxe Angular ;
- `*.component.css` : les styles propres au composant.

Par exemple, [header.component.ts](src/app/shared/header/header.component.ts) déclare le composant `HeaderComponent`, associe son template et ses styles, puis rend disponibles au template les données dont il a besoin.

Le projet utilise des composants autonomes (« standalone »). Les dépendances utilisées dans le template sont indiquées dans `imports` du décorateur `@Component`. Ainsi, l’en-tête importe `RouterLink` pour ses liens internes et `RouterLinkActive` pour signaler la page active.

Dans `AppComponent`, les composants `HeaderComponent` et `FooterComponent` sont également importés pour que leurs balises `<app-header />` et `<app-footer />` puissent être utilisées dans le template racine.

## 3. Lire la syntaxe Angular dans les templates

Le template de l’en-tête se trouve dans [header.component.html](src/app/shared/header/header.component.html). Les principales formes de syntaxe sont :

| Syntaxe | Nom courant | Exemple dans le projet | Rôle |
|---|---|---|---|
| `{{ expression }}` | interpolation | `{{ item.label }}` | Affiche une valeur dans le texte HTML. |
| `[propriete]="expression"` | liaison de propriété | `[class.is-open]="mobileOpen()"` | Met à jour une propriété ou une classe à partir de l’état Angular. |
| `(evenement)="methode()"` | liaison d’événement | `(click)="toggleMobile()"` | Appelle une méthode quand l’utilisateur déclenche un événement. |
| `@if (...) { ... }` | bloc conditionnel | `@if (hasTopbar) { ... }` | Affiche un bloc uniquement si la condition est vraie. |
| `@for (item of items; track item.label) { ... }` | boucle | `@for (item of items; ...)` | Répète un bloc pour chaque élément d’une liste. `track` aide Angular à reconnaître les éléments. |
| `routerLink` | navigation Angular | `[routerLink]="item.route"` | Change de page dans l’application sans recharger tout le document. |

Les crochets et parenthèses peuvent être combinés : `(click)="onSubmenuClick(item.label, $event)"` transmet à la méthode à la fois l’événement et les données de l’élément.

## 4. Parcours d’une interaction dans l’en-tête

### Ouverture du menu mobile

1. Le bouton burger dans le template reçoit le clic.
2. `(click)="toggleMobile()"` appelle la méthode du composant.
3. La méthode inverse le signal `mobileOpen`.
4. Angular met à jour les bindings qui lisent `mobileOpen()` : la classe `is-open`, l’état `aria-expanded` et le texte accessible du bouton.

### Sous-menu « Nos activités »

- Sur un écran de bureau, le survol appelle `onSubmenuEnter` et ouvre le sous-menu. La sortie du pointeur appelle `onSubmenuLeave`.
- Un clic ou une interaction clavier/tactile passe par `onSubmenuClick`.
- La touche Échap ferme les menus. Si le menu mobile était ouvert, le focus retourne au bouton burger.
- Un clic en dehors de l’en-tête ferme les menus.
- Après une navigation réussie, l’événement `NavigationEnd` met à jour l’URL mémorisée et ferme les menus.

Le composant utilise `window.matchMedia` avec le seuil `1100px` pour distinguer les interactions de bureau. Ce seuil doit rester cohérent avec le breakpoint du CSS de l’en-tête.

## 5. Signaux et état réactif

Un signal Angular est une valeur que le template peut lire et qu’Angular peut suivre. Lorsqu’elle change, Angular actualise les éléments qui en dépendent.

Dans `HeaderComponent` :

- `mobileOpen` mémorise l’ouverture du menu mobile ;
- `openSubmenu` mémorise le sous-menu ouvert, ou `null` si aucun ne l’est ;
- `scrolled` indique si la page a défilé ;
- `url` mémorise l’URL actuelle ;
- `path`, créé avec `computed`, calcule le chemin à partir de `url`.

On lit un signal en l’appelant, par exemple `mobileOpen()`, et on peut le modifier avec `set` ou `update`. `computed` sert à dériver une valeur d’autres signaux sans la maintenir séparément.

Le décorateur `@HostListener` relie des événements globaux du navigateur — défilement, redimensionnement, clic document ou touche Échap — aux méthodes du composant.

## 6. Où se trouvent les données communes ?

Les composants partagent des données définies dans `src/app/core/config/`.

### Navigation

[navigation.config.ts](src/app/core/config/navigation.config.ts) contient :

- `NAV_ITEMS` : liens et sous-liens de l’en-tête ;
- `HEADER_CTA` : libellé et route du bouton d’action ;
- `FOOTER_NAV`, `FOOTER_ACTIVITIES` et `LEGAL_LINKS` : listes utilisées par le pied de page.

Le pied de page dérive ses liens généraux et ses activités de `NAV_ITEMS`. Modifier une entrée de navigation peut donc affecter plusieurs zones du site. Les routes marquées comme temporaires doivent être enregistrées dans le routeur avant de correspondre à une page.

### Informations du site et coordonnées

[site.config.ts](src/app/core/config/site.config.ts) contient `SITE_CONFIG` : le nom, les informations du logo, les coordonnées et les réseaux sociaux. Les coordonnées sont vides par défaut ; les sections correspondantes ne s’affichent que si des informations sont renseignées.

Les fonctions `toTelHref` et `toWhatsappHref` transforment un numéro en lien utilisable par un navigateur. Elles renvoient `null` si le numéro ne contient rien d’exploitable.

## 7. Comment fonctionne le routeur ?

[app.config.ts](src/app/app.config.ts) fournit le routeur avec `provideRouter(routes)`. La liste des routes est définie dans [app.routes.ts](src/app/app.routes.ts).

**État actuel : `routes` est un tableau vide.** Les composants d’en-tête et de pied de page affichent des liens dont les chemins sont définis dans la configuration, mais aucune de ces URL n’est encore associée à une page par le routeur. Par conséquent, `<router-outlet />` n’affiche actuellement pas de page routée.

Pour comprendre une navigation, il faut donc suivre les deux côtés :

1. le lien (`routerLink`) fournit un chemin, par exemple `/contact` ;
2. une entrée correspondante doit exister dans `app.routes.ts` et indiquer quel composant afficher.

Changer uniquement le libellé ou le chemin dans `navigation.config.ts` ne crée pas la page. De même, créer une route ne met pas automatiquement un lien dans la navigation.

## 8. Repères pour les changements courants

- **Changer un libellé ou une URL de navigation** : examiner `navigation.config.ts`, puis vérifier que la route existe dans `app.routes.ts`.
- **Renseigner téléphone, WhatsApp, adresse ou courriel** : examiner `SITE_CONFIG.contact` dans `site.config.ts`. Les liens et sections conditionnels sont construits dans les composants.
- **Modifier l’apparence** : examiner le fichier CSS associé au composant, par exemple `header.component.css`.
- **Modifier le comportement du menu** : examiner les méthodes et signaux dans `header.component.ts`, puis les événements correspondants dans son template.
- **Ajouter une page** : la page est un composant ; le routeur doit ensuite associer son URL à ce composant. Un lien de navigation peut alors pointer vers cette URL.

## 9. Commandes de développement

Depuis le dossier `LawtanFront` :

```bash
npm start
```

Démarre le serveur de développement Angular. Le navigateur est généralement accessible à `http://localhost:4200/` et l’application se recharge après les modifications.

```bash
npm run build
```

Compile l’application pour vérifier que le code et les templates sont valides.

```bash
npm test
```

Lance les tests unitaires configurés par le projet.
