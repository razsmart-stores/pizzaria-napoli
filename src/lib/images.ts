// src/lib/images.ts

export const IMAGES = {
  logo: {
    light: "/images/logo-light.svg", // Logo for light mode
    dark: "/images/logo-dark.svg",   // Logo for dark mode
  },
  hero: {
    // Keep this for the About section if needed, or remove if unused
    background: "/images/hero/pizza-background.jpg",
    // Add an array for the carousel slides
    carousel: [
      {
        src: "/images/hero/hero-1.jpg",
        alt: "Delicious pizza with fresh basil and mozzarella",
      },
      {
        src: "/images/hero/hero-2.jpg",
        alt: "Close-up of a wood-fired pizza with pepperoni",
      },
      {
        src: "/images/hero/hero-3.jpg",
        alt: "Family enjoying a meal at Pizzaria Napoli",
      },
      {
        src: "/images/hero/hero-4.jpg",
        alt: "Artisanal pizza being prepared in the kitchen",
      },
    ],
  },
  about: {
    chef: "/images/about/chef-portrait.jpg",
  },
  menu: {
    margherita: "/images/menu/margherita.jpg",
    pepperoni: "/images/menu/pepperoni.jpg",
    quatroQueijos: "/images/menu/quatro-queijos.jpg",
    portuguesa: "/images/menu/portuguesa.jpg",
    calabresa: "/images/menu/calabresa.jpg",
    frangoCatupiry: "/images/menu/pizza-doce-chocolate.jpg",
    chocolate: "/images/menu/pizza-doce-banana.jpg",
  },
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/gallery/gallery-10.jpg",
    "/images/gallery/gallery-11.jpg",
    "/images/gallery/gallery-12.jpg",
  ],
  icons: {
    whatsapp: "/images/icons/whatsapp-icon.svg",
    instagram: "/images/icons/instagram-icon.svg",
    facebook: "/images/icons/facebook-icon.svg",
  },
};
