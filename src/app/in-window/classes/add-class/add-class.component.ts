import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  addClass = {
    firstName : "",
    lastName : "",
    email : "",
    contactNo : "",
    title :"",
    grade : "",
    language : "",
    description:"",
  }

  constructor(public db: AngularFirestore) { }

  add_class(){
    this.db.collection("classes").add({
      firstName : this.addClass.firstName,
      lastName : this.addClass.lastName,
      email : this.addClass.email,
      contactNo : this.addClass.contactNo,
      title : this.addClass.title,
      grade : this.addClass.grade,
      language : this.addClass.language,
      description:this.addClass.description,
  })
  .then(function() {
      alert("Your Class is successfully Added");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
      alert("There Is An Error While Adding Your Class")
  });
}

  ngOnInit(): void {
  }

}
