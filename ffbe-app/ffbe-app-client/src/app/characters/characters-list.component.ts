import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Character } from './character';
import { CharacterPipe } from './character.pipe';
import { CharacterService } from './character.service';

@Component({
    selector: 'app-get-characters-images',
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

    imageData: string[] = [];
    imageName: string[] = [];

    characters: Character[] = [];

    constructor(private http: Http, private sanitizer: DomSanitizer, private characterService: CharacterService, private router: Router) {
        
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
                            character.skills = datas[currentData].skills;
                            this.characters.push(character);
                            this.imageData.push(this.sanitizer.sanitize(SecurityContext.URL, `data:image/png;base64,${datas[currentData].imageByteArray}`));
                            this.imageName.push(datas[currentData].name);
                        }
                        
                        this.characters.sort(function(a, b) {
                            if(a.name < b.name) {
                                return -1;    
                            }
                            if(a.name > b.name) {
                                return 1;   
                            }
                            
                            return 0;
                        });
                    }
                }
            );
    }

    getCharacterDetails(characterName) {
        for(let character of this.characters) {
            if(character.name == characterName) {
                this.characterService.character = character;
                this.router.navigateByUrl('/getCharacter');
            }
        }
    }

    ngOnInit() {}
}