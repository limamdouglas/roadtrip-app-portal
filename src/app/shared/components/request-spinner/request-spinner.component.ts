import { SpinnerDTO } from './spinner-dto';
import { RequestSpinnerService } from './request-spinner.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';

@Component({
  selector: 'app-request-spinner',
  templateUrl: './request-spinner.component.html',
  styleUrls: ['./request-spinner.component.scss']
})
export class RequestSpinnerComponent {
  @Input() fullScreen: boolean;
  @Input() name: string;
  @Input() loadingText: string;
  @Input() type: string;
  @Input() size: string;
  constructor(private spinner: NgxSpinnerService,
    private requestSpinnerService: RequestSpinnerService) {
      this.requestSpinnerService.getData().subscribe((data: SpinnerDTO) => {
        if (data.show) {
          this.spinner.show(data.name);
        } else {
          this.spinner.hide(data.name);
        }
      });
    if(!this.type)
      this.type = "line-scale";
    if(!this.size)
      this.size = "small"
  }

  ngOnInit() {
  }

  getSpinner(name: string) : Observable<NgxSpinner> {
    return this.spinner.getSpinner(name);
  }
}
