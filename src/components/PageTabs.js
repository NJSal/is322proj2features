import React from 'react';
import './PageTabs.css';

class PageTabs extends React.Component {

    isActiveTab(tabName) {                          //if nav-link active : "blue", then view set to that
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {                   //gets the event and the change of the view
        event.preventDefault();                      //prevent browser from reloading/refreshing
        this.props.onViewChange(tabName);            //set the view
    }

    render () {
        return (                                                    //swapping out different components
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('gridview')}
                       onClick={(e) => this.onTabClick(e, 'gridview')}>
                        Grid View
                    </a>
                </li>

                <li className='nav-item'>
                    <a className={this.isActiveTab('listview')}
                       onClick={(e) => this.onTabClick(e, 'listview')}>
                        List View
                    </a>
                </li>
                {/*******
                 <li className='nav-item'>
                 <a className={this.isActiveTab('addtask')}
                 onClick={(e) => this.onTabClick(e, 'addtask')}>
                 Add Task
                 </a>
                 </li>
                 *******/}
            </ul>
        )
    }
};


export default PageTabs;