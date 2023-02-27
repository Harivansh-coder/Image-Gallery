import {create} from "zustand";

interface ImageGalleryState {
    query: string;
    showModal: boolean;
    images: [];
    setImage: (image: any) => void;
    setQuery: (query: string) => void;
    setShowModal: (showModal: boolean) => void;
};



export const useImageStore = create<ImageGalleryState>(set => ({
    query: "",
    images: [],
    setImage: (image) => set(state => ({ images: image})),
    setQuery: (query) => set(state => ({ query: query})),
    showModal: false,
    setShowModal: (showModal) => set(state => ({ showModal: showModal})),
}));








