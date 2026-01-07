import { Component, OnInit } from '@angular/core';
import { FruitCard } from '../../components/fruit-card/fruit-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Fruit } from '../../models/fruit.model';
import { Observable } from 'rxjs';
import { FruitService } from '../../services/fruit-service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";
import { FruitList } from '../../components/fruit-list/fruit-list';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FruitCard, MatGridListModule, AsyncPipe,  FruitList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
fruits$!: Observable<Fruit[]>

constructor( private fruitService: FruitService){
  
}
  ngOnInit(): void {
    this.fruits$= this.fruitService.getAllFruits()
  }

}

