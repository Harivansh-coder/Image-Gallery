import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useImageStore } from "../store/imageState";
import Modal from "./Modal";

const ImageCard = (image: any) => {
  const showModal = useImageStore((state) => state.showModal);
  const setShowModal = useImageStore((state) => state.setShowModal);
  const setImage = useImageStore((state) => state.setImage);

  const openModal = (image: any) => {
    setShowModal(true);
    setImage(image.image);
  };

  return showModal ? (
    <div className="z-10 inset-0 overflow-y-auto">
      <Modal />
    </div>
  ) : (
    <div className="grid grid-cols-1 bg-white rounded-xl">
      <img
        src={image?.image.urls?.small}
        alt={image?.image?.alt_description}
        loading="lazy"
        className="rounded-t-xl"
        onClick={() => openModal(image)}
      />
      <div className="flex justify-between items-center p-2 mr-2">
        <div className="flex items-center font-mono text-xs lg:text-sm justify-start">
          <img
            src={image?.image?.user?.profile_image?.small}
            alt={image?.image?.user?.name}
            className="rounded-full w-8 h-8 mr-2"
          />

          {image?.image?.user?.name}
        </div>
        <div className="flex ml-2 items-center font-medium text-sm">
          <ThumbUpIcon fontSize="inherit" className="mr-1" />{" "}
          <div className="text-xs">{image?.image?.likes}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
