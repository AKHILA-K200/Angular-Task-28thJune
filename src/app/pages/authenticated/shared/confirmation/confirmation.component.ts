import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  @Input() confirmationMessage=''
  @Input() confirmButton=''
  @Input() cancelButton=''
  @Output() selectedOption=new EventEmitter<boolean>();
  visible: boolean = false;
  
  showDialog() {
      this.visible = true;
  }
  ngOnChanges(){
    this.showDialog();  
  }
  emitConfirmSelection(status:boolean){
  this.selectedOption.emit(status)
  }
}
