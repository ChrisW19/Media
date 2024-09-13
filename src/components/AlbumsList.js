import {useFetchAlbumsQuery, useAddAlbumMutation} from '../store';
import Skeleton from './Skeleton';
import Button from "./Button";
import AlbumsListItem from './AlbumsListItem';


function AlbumsList ({user}) {
    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if(isFetching) {
        content = <Skeleton className="h-8 w-full" times={3} />
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content = data.map(album => {
           return <AlbumsListItem key={album.id} album={album} />
        })
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h4 className="text-md font-bold">Album List</h4>
            <Button loading={results.isFetching} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default AlbumsList;