import { Injectable } from '@angular/core';
import {Project} from '../model/project';
import {User} from '../model/user';
import {Keynote} from '../model/keynote';
import {Repo} from '../model/repo';
import {HttpClient} from '@angular/common/http';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class BackendService {

  private currentUser: User;

  constructor(private http: HttpClient, private oAuthService: OAuthService) {
    this.http.get('https://dev-928137.oktapreview.com/api/v1/users/me').subscribe(data => {
      console.log(data);
    });
  }

  searchProjectsByName(name: string): Project[] {
    const projects: Project[] = [];
    for (let i = 0; i < 15; i++) {
      projects[i] = this.getTestProject();
    }
    return projects;
  }

  getProjectById(id: string) {
    return this.getTestProject();
  }

  getUser(id: string): User {
    return this.getTestUser();
  }

  askToJoinProject(project: Project): Promise<boolean> {
    return new Promise<boolean>(function(resolve, reject) {
      return this._askToJoinProject(project, this);
    });
  }

  private _askToJoinProject(project: string, service: BackendService): Promise<boolean> {
    return new Promise<boolean>(function(resolve, reject) {
      if (service.getTestUser().isInProject) {
        reject(false);
      } else {
        // TODO inviare al server richiesta di join di currentUser in project
        resolve(true);
      }
    });
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  fetchUsers(usersIds: string[]): User[] {
    const users: User[] = [];
    for(let userId of usersIds){
      users.push(this.getTestUser());
    }

    return users;
  }

  private getTestKeynotes(): Keynote[] {
    return [
      new Keynote('Presentazione 1', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 2', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 3', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 4', 'http://blablacar.com/yolo/derp', 'presentation'),
    ];
  }

  private getTestRepos(): Repo[] {
    return [
      new Repo('Repo 1', 'http://blablacar.com/yolo/derp', 'git'),
      new Repo('Repo 2', 'http://blablacar.com/yolo/derp', 'github'),
      new Repo('Repo 3' , 'http://blablacar.com/yolo/derp', 'bitbucket'),
      new Repo('Repo 4', 'http://blablacar.com/yolo/derp', 'git'),
    ];
  }

  private getTestUser(): User {
    return new User('Lamberto', 'Basti', 'basti.lamberto@gmail.com', 's183833');
  }

  private getTestProject(): Project {
    return new Project('Projector', 'Gli altri progetto fanno ifo, questo è figo a' +
      ' peste perchè è fatto con Angular e gli altri muti', [this.getTestUser().name],
      this.getTestRepos(), this.getTestKeynotes(), undefined);
  }
}
