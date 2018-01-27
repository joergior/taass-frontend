import {Repo} from './repo';
import {User} from './user';
import {Keynote} from './keynote';

export class Project {
  private _title: string;
  private _description: string;
  private _owners: User[];
  private _repos: Repo[];
  private _keynotes: Keynote[];
  private _logo: string;

  constructor(title: string, description: string, owners: User[], repos: Repo[], keynotes: Keynote[], logo: string) {
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

  get owners(): User[] {
    return this._owners;
  }

  set owners(value: User[]) {
    this._owners = value;
  }

  get repos(): Repo[] {
    return this._repos;
  }

  set repos(value: Repo[]) {
    this._repos = value;
  }

  get keynotes(): Keynote[] {
    return this._keynotes;
  }

  set keynotes(value: Keynote[]) {
    this._keynotes = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }
}
