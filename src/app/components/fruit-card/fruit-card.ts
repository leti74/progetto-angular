import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Fruit } from '../../models/fruit.model';
@Component({
  selector: 'app-fruit-card',
  standalone: true,
  imports: [MatCardModule, RouterModule, CommonModule],
  templateUrl: './fruit-card.html',
  styleUrl: './fruit-card.css',
})
export class FruitCard {
@Input() fruit!: Fruit
}
