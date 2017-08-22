import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'character' })

export class CharacterPipe implements PipeTransform {
    transform(characters: any, searchText: any): any {
        if(searchText == null) return characters;
    
        return characters.filter(function(character){
            return character.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }
}
