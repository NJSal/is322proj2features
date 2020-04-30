import React from 'react';
import TaskCardFormat from './TaskCardFormat';
import TaskItem from './TaskItem';

class BoardColumns extends React.Component{
    /****
     const tasksDue = this.props.tasks.filter(task => task.column === 'todo');
     const tasksInProgress = this.props.tasks.filter(task => task.column === 'in-progress');
     const tasksForReview = this.props.tasks.filter(task => task.column === 'review');
     const tasksDone = this.props.tasks.filter(task => task.column === 'done');
     *****/

    movetoDue =(task)=>{
        const taskIndex1 = this.props.tasks.findIndex(t=>t.id === task.id);
        let taskList = this.props.tasks;
        this.props.tasks[taskIndex1].column = "todo";
        console.log(this.props.tasks[taskIndex1].column);
        this.props.taskListUpdate(taskList);
    }

    movetoInProgress = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        this.props.tasks[taskIndex].column = "in-progress"; //assign column attribute the value of "in-progress"
        console.log(this.props.tasks[taskIndex].column);
        this.props.taskListUpdate(taskList);
    }

    movetoReview = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        this.props.tasks[taskIndex].column = "review";
        console.log(this.props.tasks[taskIndex].column);
        this.props.taskListUpdate(taskList);
    }

    movetoDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        this.props.tasks[taskIndex].column = "done";
        console.log(this.props.tasks[taskIndex].column);
        this.props.taskListUpdate(taskList);
    }

    render(){

        const tasksDue = this.props.tasks.filter(task => task.column === 'todo');
        const tasksInProgress = this.props.tasks.filter(task => task.column === 'in-progress');
        const tasksForReview = this.props.tasks.filter(task => task.column === 'review');
        const tasksDone = this.props.tasks.filter(task => task.column === 'done');

        const TasksDue = tasksDue.map(task => {
            return <TaskCardFormat
                task={task}
                key={task.id}
                type={task.type}
                movetoDue = {this.movetoDue}
                movetoInProgress={this.movetoInProgress}
                movetoReview = {this.movetoReview}
                movetoDone = {this.movetoDone}
            />
        });

        const TasksInProgress = tasksInProgress.map(task => {
            return<TaskCardFormat
                task={task}
                key={task.id}
                type={task.type}
                movetoDue = {this.movetoDue}
                movetoInProgress={this.movetoInProgress}
                movetoReview = {this.movetoReview}
                movetoDone = {this.movetoDone}
            />
        });

        const TasksforReview = tasksForReview.map(task => {
            return<TaskCardFormat
                task={task}
                key={task.id}
                type={task.type}
                movetoDue = {this.movetoDue}
                movetoInProgress={this.movetoInProgress}
                movetoReview = {this.movetoReview}
                movetoDone = {this.movetoDone}
            />
        });

        const TasksCompleted = tasksDone.map(task => {
            return<TaskCardFormat
                task={task}
                key={task.id}
                type={task.type}
                movetoDue = {this.movetoDue}
                movetoInProgress={this.movetoInProgress}
                movetoReview = {this.movetoReview}
                movetoDone = {this.movetoDone}
            />
        });

        return(
            <div className="container">
                <div className="card-column" style={{display:'flex'}}>
                    <div className="card-column" >
                        <h2>To Do</h2>
                        {TasksDue}
                    </div>
                    <div className="card-column" >
                        <h2>In Progress</h2>
                        {TasksInProgress}
                    </div>
                    <div className="card-column" >
                        <h2>Review</h2>
                        {TasksforReview}
                    </div>
                    <div className="card-column" >
                        <h2>Done</h2>
                        {TasksCompleted}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardColumns;