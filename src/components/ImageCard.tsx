import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ImageCard = (image: any) => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-xl">
      <img
        src={image.image.urls.small}
        alt={image.image.alt_description}
        loading="lazy"
        className="rounded-t-xl"
      />
      <div className="flex justify-between items-center p-2 mr-2">
        <div className="flex items-center font-mono text-xs lg:text-sm justify-start">
          <img
            src={image.image.user.profile_image.small}
            alt={image.image.user.name}
            className="rounded-full w-8 h-8 mr-2"
          />

          {image.image.user.name}
        </div>
        <div className="flex ml-2 items-center font-medium text-sm">
          <ThumbUpIcon fontSize="inherit" className="mr-1" />{" "}
          <div className="text-xs">{image.image.likes}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
