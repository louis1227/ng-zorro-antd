import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-clickable',
  template: `
    <a href="#here">
      <nz-badge [nzCount]="5">
        <ng-template #content>
          <a class="head-example"></a>
        </ng-template>
      </nz-badge>
    </a>
  `,
  styles  : [ `
    :host ::ng-deep .ant-badge {
      margin-right: 16px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 6px;
      background: #eee;
      display: inline-block;
    }
  ` ]
})

export class NzDemoBadgeClickAbleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

