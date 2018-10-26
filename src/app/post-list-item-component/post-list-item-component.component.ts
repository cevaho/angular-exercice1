import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() childPostTitle:string;
  @Input() childPostContent:string;
  @Input() childPostLoveIts:number;
  @Input() childPostCreated_at:string;
  constructor() { }

  ngOnInit() {
  }
  
  onLike(){
  			//console.log("on like tout");
			this.childPostLoveIts = this.childPostLoveIts + 1;
			console.log(this.childPostLoveIts);
		  }
		  
  onDislike(){
  			this.childPostLoveIts = this.childPostLoveIts - 1;
			console.log(this.childPostLoveIts);
		  }
}
