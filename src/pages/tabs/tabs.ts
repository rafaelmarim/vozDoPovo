import { Component } from '@angular/core';
import { NoticiasPage } from "../noticias/noticias";
import { DununciarPage } from "../dununciar/dununciar";
import { ParceirosPage } from "../parceiros/parceiros";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab4Root = NoticiasPage;
  tab5Root = DununciarPage;
  tab6Root = ParceirosPage;

  constructor() {

  }
}
