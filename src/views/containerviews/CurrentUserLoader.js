import { CurrentUserLoader } from "../../components/containercomponents/current-user-loader";
import { UserInfo } from "../../components/containercomponents/user-info"

const LoaderComponentCurrentUser = () => {
    return (
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
    );
}

export default LoaderComponentCurrentUser;