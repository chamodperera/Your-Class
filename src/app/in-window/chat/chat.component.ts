import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

export interface User { name: string; id: string; category:string; }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore, private router:Router) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
