import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";


function PhotosList({album}) {
    const {data, isFetching, error} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if(isFetching) {
        content = <Skeleton className="h-8 w-full" times={2} />
    } else if (error) {
        content = <div>Error loading photos</div>
    } else {
        content = data.map(photo => {
            return <PhotosListItem key={photo.id} photo={photo} />
         });
    }


    return <div>
        <div className='m-2 flex flex-row items-center justify-between'>
            <h4 className="text-md font-bold">Photos in {album.title}</h4>
            <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
         </div>
         <div className="mx-8 flex flex-row flex-wrap justify-center">
            {content}
         </div>
    </div>
}
export default PhotosList;