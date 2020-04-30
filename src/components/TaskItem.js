import React from 'react';
import TaskCardFormat from './TaskCardFormat'


const TaskItem = (props) =>{

    switch(props.task.column){
        case 'todo':
            return(
                <TaskCardFormat>
                    <button type="button"
                            OnClick ={() => props.movetoInProgress(props.task)}
                            className = "btn btn-primary" style={{ float: 'right'}}>

                        In Progress
                    </button>
                </TaskCardFormat>
            );

        case 'in-progress':
            return(
                <TaskCardFormat>
                    <button type="button"
                            OnClick ={() => props.movetoReview(props.task)}
                            className = "btn btn-primary" style={{ float: 'right'}}>

                        For Review
                    </button>

                    <button type="button"
                            OnClick ={() => props.movetoDue(props.task)}
                            className = "btn btn-primary" style={{ float: 'right'}}>

                        Due
                    </button>
                </TaskCardFormat>
            );

        case 'review':
            return(
                <TaskCardFormat>
                    <button type="button"
                            onClick={() => props.movetoDone(props.task)}
                            className="btn btn-primary" style={{float: 'right'}}>

                        Completed
                    </button>

                    <button type="button"
                            onClick={() => props.movetoInProgress(props.task)}
                            className="btn btn-primary" style={{float: 'right'}}>

                        In Progress
                    </button>
                </TaskCardFormat>
            );

        default:
            return(
                <TaskCardFormat>
                    <button type="button"
                            onClick={() => props.movetoReview(props.task)}
                            className="btn btn-primary" style={{float: 'right'}}>

                        For Review
                    </button>
                </TaskCardFormat>
            );

    }

    /*****
    if(props.task.column === "todo")
        return(
            <TaskCardFormat>
                <button type="button"
                        OnClick ={() => props.movetoInProgress(props.task)}
                        className = "btn btn-primary" style={{ float: 'right'}}>

                    In Progress
                </button>
            </TaskCardFormat>
        );

    else if(props.task.column === "in-progress")
        return(
            <TaskCardFormat>
                <button type="button"
                        OnClick ={() => props.movetoReview(props.task)}
                        className = "btn btn-primary" style={{ float: 'right'}}>

                    For Review
                </button>

                <button type="button"
                        OnClick ={() => props.movetoDue(props.task)}
                        className = "btn btn-primary" style={{ float: 'right'}}>

                    Due
                </button>
            </TaskCardFormat>
        );
    else if(props.task.column === "review")
        return(
            <TaskCardFormat>
                <button type="button"
                        onClick={() => props.movetoDone(props.task)}
                        className="btn btn-primary" style={{float: 'right'}}>

                    Completed
                </button>

                <button type="button"
                        onClick={() => props.movetoInProgress(props.task)}
                        className="btn btn-primary" style={{float: 'right'}}>

                    In Progress
                </button>
            </TaskCardFormat>
        );
    else
        return(
            <TaskCardFormat>
                <button type="button"
                        onClick={() => props.movetoReview(props.task)}
                        className="btn btn-primary" style={{float: 'right'}}>

                    For Review
                </button>
            </TaskCardFormat>
        )
     ******/
};

export default TaskItem;