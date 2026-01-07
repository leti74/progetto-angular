import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { FruitService } from '../../services/fruit-service';
import { FruitList } from '../../components/fruit-list/fruit-list';
import { catchError, finalize, Observable, of, switchMap } from 'rxjs';
import { Fruit } from '../../models/fruit.model';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@Component({
  selector: 'app-search-fruit',
  imports: [CommonModule, FormsModule, FruitList, MatAnchor, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './search-fruit.html',
  styleUrl: './search-fruit.css',
})
export class SearchFruit {
searchTerm = signal('')
fruits$! : Observable<Fruit[]>
loading= false
hasSearched= false
constructor(private fruitService: FruitService){}


  onSearch(){
   
    const term = this.searchTerm()
    if(!term){
      this.fruits$ = of([])
      return
    } 

    this.loading= true;
    this.hasSearched= true;
      this.fruits$= this.fruitService.getFruitByName(term).pipe(
        switchMap(fruit => of([fruit])),
        catchError(()=> of([])),
        finalize(()=>{
          this.loading= false
        })
        
      ) 
      
    
  
  }
}
