import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";


function UsersListItem({user}) {
    const [doDeleteUser, isDeleteUser, error] = useThunk(removeUser);

    const handleClick = () => {
        doDeleteUser(user);
    }

    const header = <>
                    <Button className="mr-3" loading={isDeleteUser} onClick={handleClick}>
                        <GoTrashcan/>
                    </Button>
                    <h4 className="text-lg font-bold">{user.name}</h4>
                    {error && <div>Error deleting user.</div>}
                </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    ); 
}

export default UsersListItem;