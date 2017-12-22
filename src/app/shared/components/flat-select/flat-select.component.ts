import { Component, ElementRef, Input, OnChanges, SimpleChanges, SimpleChange } from "@angular/core";

@Component({
    selector: "element-flat-select",
    templateUrl: "./flat-select.component.html",
    styleUrls: ["./flat-select.component.less"]
})
export class FlatSelectComponent implements OnChanges{
    @Input() list : Array<Object> = [];
    @Input() label : string;
    @Input() id : string | number;
    @Input() result : Array<Object> = [];
    private filteredList : Array<Object> = [];

    constructor(
        private el : ElementRef
    ){}

    private toResult(item){
        this.result.push(item);
        const resultsIds = this.result.map(el=>el[this.id]);
        this.filteredList = this.filteredList.filter(el => !(resultsIds.indexOf(el[this.id])+1)).sort();
    }

    ngOnChanges(changes : SimpleChanges){
        const _filteredList : SimpleChange = changes.list;
        let resultIds = this.result.map( item => item[this.id]);
        console.log(_filteredList.currentValue);
        this.filteredList = _filteredList.currentValue.filter(item => !(resultIds.indexOf(item[this.id])+1)).sort();
    }

    private removeFromResult(dItem){
        this.filteredList.push(dItem);
        const filteredIds = this.filteredList.map(el=>el[this.id]);
        this.result = this.result.filter(el => !(filteredIds.indexOf(el[this.id])+1)).sort();
    }
}