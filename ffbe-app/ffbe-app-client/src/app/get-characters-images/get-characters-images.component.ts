import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Character } from './character';
import { CharacterPipe } from './character.pipe';

@Component({
    selector: 'app-get-characters-images',
    templateUrl: './get-characters-images.component.html',
    styleUrls: ['./get-characters-images.component.css']
})
export class GetCharactersImagesComponent implements OnInit {

    imageData: string[] = [];
    imageName: string[] = [];

    characters: Character[] = [];

    constructor(private http: Http,
        private sanitizer: DomSanitizer) {
        let headers = new Headers({
            'Content-Type': 'text/html; charset=utf-8'
        });

        if (localStorage.getItem('token')) {
            headers.append('Authorization', localStorage.getItem('token'));
        }
        
        let options = new RequestOptions({
            headers: headers
        }); // Create a request option

        this.http.get("http://localhost:4200/api/getCharacters", options)
            .map(response => response.text())
            .subscribe(
                data => {
                    let datas = JSON.parse(data);
                    for (var currentData in datas) {
                        if (datas.hasOwnProperty(currentData)) {
                            let character = new Character();
                            character.image = this.sanitizer.sanitize(SecurityContext.URL, `data:image/png;base64,${datas[currentData].imageByteArray}`);
                            character.name = datas[currentData].name;

                            this.characters.push(character);
                            this.imageData.push(this.sanitizer.sanitize(SecurityContext.URL, `data:image/png;base64,${datas[currentData].imageByteArray}`));
                            this.imageName.push(datas[currentData].name);
                        }

                    }
                }
            );
    }

    getCharacterDetails(characterName) {
        let headers = new Headers({
            'Content-Type': 'text/html; charset=utf-8'
        });

        if (localStorage.getItem('token')) {
            headers.append('Authorization', localStorage.getItem('token'));
        }
        
        let options = new RequestOptions({
            headers: headers
        }); // Create a request option
        
        this.http.get("http://localhost:4200/api/getCharacter/" + characterName, options)
            .map(response => response.json())
            .subscribe(
                data => {
                    let character = new Character();
                    character.name = data.name;
                    console.log(character.name);
                }
            );
    }

    ngOnInit() {}
}