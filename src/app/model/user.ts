import {Project} from './project';

export class User {

  private _name: string;
  private _surname: string;
  private _email: string;
  private _badgeNumber: string;
  private _isInProject: boolean;
  private _project: Project;

  constructor(name: string, surname: string, email: string,
              badgeNumber: string, project?: Project) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._badgeNumber = badgeNumber;
    if (project) {
      this.isInProject = true;
      this._project = project;
    } else {
      this._isInProject = false;
    }
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get badgeNumber(): string {
    return this._badgeNumber;
  }

  set badgeNumber(value: string) {
    this._badgeNumber = value;
  }

  get isInProject(): boolean {
    return this._isInProject;
  }

  set isInProject(value: boolean) {
    this._isInProject = value;
  }

  asJsOject(): object {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      badgeNumber: this.badgeNumber
    };
  }

  asArray(): object[] {
    return [
      {name: 'name', value: this.name },
      {name: 'surname', value: this.surname },
      {name: 'email', value: this. email },
      {name: 'badgeNmber', value: this. badgeNumber }
    ];
  }
}
