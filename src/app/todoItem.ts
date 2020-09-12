// New file that has the defintion of a todi item in it

export class TodoItem {

    task: string;
    complete: boolean;

    constructor(taskVal: string, compVal: boolean = false) {
        this.task = taskVal;
        this.complete = compVal;
    }

}