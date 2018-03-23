import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BidsPage } from '../bids/bids';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BidsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
