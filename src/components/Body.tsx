import { useEffect, useCallback } from "react";
import getALLImages from "../utility/getAllImages";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import { useImageStore } from "../store/imageState";
import searchImages from "../utility/searchImages";

export default function Body() {
  const images = useImageStore((state) => state.images);
  const updateImages = useImageStore((state) => state.updateImages);
  const query = useImageStore((state) => state.query);
  const setImages = useImageStore((state) => state.setImages);

  // get all images from api for home page
  const fetchImages = useCallback(() => {
    const isSearch = query !== "";
    const res = isSearch ? searchImages(query) : getALLImages();

    res.then((data) => {
      isSearch ? updateImages(data) : setImages(data);
    });
  }, [query, setImages, updateImages]);

  console.log(images, "Images");

  // fetch images on page load
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="p-2">
      {images.length === 0 ? (
        <div className="text-2xl flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              200: 1,
              380: 2,
              750: 3,
              900: 4,
              1200: 5,
            }}
          >
            <Masonry gutter="10px">
              {images.length === 0 ? (
                <div className="text-2xl flex items-center justify-center h-screen">
                  Loading...
                </div>
              ) : (
                images?.map((image) => {
                  return (
                    <div
                      className="m-1 md:grid-cols-2 lg:grid-cols-4"
                      key={image.id}
                    >
                      <ImageCard image={image} />
                    </div>
                  );
                })
              )}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      )}
    </div>
  );
}
