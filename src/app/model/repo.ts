export class Repo {
  private _title: string;
  private _link: string;
  private _icon: string;

  constructor(title: string, link: string, icon: string) {
    this._title = title;
    this._link = link;
    this._icon = icon;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
