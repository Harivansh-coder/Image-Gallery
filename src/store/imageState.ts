import { create } from "zustand";

export interface ImageProps {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null | string;
  topic_submissions: Record<any, any>;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string |null;
    bio: string |null;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
        small: string;
        medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections:number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
      paypal_email: string | null;
    };
  };
  exif: {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    position: { latitude: string | null; longitude: string | null };
  };
  views: number;
  downloads: number;
}

interface ImageGalleryState {
  query: string;
  showModal: boolean;
  images: ImageProps[];
  image: ImageProps | undefined;
  setImages: (image: any) => void;
  updateImages: (image: any) => void;
  setQuery: (query: string) => void;
  setShowModal: (showModal: boolean) => void;
  setImage: (image: any) => void;
}

export const useImageStore = create<ImageGalleryState>((set) => ({
  query: "",
  images: [],
  setImages: (image) => set((state) => ({ images: image })),
  updateImages: (image) =>  set((state) => ({images: [state.images, ...image]})),
  setQuery: (query) => set((state) => ({ query: query })),
  showModal: false,
  setShowModal: (showModal) => set((state) => ({ showModal: showModal })),
  image: undefined, // Now Good now pls check popup
  setImage: (image) => set((state) => ({ image: image })),
}));
