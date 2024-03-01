import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizItemModule} from "../quiz-item/quiz-item.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class ResultItemModule {
    private _id!: number;
    private _userAns!: string;
    private _quizItem!: QuizItemModule;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userAns(): string {
        return this._userAns;
    }

    set userAns(value: string) {
        this._userAns = value;
    }


    get quizItem(): QuizItemModule {
        return this._quizItem;
    }

    set quizItem(value: QuizItemModule) {
        this._quizItem = value;
    }
}
