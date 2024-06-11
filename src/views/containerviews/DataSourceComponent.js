import { DataSource } from "../../components/containercomponents/data-source";
import { UserInfo } from "../../components/containercomponents/user-info"
// import { BookInfo } from "../../components/containercomponents/book-info"
import axios from "axios";

const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

const DataSourceComponent = () => {
    return (
        <>
            <DataSource
                getData={() => getDataFromServer("/users/2")}
                resourceName={"user"}
            >
                <UserInfo />
            </DataSource>

        </>
    );
}

export default DataSourceComponent;