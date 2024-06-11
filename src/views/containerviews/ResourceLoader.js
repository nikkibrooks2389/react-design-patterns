import { ResourceLoader } from "../../components/containercomponents/resource-loader";
import { UserInfo } from "../../components/containercomponents/user-info"
import { BookInfo } from "../../components/containercomponents/book-info"

const LoaderComponentUser = () => {
    return (
        <>
            <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
                <UserInfo />
            </ResourceLoader>
            <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
                <BookInfo />
            </ResourceLoader>
        </>
    );
}

export default LoaderComponentUser;