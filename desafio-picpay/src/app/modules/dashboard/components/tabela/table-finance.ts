import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { InterfaceFinanceObj } from './table-finance.interface';
import { CountryService } from './finance.service';
import { SortEvent, TableFinanceDirective } from './table-finance.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
	selector: 'table-finance',
	standalone: true,
	imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		TableFinanceDirective,
		NgbPaginationModule,
		NgIf,
	],
	templateUrl: './table-finance.html',
	providers: [CountryService, DecimalPipe],
})
export class TableFinance {
	countries$: Observable<InterfaceFinanceObj[]>;
	total$: Observable<number>;

	@ViewChildren(TableFinanceDirective) headers!: QueryList<TableFinanceDirective>;

  constructor(public service: CountryService, private router: Router) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}

  returnLoginPage() {
    this.router.navigate(['/login']);
  }
}
