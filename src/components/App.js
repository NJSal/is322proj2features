import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import TaskList from './TaskList';
import BoardPage from './BoardPage';

class App extends React.Component{
    state = {
        tasks: [],
        errorMessage: '',
        view: 'gridview'
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response=>{
                this.setState({tasks: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }

    onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type:'task',
            column: 'todo'
        });

        this.setState({tasks});
    }


    taskListUpdate = (newList) =>{
        this.setState({tasks: newList});
    }

    viewChange = (view) => {
        this.setState({view});
    }

    wrapPage = (jsx) => {   //common wrapper: wrap page
        const { view } = this.state;
        return (
            <div className="container">     {/*want a class container*/}
                <PageTabs currentView={view}  //*PageTaps component
                          viewChange={this.viewChange.bind(this)}/>
                {jsx}     {/*content of that particular page*/}
            </div>
        );
    }

    render(){
        const {view} = this.state;
        console.log(this.state);

        switch (view){
            case 'gridview':
                return (this.wrapPage(
                    <BoardPage
                        tasks={this.state.tasks}
                        taskListUpdate={this.taskListUpdate}
                    />
                ));
            case 'listview':
                return (this.wrapPage(
                    <TaskList
                        tasks={this.state.tasks}
                        taskListUpdate={this.taskListUpdate}
                    />
                ));
            default:
                return (this.wrapPage(
                    <h1>Choose from the available views (Grid View or List View)</h1>
                ));
        }

    }
}

export default App;