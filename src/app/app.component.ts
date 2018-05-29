import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	Lists
	constructor(public afDB: AngularFireDatabase) {
	   // this.Lists = afDB.list('notas').valueChanges();

	 	this.Lists=afDB.list('/notas').valueChanges()
 		console.log(this.Lists);	



	}

	formCreateNote: NgForm
	title = 'Creador de Notas';
	nameLists='Lista de Notas'

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
		this.newlist.id=Math.floor(Math.random() * 588) + 615,
		this.newlist.name=formCreateNote.value.nameList,
		this.newlist.description=formCreateNote.value.descriptionList,
		this.newlist.cost=formCreateNote.value.CostList,

	 	this.afDB.database.ref ('notas/' + this.newlist.id).set(this.newlist);
		this.newlist={id:null,name:null,description:null,cost:0}
		formCreateNote.reset()
		this.show_form=false

		/*this.show_form_edit=false;
		
		this.Lists.push(this.newlist)
		this.newlist={id:null,name:null,description:null,cost:0}
		formCreateNote.reset()
		this.show_form=false*/
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
	/*	this.Lists.forEach((e,i)=>{
			 if(e.id===idlistDAta) {
			 	console.log('see emteee paaa',this.cacheList)
			 	this.Lists.splice(i,1)

			 }

		})*/
	}

	
}
