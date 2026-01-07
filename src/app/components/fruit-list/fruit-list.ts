import { Component, Input } from '@angular/core';
import { Fruit } from '../../models/fruit.model';
import { RouterLink, RouterModule } from '@angular/router';
import { FruitCard } from '../fruit-card/fruit-card';


@Component({
  selector: 'app-fruit-list',
  imports: [RouterLink, RouterModule, FruitCard, ],
  templateUrl: './fruit-list.html',
  styleUrl: './fruit-list.css',
})
export class FruitList {
@Input() fruits: Fruit[] | null = null
}
