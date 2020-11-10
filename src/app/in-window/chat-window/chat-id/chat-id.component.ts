import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-id',
  templateUrl: './chat-id.component.html',
  styleUrls: ['./chat-id.component.scss']
})
export class ChatIDComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    
  }

}
