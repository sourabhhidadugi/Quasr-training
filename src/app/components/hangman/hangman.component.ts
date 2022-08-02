import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  question: string = '';
  questions : string[] = [];
  guesses : string[] = [];
  category: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
