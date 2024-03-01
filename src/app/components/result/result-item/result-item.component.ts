import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ResultItemModule} from "../../../models/result-item/result-item.module";
import {QuestionModule} from "../../../models/question/question.module";
import {UserModule} from "../../../models/user/user.module";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit, AfterViewInit{
  @Input() resultItem!:ResultItemModule;
  @Input() questionNumber!:number;
  isDisabled: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.checkAnswer();
  }
  ngOnInit() {

  }

  checkAnswer(){
    if (this.resultItem.userAns.includes("correct")){
      let component = document.getElementById("flexRadioDefault4_"+(this.questionNumber+1));
      component.setAttribute("checked","true");
      component.parentNode.lastElementChild.classList.add("correct");
    }else if(this.resultItem.userAns.includes("A")){
      let component = document.getElementById("flexRadioDefault1_"+(this.questionNumber+1));
      component.setAttribute("checked","true");
      component.parentNode.lastElementChild.classList.add("inCorrect");
      let correctComponent = document.getElementById("flexRadioDefault4_"+(this.questionNumber+1));
      correctComponent.parentNode.lastElementChild.classList.add("correct");
    }else if(this.resultItem.userAns.includes("B")){
      let component = document.getElementById("flexRadioDefault2_"+(this.questionNumber+1));
      component.setAttribute("checked","true");
      component.parentNode.lastElementChild.classList.add("inCorrect");
      let correctComponent = document.getElementById("flexRadioDefault4_"+(this.questionNumber+1));
      correctComponent.parentNode.lastElementChild.classList.add("correct");
    }else if(this.resultItem.userAns.includes("C")){
      let component = document.getElementById("flexRadioDefault3_"+(this.questionNumber+1));
      component.setAttribute("checked","true");
      component.parentNode.lastElementChild.classList.add("inCorrect");
      let correctComponent = document.getElementById("flexRadioDefault4_"+(this.questionNumber+1));
      correctComponent.parentNode.lastElementChild.classList.add("correct");
    }
    this.isDisabled = true;
  }

}
