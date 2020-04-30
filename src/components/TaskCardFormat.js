import React from 'react';

const TaskCardFormat = props =>{
    return(
        <div className = "card " style={{width: "18rem"}}>
            <div className="card-body" id={props.task.column}>
                <h5 className="card-title text-center">{props.task.title}</h5>
                <p className="card-text pt-3">id: {props.task.id}</p>
                <p className="card-text">type: {props.task.type}</p>


                <button type="button"
                        onClick={() => props.movetoDue(props.task)}
                        className="btn btn-primary" style={{display:'flex'}}>

                    Due
                </button>

                <button type="button"
                        onClick={() => props.movetoInProgress(props.task)}
                        className="btn btn-primary" style={{display:'flex'}}>

                    In Progress
                </button>
                <button type="button"
                        onClick={() => props.movetoReview(props.task)}
                        className="btn btn-primary" style={{display:'flex'}}>

                    For Review
                </button>
                <button type="button"
                        onClick={() => props.movetoDone(props.task)}
                        className="btn btn-primary" style={{display:'flex'}}>

                    Completed
                </button>

            </div>
        </div>
    );
}

export default TaskCardFormat;