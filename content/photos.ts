export type Photo = {
  id: string;
  src: string;
  alt: string;
  kind: "photograph" | "illustration";
};

export const galleryPhotos: Photo[] = [
  {
    id: "13",
    src: "/images/gallery/13.jpg?v=2",
    alt: "Dining at Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "12",
    src: "/images/gallery/12.jpg?v=2",
    alt: "Candlelight, a rose, and Italian wine on the table",
    kind: "photograph",
  },
  {
    id: "1",
    src: "/images/gallery/1.jpg?v=2",
    alt: "Tomato stew with rosemary potatoes",
    kind: "photograph",
  },
  {
    id: "2",
    src: "/images/gallery/2.jpg?v=2",
    alt: "A prepared plate at Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "3",
    src: "/images/gallery/3.jpg?v=2",
    alt: "Italian cuisine plated for dinner",
    kind: "photograph",
  },
  {
    id: "4",
    src: "/images/gallery/4.jpg?v=2",
    alt: "Seafood pasta with shrimp and scallops",
    kind: "photograph",
  },
  {
    id: "5",
    src: "/images/gallery/5.jpg?v=2",
    alt: "A pasta course at the restaurant",
    kind: "photograph",
  },
  {
    id: "6",
    src: "/images/gallery/6.jpg?v=2",
    alt: "Dinner service at Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "7",
    src: "/images/gallery/7.jpg?v=2",
    alt: "Table setting with wine and linen",
    kind: "photograph",
  },
  {
    id: "8",
    src: "/images/gallery/8.jpg?v=2",
    alt: "An antipasto or pasta course",
    kind: "photograph",
  },
  {
    id: "9",
    src: "/images/gallery/9.jpg?v=2",
    alt: "Food from the kitchen at Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "10",
    src: "/images/gallery/10.jpg?v=2",
    alt: "The dining room with a table set for dinner",
    kind: "photograph",
  },
  {
    id: "11",
    src: "/images/gallery/11.jpg?v=2",
    alt: "Interior of Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "16",
    src: "/images/gallery/16.jpg?v=2",
    alt: "Evening atmosphere in the restaurant",
    kind: "photograph",
  },
  {
    id: "17",
    src: "/images/gallery/17.jpg?v=2",
    alt: "A dish prepared at Mamma Luisa",
    kind: "photograph",
  },
  {
    id: "18",
    src: "/images/gallery/18-1.jpg?v=2",
    alt: "Restaurant photography from Mamma Luisa",
    kind: "photograph",
  },
];

export const images = {
  hero: "/images/gallery/10.jpg?v=2",
  pasta: "/images/gallery/4.jpg?v=2",
  secondi: "/images/gallery/1.jpg?v=2",
  wine: "/images/gallery/12.jpg?v=2",
  dessert: "/images/gallery/7.jpg?v=2",
  privateDining: "/images/gallery/10.jpg?v=2",
  atmosphere: "/images/gallery/12.jpg?v=2",
  house: "/images/brand/mama-luisa.jpg?v=2",
  logoArt: "/images/brand/logo-art.jpg?v=2",
  menuBanner: "/images/pages/Mamma-Luisa_18.jpg?v=2",
  wineBanner: "/images/pages/Mamma-Luisa_13.jpg?v=2",
  aboutBanner: "/images/pages/Mamma-Luisa_47.jpg?v=2",
  contactBanner: "/images/pages/contactus.jpg?v=2",
  reservationsBanner: "/images/pages/Mamma-Luisa_56-1.jpg?v=2",
  photosBanner: "/images/pages/mama-photos.jpg?v=2",
  giftsBanner: "/images/pages/Mamma-Luisa_03.jpg?v=2",
  featureBg: "/images/pages/feature.jpg?v=2",
  og: "/images/gallery/10.jpg?v=2",
} as const;
