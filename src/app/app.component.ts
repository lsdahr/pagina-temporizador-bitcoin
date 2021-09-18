import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Luis Fernando Soares da Hora da Silva - RA: 0050831911023";

  constructor(public timer: TimerService, 
 public bitcoinService: BitcoinService) {
    this.timer.start(1000);
  }

  ngOnInit() {
    this.bitcoinService.update();
  }

  updateBitCoinRates() {
    this.bitcoinService.update();
  }
}
