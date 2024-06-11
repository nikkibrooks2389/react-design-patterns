import { DataSource } from "../../components/containercomponents/data-source";
import { UserInfo } from "../../components/containercomponents/user-info"
import axios from "axios";

const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

const getDataFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);

}

const Message = ({ msg }) => {
    return (
        <>
            <h1>{msg}</h1>
        </>
    );
}

const DataSourceLocalStorage = () => {
    return (
        <>
            <DataSource
                getData={() => getDataFromServer("/users/2")}
                resourceName={"user"}
            >
                <UserInfo />
            </DataSource>

            <DataSource
                getData={() => getDataFromLocalStorage("/users/2")}
                resourceName={"msg"}
            >
                <Message />
            </DataSource>

        </>
    );
}

export default DataSourceLocalStorage;