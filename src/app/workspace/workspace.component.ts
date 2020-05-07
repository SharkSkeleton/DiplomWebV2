import { Component } from '@angular/core';
import {CodeModel} from '@ngstack/code-editor';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {

  constructor() { }

  theme = 'vs-light';

  content: string = 'public class Main {' +
    '\npublic static main(String[] args) {}\n' +
    '}';

  codeModel: CodeModel = {
    language: 'javascript',
    uri: '',
    value: this.content,
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

}
