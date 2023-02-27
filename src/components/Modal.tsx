import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import { useImageStore } from "../store/imageState";

const Modal = (currentImage: any) => {
  const setShowModal = useImageStore((state) => state.setShowModal);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          {" "}
          &#8203;
        </span>

        <div
          className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="grid grid-cols-1 bg-white rounded-xl">
                  <img
                    src={currentImage.currentImage.urls.full}
                    alt={currentImage.currentImage.alt_description}
                    loading="lazy"
                    className="rounded-xl"
                  />
                  <div className="flex justify-between items-center p-2 mr-2">
                    <div className="flex items-center font-mono text-xs lg:text-sm justify-start">
                      <img
                        src={currentImage.currentImage.user.profile_image.small}
                        alt={currentImage.currentImage.user.name}
                        className="rounded-full w-8 h-8 mr-2"
                      />

                      {currentImage.currentImage.user.name}
                    </div>
                    <div className="flex ml-2 items-center font-medium text-sm">
                      <DownloadIcon fontSize="small" className="mr-1" />
                      {""}
                      <div className="text-xs mr-2">
                        {currentImage.currentImage.downloads}
                      </div>
                      <ThumbUpIcon fontSize="inherit" className="mr-1" />{" "}
                      <div className="text-xs">
                        {currentImage.currentImage.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <IconButton aria-label="close" onClick={() => closeModal()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
