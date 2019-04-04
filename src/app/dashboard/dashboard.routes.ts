import { Routes } from '@angular/router';
import { ChartComponent } from '../income-expense/chart/chart.component';
import { IncomeExpenseComponent } from '../income-expense/income-expense.component';
import { DetailComponent } from '../income-expense/detail/detail.component';



export const dashboardRoutes: Routes = [

    { path: '', component: ChartComponent },
    { path: 'income-expense', component: IncomeExpenseComponent },
    { path: 'detail', component: DetailComponent },
];
