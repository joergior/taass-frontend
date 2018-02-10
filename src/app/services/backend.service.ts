import { Injectable } from '@angular/core';
import {Project} from '../model/project';
import {User} from '../model/user';
import {Keynote} from '../model/keynote';
import {Repo} from '../model/repo';
import {HttpClient} from '@angular/common/http';
import {OktaAuthService} from '@okta/okta-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

  public static API = 'http://localhost:8080/api';
  public static OKTA_API = 'https://dev-928137.oktapreview.com/api';
  public static PROJECT_API = BackendService.API + '/projects';
  public static KEYNOTE_API = BackendService.API + '/keynotes';
  public static REPO_API = BackendService.API + '/repoes';

  private currentUser: User;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {  }

  printCurrentUser_() {
    const accessToken = this.oktaAuth.getAccessToken().accessToken;
    console.log(accessToken);
    this.oktaAuth.getOktaAuth().token.getUserInfo(this.oktaAuth.getAccessToken()).then(user => {
      console.log(user);
    });
  }

  searchProjectsByTitle(title: string): Promise<Project[]> {
    const here = this;
    return new Promise<Project[]>(function (resolve, reject) {
      here.http.get(`${BackendService.PROJECT_API}/search/findByTitleContainingIgnoreCase?title=${title}`)
        // .map((response: any) => response.toJSON())
        .map((data: any) => {
          data._embedded.projects.forEach(function(item){
            delete item._links;
          });
          return data._embedded.projects;
        })
        .subscribe((data: Project[]) => {
          resolve(data);
        }, error => {
          console.error(`ERROR FETCHING PROJECTS\n` + error);
          reject(null);
        });
    });
  }

  getKeynote(id: number): Promise<Keynote> {
    const here = this;
    return new Promise<Keynote>(function (resolve, reject) {
      here.http.get(`${BackendService.KEYNOTE_API}/${id}`)
        .subscribe((data: Keynote) => {
        resolve(data);
      }, error => {
        console.error(`ERROR FETCHING KEYNOTE #${id}\nERROR: ${error}\nURL: \`${BackendService.KEYNOTE_API}/${id}\``);
        reject(null);
      });
    });
  }

  getRepo(id: number): Promise<Repo> {
    const here = this;
    return new Promise<Repo>(function (resolve, reject) {
      here.http.get(`${BackendService.REPO_API}/${id}`)
        .subscribe((data: Repo) => {
          resolve(data);
        }, error => {
          console.error(`ERROR FETCHING REPO #${id}\nERROR: ${error}\nURL: \`${BackendService.REPO_API}/${id}\``);
          reject(null);
        });
    });
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
    for (const userId of usersIds){
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
}
