import React from 'react';
import Layout from './containers/Layout/Layout';

import Tasks from './containers/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Layout>
      <Tasks/>
        
      </Layout>
    </div>
  );
}

export default App;
