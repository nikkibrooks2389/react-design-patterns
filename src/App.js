import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutIndex from './views/layoutsviews/LayoutIndex';
import SplitScreenLayout from './views/layoutsviews/SplitScreenLayout';
import ListsLayout from './views/layoutsviews/ListsLayout';
import ModalLayout from './views/layoutsviews/ModalLayout';
import ContainerIndex from './views/containerviews/ContainerIndex';
import CurrentUserLoader from './views/containerviews/CurrentUserLoader';
import UserLoader from './views/containerviews/UserLoader';
import ResourceLoader from './views/containerviews/ResourceLoader';
import DataSourceComponent from './views/containerviews/DataSourceComponent';
import DataSourceLocalStorage from './views/containerviews/DataSourceLocalStorage';
import DataSourceWithRenderComponent from './views/containerviews/DataSourceWithRenderComponent';
import Home from './views/Home';


import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="examples">
                    <Route index element={<Example1 />} />
                    <Route path="example2" element={<Example2 />} />
                </Route>  */}
                <Route path="/layoutsviews">
                    <Route index element={<LayoutIndex />} />
                    <Route path="splitscreen" element={<SplitScreenLayout />} />
                    <Route path="lists" element={<ListsLayout />} />
                    <Route path="modal" element={<ModalLayout />} />
                </Route>
                <Route path="/containerviews">
                    <Route index element={<ContainerIndex />} />
                    <Route path="loadercomponentcurrentuser" element={<CurrentUserLoader />} />
                    <Route path="loadercomponentuser" element={<UserLoader />} />
                    <Route path="loadercomponentresourcedata" element={<ResourceLoader />} />
                    <Route path="datasourcecomponent" element={<DataSourceComponent />} />
                    <Route path="datasourcelocalstorage" element={<DataSourceLocalStorage />} />
                    <Route path="datasourcewithrenderpattern" element={<DataSourceWithRenderComponent />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;