import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionModule} from "../question/question.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class QuizItemModule {
    private _id!: number;
    private _question!: QuestionModule;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get question(): QuestionModule {
        return this._question;
    }

    set question(value: QuestionModule) {
        this._question = value;
    }
}
