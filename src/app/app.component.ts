import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public formEditNote:any = {};
	formCreateNote: NgForm
	numberspage=5+'a'
	title = 'Creador de Notas';
	nameLists='Lista de Pagos Pendientes'
	Lists=[
	{id:1,name:'List one',description:'This is description 1',cost:5000},
	{id:2,name:'List Two',description:'This is description 2',cost:5000},
	{id:3,name:'List Three',description:'This is description 3',cost:5000},
	{id:5,name:'List1 For',description:'This is description 4',cost:5000},
	{id:6,name:'List2 For',description:'This is description 5',cost:5000},
	{id:7,name:'List3 For',description:'This is description 6',cost:5000},
	{id:8,name:'List5 For',description:'This is description 7',cost:1111},
	]
	newlist={id:null,name:null,description:null,cost:0}
	editList={id:null,name:null,description:null,cost:0}
	show_form=false
	show_form_edit=false
	nameListEdit=null
	cacheList=null
	addNote() {
		this.newlist={id:null,name:null,description:null,cost:0}
		this.show_form_edit=false;
		this.show_form ? this.show_form=false: this.show_form=true
	}
	cancel(){
		this.show_form=false
	}
	onSubmit(formCreateNote: NgForm){
	 console.log('se metioooo 2')

		this.show_form_edit=false;
		this.newlist.id=Math.floor(Math.random() * 588) + 615,
		this.newlist.name=formCreateNote.value.nameList,
		this.newlist.description=formCreateNote.value.descriptionList,
		this.newlist.cost=formCreateNote.value.CostList,
		this.Lists.push(this.newlist)
		this.newlist={id:null,name:null,description:null,cost:0}
		formCreateNote.reset()
		this.show_form=false
	}
	editOneList(data){
		this.cacheList=data

		this.show_form=false
		this.show_form_edit=true
		this.editList=data

	}
	saveEditOneList(data){
		console.log('veaamoslo',this.formCreateNote)
	}
	cancelEditOneList(idlistDAta){
		this.Lists.forEach((e,i)=>{
			 if(e.id===idlistDAta) {
			 	console.log('see emteee paaa',this.cacheList)
			 	this.Lists.splice(i,1)

			 }

		})
	}

	
}
