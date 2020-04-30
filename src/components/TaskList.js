import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component{

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);        //declared const b/c this is an int, and it won't be reassigned
        let taskList = this.props.tasks;    //will update taskList to remove item using splice
        taskList.splice(taskIndex, 1);      //at this position (taskIndex), remove one item
        console.log(this);                  //this refers to the current object taskList or this.props.tasks. tasks was the array initially declared in App component
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);        //calling this function from the parent with the use of props and a call back. this.props refers to the current property of the array object after it was spliced
    }

    render(){
        const taskItems = this.props.tasks.map(task => {
            return <TaskItem task = {task} key = {task.id} markdone={this.markDone} />

        });
        return(
            <ul className = "task-list list-group">
                {taskItems}
            </ul>
        )
    }
}

export default TaskList;