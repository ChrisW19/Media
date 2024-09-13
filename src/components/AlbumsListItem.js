import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem ({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemove = () => {
        removeAlbum(album);
    }

const header = <> 
                    <Button className="mr-2"  loading={results.isLoading} onClick={handleRemove}>
                        <GoTrashcan />
                    </Button>
                    {album.title}
                </>;

return (
        <ExpandablePanel key={album.id} header={header}>
            List of Album photos
        </ExpandablePanel>
    )
}

export default AlbumsListItem;