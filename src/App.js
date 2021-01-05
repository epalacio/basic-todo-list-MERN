import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import TaskList from './components/task-list.component';
import CreateTask from './components/create-task.component';
import EditTask from './components/edit-task.component';


//Main App
function App() {
  return (
    <div className='container'>
      <Route path= '/'exact component={TaskList}/>
      <Route path = '/create'exact component={CreateTask}/>
      {/* <Route path= '/edit/:id'exact component={EditTask}/> */}
    </div>
  );
};

export default App;
