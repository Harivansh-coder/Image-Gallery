import {create} from "zustand";

interface ImageState {
    query: string;
    images: [];
    setImage: (image: any) => void;
    setQuery: (query: string) => void;
};



export const useImageStore = create<ImageState>(set => ({
    query: "",
    images: [],
    setImage: (image) => set(state => ({ images: image})),
    setQuery: (query) => set(state => ({ query: query})),
}));








