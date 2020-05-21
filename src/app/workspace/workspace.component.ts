import { Component } from '@angular/core';
import {CodeModel} from '@ngstack/code-editor';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {

  // tslint:disable-next-line:variable-name
  constructor(private _bottomSheet: MatBottomSheet) {}


  theme = 'vs-light';

  content: string = 'public class Main {\n' +
    '@lombok.SneakyThrows\n' +
    'public static void main(String[] args) {\n' +
    'String url = "http://www.google.com/";\n' +
    '\n' +
    'URL obj = new URL(url);\n' +
    'HttpURLConnection connection = (HttpURLConnection) obj.openConnection();\n' +
    '\n' +
    'connection.setRequestMethod("GET");\n' +
    '\n' +
    'BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));\n' +
    'String inputLine;\n' +
    'StringBuffer response = new StringBuffer();\n' +
    '\n' +
    'while ((inputLine = in.readLine()) != null) {\n' +
    'response.append(inputLine);\n' +
    '}\n' +
    'in.close();\n' +
    '\n' +
    'System.out.println(response.toString());\n' +
    '}\n' +
    '}';

  codeModel: CodeModel = {
    language: 'java',
    uri: '',
    value: this.content,
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
