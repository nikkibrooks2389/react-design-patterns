
// Importing the necessary components and libraries
import { UserInfo } from "../../components/containercomponents/user-info";
import { DataSourceWithRender } from "../../components/containercomponents/data-source-with-render";
import axios from "axios";


const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

const DataSourceWithRenderComponent = () => {
    return (
        <>
            {/* Rendering the DataSourceWithRender component */}
            <DataSourceWithRender
                getData={() => getDataFromServer("/users/2")} // Passing a function that fetches data from the server
                render={(resource) => <UserInfo user={resource} />} // Rendering the UserInfo component with the fetched data
            >

            </DataSourceWithRender>
        </>
    );
}

export default DataSourceWithRenderComponent;