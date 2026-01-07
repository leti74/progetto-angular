import { Component } from '@angular/core';
import { Fruit } from '../../models/fruit.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../../services/fruit-service';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-fruit-detail',
  imports: [MatCardModule, AsyncPipe,],
  templateUrl: './fruit-detail.html',
  styleUrl: './fruit-detail.css',
})
export class FruitDetail {
  fruit$!: Observable<Fruit>;

  constructor(private fruitService: FruitService, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.fruit$ = this.fruitService.getFruitByName(name);
}
}
