import { UserLoader } from "../../components/containercomponents/user-loader";
import { UserInfo } from "../../components/containercomponents/user-info"

const LoaderComponentUser = () => {
    return (
        <UserLoader userId={"3"}>
            <UserInfo />
        </UserLoader>
    );
}

export default LoaderComponentUser;