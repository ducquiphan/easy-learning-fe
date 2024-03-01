import { Component, Input } from '@angular/core';
import { QuestionModule } from 'src/app/models/question/question.module';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() question!:QuestionModule;
  round(){
    document.getElementById(this.question.id + "")?.classList.toggle('is-flipped');
  }
}
