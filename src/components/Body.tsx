import { useState, useEffect, useCallback } from "react";
import getALLImages from "../utility/getAllImages";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

export default function Body() {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(() => {
    getALLImages()
      .then((data: []) => {
        setImages((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    //console.log("useEffect");
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
                images.map((image: any) => {
                  //console.log(image);
                  return (
                    <div className="m-1 md:grid-cols-2 lg:grid-cols-4">
                      <ImageCard key={image.id} image={image} />
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
