export type SiteRoute =
  | "/"
  | "/about"
  | "/projects"
  | "/resume"
  | "/games"
  | "/contact";

export interface NavigationItem {
  href: SiteRoute;
  label: string;
}
