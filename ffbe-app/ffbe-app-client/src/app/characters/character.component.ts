import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
    selector: 'app-get-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

    character: Character;

    constructor(private characterService: CharacterService) {
        this.character = characterService.character;
        console.log(this.character.skills);
    }

    ngOnInit() {}
}