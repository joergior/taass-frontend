export class Project {
  private _title: string;
  private _description: string;
  private _owners: string[];
  private _repos: number[];
  private _keynotes: number[];
  private _logo: string;

  constructor(title: string, description: string, owners: string[], repos?: number[], keynotes?: number[], logo?: string) {
    this._title = title;
    this._description = description;
    this._owners = owners;
    this._repos = repos;
    this._keynotes = keynotes;
    this._logo = logo;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get owners(): string[] {
    return this._owners;
  }

  set owners(value: string[]) {
    this._owners = value;
  }

  addOwner(ownerId: string): number {
    return this._owners.push(ownerId);
  }

  get repos(): number[] {
    return this._repos;
  }

  set repos(value: number[]) {
    this._repos = value;
  }

  get keynotes(): number[] {
    return this._keynotes;
  }

  set keynotes(value: number[]) {
    this._keynotes = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }
}
