import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab3Page } from './tab3.page';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { CartViewComponent } from '../cart/cart-view/cart-view.component';
import { Tab3PageRoutingModule } from './tab3-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
  
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [Tab3Page, CartViewComponent]
})
export class Tab3PageModule {}
