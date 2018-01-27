import { Injectable } from '@angular/core';
import {Project} from '../model/project';
import {User} from '../model/user';

@Injectable()
export class BackendService {

  constructor() { }

  getAllProjects(): Project[] {
    const projects: Project[] = [];
    for (let i = 0; i < 15; i++) {
      projects[i] = new Project();
    }
    return projects;
  }

  getCurrentUser(): User {
    return new User('Lamberto', 'Basti', 'basti.lamberto@gmail.com', 's183833');
  }

  getUser(id: string): User {
    return new User('Lamberto', 'Basti', 'basti.lamberto@gmail.com', 's183833');
  }

}
