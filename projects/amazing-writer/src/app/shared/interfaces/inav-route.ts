export interface INavRoute {
  title: string;
  href?: string;
  description?: string;
  icon?: string | {};
  children?: INavRoute[];
}
