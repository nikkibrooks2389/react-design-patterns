import { LargeAuthorListItem } from "../../components/listcomponent/authors/LargeListItems";
import { SmallAuthorListItem } from "../../components/listcomponent/authors/SmallListItems";
import { LargeBookListItem } from "../../components/listcomponent/books/LargeListItems";
import { SmallBookListItem } from "../../components/listcomponent/books/SmallListItems";
import { NumberedList } from "../../components/listcomponent/lists/Numbered";
import { RegularList } from "../../components/listcomponent/lists/Regular";
import { authors } from "../../components/listcomponent/data/authors";
import { books } from "../../components/listcomponent/data/books";

const ListsLayout = () => {
    return (
        <>
            <RegularList
                items={authors}
                sourceName={"author"}
                ItemComponent={SmallAuthorListItem}
            />
            <NumberedList
                items={authors}
                sourceName={"author"}
                ItemComponent={LargeAuthorListItem}
            />

            <RegularList
                items={books}
                sourceName={"book"}
                ItemComponent={SmallBookListItem}
            />

            <NumberedList
                items={books}
                sourceName={"book"}
                ItemComponent={LargeBookListItem}
            />
        </>
    );
}

export default ListsLayout;
