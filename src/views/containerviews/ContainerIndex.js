import React from 'react';
import { Link } from 'react-router-dom';

const ContainerIndex = () => {
  return (
    <div>
      <h1>Containers</h1>
      <nav>
        <ul>
          <li>
            <Link to="loadercomponentuserdata">Loader Component User Data</Link>
          </li>
          <li>
            <Link to="loadercomponentcurrentuser">Loader Component Current User</Link>
          </li>
          <li>
            <Link to="loadercomponentresourcedata">Loader Component Resource Data</Link>
          </li>
          <li>
            <Link to="datasourcecomponent">Data Source Component</Link>
          </li>
          <li>
            <Link to="datasourcelocalstorage">Local Storage Data Loader Component</Link>
          </li>
          <li>
            <Link to="datasourcewithrenderpattern">Container Compoenent Datasource With Render Props Pattern</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ContainerIndex;