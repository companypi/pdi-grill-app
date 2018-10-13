
//3. need to import the decorator, Component
import { Component } from '@angular/core';

//2. need a decorator so angular knows the class PostCreateComponent
@Component({
    //name starts with app- so no confusion with html
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})

//1. creating component by making a class
export class PostCreateComponent {
    enteredValue = '';
    newPost = '';

    onAddPost(){
        this.newPost = this.enteredValue;
    }
}