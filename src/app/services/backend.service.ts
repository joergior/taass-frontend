import { Injectable } from '@angular/core';
import {Project} from '../model/project';
import {User} from '../model/user';
import {Keynote} from '../model/keynote';
import {Repo} from '../model/repo';
import {HttpClient} from '@angular/common/http';
import {OktaAuthService} from '@okta/okta-angular';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BackendService {

  public static FRONTEND_URL = 'http://localhost:1337';
  public static API = 'http://localhost:8080/api';
  public static OKTA_API = 'https://dev-928137.oktapreview.com/api';
  public static PROJECT_API = BackendService.API + '/projects';
  public static KEYNOTE_API = BackendService.API + '/keynotes';
  public static REPO_API = BackendService.API + '/repoes';
  public static CLIENT_ID = '0oadx8g38e3bAet2I0h7';

  private currentUser: User;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {  }

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

  getKeynoteById(id: number): Promise<Keynote> {
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

  getRepobyId(id: number): Promise<Repo> {
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

  askToJoinProject(project: Project): Promise<boolean> {
    const here = this;
    return new Promise<boolean>(function(resolve, reject) {
    });
  }

  getCurrentUser(): Promise<User> {
    const here = this;
    return new Promise<User>(function (resolve, reject) {
      here.http.get(BackendService.API + '/users/me').subscribe((data: any) => {
        console.log('getCurrentUser() called, GET response is: ');
        console.log(data);
        if (data) {
          resolve(new User(data.profile.given_name, data.profile.family_name , data.profile.email,
                           data.profile.bagde_number, data.profile.projectId));
        } else {
          reject();
        }
      });
    });
  }

  getUserIdByEmail(email: string): Promise<string> {
    const here = this;
    return new Promise<string>(function (resolve, reject) {
      here.http.get(`${BackendService.API}/users/email/${email}`).subscribe((data: any) => {
        resolve(data.id);
      });
    });
  }

  getUsersByID(usersIds: string[]): Promise<User[]> {
    const pArray = [];
    const here = this;
    usersIds.forEach(function (value) {
      pArray.push(here.getUserByID(value));
    });
    return Promise.all(pArray);
  }

  getUserByID(userId: string): Promise<User> {
    const here = this;
    return new Promise<User>(function (resolve, reject) {
      here.http.get(`${BackendService.API}/users/${userId}`).subscribe((data: any) => {
        resolve(new User(data.profile.given_name, data.profile.family_name , data.profile.email,
                         data.profile.bagde_number, data.profile.projectId));
      });
    });
  }

  createProject(project: Project): Observable<Object> {
    return this.http.post(`${BackendService.API}/projects/create`, JSON.stringify(project).replace(/_/g, ''));
  }
}
