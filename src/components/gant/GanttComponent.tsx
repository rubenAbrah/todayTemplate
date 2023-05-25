import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing,
} from 'devextreme-react/gantt';

import {
  tasks, dependencies, resources, resourceAssignments,
} from '/@/data/ganttData.js';

function App() {
  return (
    <Gantt
      taskListWidth={500}
      scaleType="days"
      height={700}
      rootValue={-1}
      >

      <Tasks dataSource={tasks} />  
      <Column dataField="title" caption="Subject" width={200} />
      <Column dataField="start" caption="Start Date" />
      <Column dataField="end" caption="End Date" />
 
    </Gantt>
  );
}

export default App;
