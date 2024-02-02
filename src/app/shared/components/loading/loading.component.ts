import { Component, OnInit, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

  isLoading: boolean = false

  private loadingService = inject(LoadingService);

  ngOnInit(){
    this.loadingService.getLoadingState()
    .subscribe((isLoading) => {
      this.isLoading = isLoading 
    });
  }

}
