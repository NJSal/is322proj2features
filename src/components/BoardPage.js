import React from 'react';

import BoardColumns from './BoardColumns';
import TaskItem from './TaskItem';

class BoardPage extends React.Component {
    /*****
     render() {
        return (
                    <div>
                        <BoardColumns
                            task={this.props.tasks}
                            taskListUpdate={this.props.taskListUpdate}
                        />
                    </div>
        );
    }
     ******/
    /*****
     const tasksDue = this.props.tasks.filter(task => task.column === 'todo');
     const tasksInProgress = this.props.tasks.filter(task => task.column === 'in-progress');
     const tasksForReview = this.props.tasks.filter(task => task.column === 'review');
     const tasksDone = this.props.tasks.filter(task => task.column === 'done');
     *****/

    render() {
        return(
            <div>
                <BoardColumns
                    tasks = {this.props.tasks}
                    taskListUpdate = {this.props.taskListUpdate}
                />
            </div>
        )
    }

}
export default BoardPage;
//return (


//<div><h1>My Task Board</h1>
//  <div className="container">
//    <div className="row">
//      <div className="col" id="Due">
//        <h2>To Do</h2>                                                                                                          {/***need additional functions to retrieve values from TaskList ****/}
//      <TaskList tasks={this.state.tasks} updateDueCol={this.updateColumn} columnName = "Due"/>
//</div>

//<div className="col" id="InDevelopment">
//  <h2>In Progress</h2>
//<TaskList tasks={this.state.tasks} taskListUpdate={this.taskListUpdate} columnName = "InDevelopMent"/>

// </div>

// <div className="col" id="ForReview">
//   <h2>Review</h2>
//     <TaskList tasks={this.state.tasks} taskListUpdate={this.taskListUpdate} columnName = "ForReview"/>

// </div>

// <div className="col" id="Completed">
//     <h2>Done</h2>
//     <TaskList tasks={this.state.tasks} taskListUpdate={this.taskListUpdate} columnName = "Completed"/>

// </div>

//  </div>
//   </div>
// </div>
//);