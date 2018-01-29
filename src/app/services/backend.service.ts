import { Injectable } from '@angular/core';
import {Project} from '../model/project';
import {User} from '../model/user';
import {Keynote} from '../model/keynote';
import {Repo} from '../model/repo';

@Injectable()
export class BackendService {

  constructor() { }

  getProjectsByName(name: string): Project[] {
    const projects: Project[] = [];
    const keynotes: Keynote[] = [
      new Keynote('Presentazione 1', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 2', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 3', 'http://blablacar.com/yolo/derp', 'presentation'),
      new Keynote('Presentazione 4', 'http://blablacar.com/yolo/derp', 'presentation'),
    ];
    const repos: Repo[] = [
      new Repo('Repo 1', 'http://blablacar.com/yolo/derp', 'git'),
      new Repo('Repo 2', 'http://blablacar.com/yolo/derp', 'github'),
      new Repo('Repo 3' , 'http://blablacar.com/yolo/derp', 'bitbucket'),
      new Repo('Repo 4', 'http://blablacar.com/yolo/derp', 'git'),
    ];

    for (let i = 0; i < 15; i++) {
      projects[i] = new Project('Projector', 'Gli altri progetto fanno cagare, questo è figo a' +
        ' peste perchè è fatto con Angular e gli altri muti tutti', [this.getCurrentUser()],
        repos, keynotes, undefined);
    }
    return projects;
  }

  getCurrentUser(): User {
    return new User('Lamberto', 'Basti', 'basti.lamberto@gmail.com', 's183833');
  }

  getUser(id: string): User {
    return new User('Lamberto', 'Basti', 'basti.lamberto@gmail.com', 's183833');
  }

  askToJoinProject(project: Project): Promise<boolean> {
    return new Promise<boolean>(function(resolve, reject) {
      return this._askToJoinProject(project, this);
    });
  }

  private _askToJoinProject(project: Project, service: BackendService): Promise<boolean> {
    return new Promise<boolean>(function(resolve, reject) {
      if (service.getCurrentUser().isInProject) {
        reject(false);
      } else {
        // TODO inviare al server richiesta di join di currentUser in project
        resolve(true);
      }
    });
  }
}
