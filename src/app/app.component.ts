import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Creador de Notas';
	nameLists='Lista de Pagos Pendientes'
	Lists=[
	{id:1,name:'List one',description:'This is description 1',cost:5000},
	{id:2,name:'List Two',description:'This is description 2',cost:5000},
	{id:3,name:'List Three',description:'This is description 3',cost:5000},
	{id:4,name:'List1 For',description:'This is description 4',cost:5000},
	];
	
}
