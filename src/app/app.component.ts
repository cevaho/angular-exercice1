import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular exercice1 par Cedric Van Hove';
  monQuoi='youpla';
  
  monArrayPost=[
  		{
  		title:'Mon premier post',
  		content:'Lorem Elsass ipsum wie semper dignissim gal knack Coope de Truchtersheim turpis, bissame Spatzle ftomi! Carola sed tristique hopla quam. hoplageiss lacus dolor gravida tchao bissame vielmols, leverwurscht morbi DNA',
		loveIts:0,
		created_at:new Date()
		},
  		{
		title:'Mon second post',
  		content:'Salu bissame rhoncus flammekueche Mauris Christkindelsmarik libero, rucksack tellus amet jetz gehts los schnaps Strasbourg merci vielmols id Chulien auctor, rechime messti de Bischheim commodo habitant schneck leo geiz yeuh.',
		loveIts:2,
		created_at:new Date()
		},
  		{
		title:'Mon troisieme post',
  		content:'Tellus kougelhopf meteor placerat so ullamcorper munster kartoffelsalad sit ornare Miss Dahlias hop non baeckeoffe blottkopf, Gal !',
		loveIts:0,
		created_at:new Date()
		}
  ];
  
  
}
