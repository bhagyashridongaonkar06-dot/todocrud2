const cl = console.log;
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todosArr } from 'src/app/const/todoArr';
import { ItodosArr } from 'src/app/model/todoInterface';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-todocrud1',
  templateUrl: './todocrud1.component.html',
  styleUrls: ['./todocrud1.component.scss']
})
export class Todocrud1Component implements OnInit {
  todosArr = todosArr

  @ViewChild('todoName')
  todoNameRef !: ElementRef

  @ViewChild('isActive')
  isActiveRef !: ElementRef

  isInEditMode :boolean = false
  updateId!: string;


  constructor(private _uuid : UuidService,
    private _snackbar : SnackbarService
   ) { }

  ngOnInit(): void {
  }

  onAddTodo(){
    let todo : ItodosArr ={
      todoName :  this.todoNameRef.nativeElement.value,
      todoId : this._uuid.getUUid(),
      isActive : this.isActiveRef.nativeElement.value
    }
    cl(todo)
    this.todosArr.unshift(todo)

    this._snackbar.snackbar(`New todo with name ${todo.todoName} created successsfully!!`)
    this.todoNameRef.nativeElement.value = ''
    this.isActiveRef.nativeElement.value = 'no'
  }

  onDeleteTodo(todoId : string){
    let getConfirm = confirm('are you sure you want to delete this todo')

      if(getConfirm){
        let getIndex = this.todosArr.findIndex(e => e.todoId === todoId)
      this.todosArr.splice(getIndex, 1)
      this._snackbar.snackbar(`todo with id ${todoId} deleted successfully!!`)
      }
  }

  onEditTodo(todo:ItodosArr){
      this.todoNameRef.nativeElement.value = todo.todoName
      this.isActiveRef.nativeElement.value = todo.isActive ? 'yes' : 'no'

      this.isInEditMode = true

      this.updateId = todo.todoId
  }

  onUpdateTodo(){
      cl(this.updateId)

      let updateObj : ItodosArr ={
        todoName : this.todoNameRef.nativeElement.value,
        todoId : this.updateId,
        isActive : this.isActiveRef.nativeElement.value === 'yes'
      }
      let getIndex = this.todosArr.findIndex(e => e.todoId === this.updateId)
      this.todosArr[getIndex] = updateObj

      this.isInEditMode = false
      this.updateId = ''

      this.todoNameRef.nativeElement.value = ''
      this.isActiveRef.nativeElement.value = ''
      this._snackbar.snackbar(`todo with name ${updateObj.todoName} updated successfully`)
  }

  onChangeCheck(todo : ItodosArr){
    todo.isActive = !todo.isActive 

    let getIdx = this.todosArr.findIndex(e => e.todoId === todo.todoId)
    this.todosArr[getIdx] = todo
      this._snackbar.snackbar(`Todo status with name ${todo.todoName} updated successfully`)

  }

}
