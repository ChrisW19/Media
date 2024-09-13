import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";


function UsersListItem({user}) {
    const [doDeleteUser, isDeleteUser, error] = useThunk(removeUser);

    const handleClick = () => {
        doDeleteUser(user);
    }

    return (
        <div className="ml-4 mb-2 mr-4 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row item-center justify-between">
                    <Button className="mr-3" loading={isDeleteUser} onClick={handleClick}>
                        <GoTrashcan/>
                    </Button>
                    {user.name}
                    {error && <div>Error deleting user.</div>}
                </div>
            </div>    
        </div>
    ); 
}

export default UsersListItem;