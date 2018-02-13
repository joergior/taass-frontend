export class Project {
  private _title: string;
  private _description: string;
  private _ownerIds: string[];
  private _repoIds: number[];
  private _keynoteIds: number[];
  private _logo: string;

  constructor(title?: string, description?: string, ownerIds?: string[], repoIds?: number[], keynoteIds?: number[], logo?: string) {
    this._title = title;
    this._description = description;
    this._ownerIds = ownerIds;
    this._repoIds = repoIds;
    this._keynoteIds = keynoteIds;
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

  get ownerIds(): string[] {
    return this._ownerIds;
  }

  set ownerIds(value: string[]) {
    this._ownerIds = value;
  }

  addOwnerId(ownerId: string): number {
    return this._ownerIds.push(ownerId);
  }

  get repoIds(): number[] {
    return this._repoIds;
  }

  set repoIds(value: number[]) {
    this._repoIds = value;
  }

  get keynotes(): number[] {
    return this._keynoteIds;
  }

  set keynoteIds(value: number[]) {
    this._keynoteIds = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }
}
