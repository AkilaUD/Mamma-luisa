export const site = {
  name: "Mamma Luisa",
  tagline: "Ristorante Italiano",
  fineDining: "Fine Dining",
  established: "1992",
  locationLabel: "Newport · Rhode Island",
  heroLine: "Italian dining in the heart of Newport",
  address: {
    street: "673 Thames Street",
    city: "Newport",
    state: "Rhode Island",
    zip: "02840",
    full: "673 Thames Street, Newport, Rhode Island 02840",
  },
  phone: {
    display: "(401) 848-5257",
    tel: "tel:4018485257",
    raw: "4018485257",
  },
  email: "mammaluisarest@gmail.com",
  website: "https://mammaluisa.com",
  hours: "Open for dinner at 5pm daily every day except Tuesdays & Wednesdays",
  hoursShort: "Dinner from 5 · Closed Tue & Wed",
  parking: "Limited parking available behind the building",
  about: {
    heading: "Since 1992",
    body: "In the old world, in a little village near Bologna, lives the real Mamma Luisa who cooked for her own restaurant for over forty years. In 1992 the next generation of family and friends decided to recreate in Newport the same authentic taste and atmosphere of northern Italian cuisine.",
    mark: "KL",
  },
  reservationPolicy:
    "Due to the size of the restaurant and in an effort to accommodate you, we require a credit card to secure your reservation. If you need to cancel your reservation for any reason, we ask that you do so at least 24 hours in advance. No-shows will be subject to a fee of $25 per person.",
  privateDining: "Exclusive space for small parties.",
  privateDiningDetail:
    "Host a quiet celebration or an intimate dinner in our private space. Tell us the size of your party, the occasion, and any preferences for the menu or wine — we will shape the evening with you.",
  giftCertificates: {
    copy: "Give the gift of a beautiful dining experience, the one you can't wait to give, and the one they can't wait to use.",
    detail:
      "Certificates are delivered by email and may be used for dinner at Mamma Luisa in Newport.",
    url: "https://squareup.com/gift/MLDXDPE5VKW1C/order",
  },
  links: {
    resy: "https://resy.com/cities/newport-ri/venues/mamma-luisa-restaurant",
    facebook: "https://www.facebook.com/mammaluisarest/",
    instagram: "https://www.instagram.com/mammaluisarest/",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1494.6959209817205!2d-71.3143088650818!3d41.4741039613654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe393586c593b65b0!2sMamma+Luisa+Ristorante+Italiano!5e0!3m2!1sen!2sin!4v1450553022712",
    mapsDirections:
      "https://www.google.com/maps/search/?api=1&query=Mamma+Luisa+673+Thames+Street+Newport+RI+02840",
  },
  features: [
    {
      number: "01",
      title: "Atmosphere",
      lines: ["Warm.", "Welcoming.", "Romantic."],
      alt: "Candlelight, wine, and a rose on the table",
    },
    {
      number: "02",
      title: "The Table",
      lines: ["Vegetarian and gluten-free options."],
      alt: "A pasta course plated for dinner",
    },
    {
      number: "03",
      title: "Take Out",
      lines: ["Fine Italian cooking at home."],
      alt: "A prepared plate ready from the kitchen",
    },
  ],
  nav: [
    { label: "Menu", href: "/menu" },
    { label: "Wine", href: "/wine" },
    { label: "The House", href: "/about" },
    { label: "Photos", href: "/photos" },
    { label: "Private Dining", href: "/private-dining" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: [
    { label: "Menu", href: "/menu" },
    { label: "Wine", href: "/wine" },
    { label: "Photos", href: "/photos" },
    { label: "Reservations", href: "/reservations" },
    { label: "About", href: "/about" },
    { label: "Private Dining", href: "/private-dining" },
    { label: "Gift Certificates", href: "/gift-certificates" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
