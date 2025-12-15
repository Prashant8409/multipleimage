export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  description: string;
  category: string;
  purchaseLink: string;
}

export const tanzanianRegions = [
  "Dar es Salaam",
  "Arusha",
  "Mwanza",
  "Dodoma",
  "Mbeya",
  "Tanga",
  "Morogoro",
  "Kilimanjaro",
  "Kigoma",
  "Tabora",
  "Manyara",
  "Shinyanga",
  "Iringa",
  "Mtwara",
  "Ruvuma",
  "Zanzibar",
  "Pwani",
  "Singida",
];

export const categories = [
  { id: "mobile-phones", name: "Mobile Phones", icon: "Smartphone" },
  { id: "laptops", name: "Laptops & Computers", icon: "Laptop" },
  { id: "tvs", name: "TVs & Video", icon: "Tv" },
  { id: "audio", name: "Audio & Music", icon: "Headphones" },
  { id: "cameras", name: "Cameras & Photography", icon: "Camera" },
  { id: "gaming", name: "Gaming & Consoles", icon: "Gamepad2" },
  { id: "tablets", name: "Tablets", icon: "Tablet" },
  { id: "accessories", name: "Accessories", icon: "Watch" },
];

export const products: Product[] = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB",
    price: 250000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop",
    ],
    description: "Brand new iPhone 14 Pro Max with 256GB storage. Deep Purple color. Comes with original charger and box. 1 year warranty included.",
    category: "mobile-phones",
    purchaseLink: "https://gooza.site/jijipayments/product1/",
  },
  {
    id: "2",
    title: "Samsung Galaxy S23 Ultra",
    price: 180000,
    location: "Arusha",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
    ],
    description: "Samsung Galaxy S23 Ultra 256GB. Phantom Black. S Pen included. Perfect condition with all accessories.",
    category: "mobile-phones",
    purchaseLink: "https://gooza.site/jijipayments/product2",
  },
  {
    id: "3",
    title: "New Samsung Galaxy S23 128 GB White",
    price: 150000,
    location: "Dar es Salaam",
    images: [
      "https://pictures-tanzania.jijistatic.com/7279806_NzIwLTg5NC0yMzI3Njc5MDkz.webp",
      "https://pictures-tanzania.jijistatic.com/7279808_NzIwLTg5MS1jOWY5YmUzMWQ1.webp",
      "https://pictures-tanzania.jijistatic.com/7279808_NzIwLTg5MS1jOWY5YmUzMWQ1.webp",
    ],
  description: `2 years warranty full boxed and free protector and cover offers.
We only sell original items.
For wholesale prices please contact us through WhatsApp.
TUNATUMA MIKOAN MIKOAN BURE.
TUNATUMA WAHI SASA.
Tunakopesha pia.`,
    category: "laptops",
    purchaseLink: "https://gooza.site/jijipayments/product3/",
  },
  {
    id: "4",
    title: "New Apple iPhone 17 Pro Max 512 GB Silver",
    price: 400000,
    location: "Mwanza",
    images: [
      "https://pictures-tanzania.jijistatic.com/8405926_MTA4MC0xNDQwLTkyOGZlNGU3YzA.webp",
      "https://pictures-tanzania.jijistatic.com/8405924_MzAwLTQwMC0yNTU2NzMxZDMx.webp",
      "https://pictures-tanzania.jijistatic.com/8405928_MzAwLTQwMC1mYTdkZDBkYjE4.webp",
    ],
    description: "Brand new 17promax \ngb512 \navailable",
    category: "mobile-phone",
    purchaseLink: "https://gooza.site/jijipayments/product4/",
  },
  {
    id: "5",
    title: "Google Pixel 7a 128 GB Gray",
    price: 140000,
    location: "Dodoma",
    images: [
      "https://i.ibb.co/FLGqvF7T/8424883-MTMz-MS0x-Nj-Aw-LTQz-NTUy-Ym-Uy-NDc.webp",
      "https://i.ibb.co/ZRYB2tqq/8424884-MTIw-MC0x-Nj-Aw-LWQ0-N2-Zi-N2-Iy-ZDQ.webp",
      "https://i.ibb.co/ZRYB2tqq/8424884-MTIw-MC0x-Nj-Aw-LWQ0-N2-Zi-N2-Iy-ZDQ.webp",
    ],
    description: "Karibuni mjipatie simu za used from dubai kwa bei\n rahisi sana kwa simu aina zote mfano Samsung, pixel, \niphone na nyinginezo.",
    category: "phone",
    purchaseLink: "https://gooza.site/jijipayments/product5",
  },
  {
    id: "6",
    title: "Apple iPhone 12 Pro Max 128 GB Silver",
    price: 650000,
    location: "Dar es Salaam",
    images: [
      "https://i.ibb.co/3y7RM5jX/6908982-MTYw-MC0y-MTM0-LTE2-Nz-Uy-MGQz-ZTU.webp",
      "https://i.ibb.co/NdjXGm0h/6908981-MTYw-MC0y-MTM0-LTkz-ZDE3-NDE0-Yj-M.webp",
      "https://i.ibb.co/NdjXGm0h/6908981-MTYw-MC0y-MTM0-LTkz-ZDE3-NDE0-Yj-M.webp",
    ],
    description: "Apple iPhone 12 Pro Max 128 GB Silver New Brand.",
    category: "audio",
    purchaseLink: "https://gooza.site/jijipayments/product6",
  },
  {
    id: "7",
    title: "New Apple iPhone 17 Pro Max 256 GB Orange",
    price: 400000,
    location: "Arusha",
    images: [
      "https://i.ibb.co/zW8tn7pd/8380206-MTYw-MC0y-MTM0-LWVj-OTk3-Zjgw-Mm-M.webp",
      "https://i.ibb.co/21PBW73j/8380207-MTYw-MC0y-MTM0-LTQz-Mjgw-MDAy-MTc.webp",
      "https://i.ibb.co/21PBW73j/8380207-MTYw-MC0y-MTM0-LTQz-Mjgw-MDAy-MTc.webp",
    ],
    description: "Iphone 17 pro max brand new 256gb.",
    category: "cameras",
    purchaseLink: "https://gooza.site/jijipayments/product7",
  },
  {
    id: "8",
    title: "Samsung Galaxy S21 Ultra 5G 128 GB Black",
    price: 154000,
    location: "Dar es Salaam",
    images: [
      "https://i.ibb.co/xKR9VT5d/7236370-MTIw-MC0x-Nj-Aw-LTAw-OTgw-MDg2-OTY.webp",
      "https://i.ibb.co/LhnVMz45/7236373-MTIw-MC0x-Nj-Aw-LTU3-ODY4-YTky-Ym-I.webp",
      "https://i.ibb.co/Hp1qgYZL/7236372-MTIw-MC0x-Nj-Aw-LTFl-ODJh-Y2-Vi-Nz-Y.webp",
    ],
    description: "Ni simu kali sana \nCamera super kbsa \nIpo Mbeya.",
    category: "gaming",
    purchaseLink: "https://gooza.site/jijipayments/product8",
  },
  {
    id: "9",
    title: "Samsung Galaxy Note 10 Plus 256 GB Black",
    price: 113000,
    location: "Mbeya",
    images: [
      "https://i.ibb.co/5gPdqpNR/7895829-OTAw-LTE2-MDAt-MDk2-Yz-E3-ZWZj-YQ.webp",
      "https://i.ibb.co/Myg48H7p/7895830-OTAw-LTE2-MDAt-Ym-Fk-M2-I3-ODU2-OQ.webp",
      "https://i.ibb.co/Myg48H7p/7895830-OTAw-LTE2-MDAt-Ym-Fk-M2-I3-ODU2-OQ.webp",
    ],
    description: "Tunazo simu nying Mbeya kabwe \nFika uchukue yako sasa.",
    category: "tablets",
    purchaseLink: "https://gooza.site/jijipayments/product9",
  },
  {
    id: "10",
    title: "Apple iPhone 11 128 GB Red",
    price: 150000,
    location: "Tanga",
    images: [
      "https://i.ibb.co/TB8PGZTW/4119520-MTEy-NS0x-NTAw-LTA3-NDAx-MTFm-ZDQ.webp",
      "https://i.ibb.co/27p383sB/4119519-MTEy-NS0x-NTAw-LTI3-YTk4-OWNk-Ym-U.webp",
      "https://i.ibb.co/B2DYXkXH/4119521-MTEy-NS0x-NTAw-LTdh-NDUz-MGMx-Mj-E.webp",
    ],
    description: "Apple iPhone 11 128 GB Red\nIphone 11 128gb\nUsed Abroad not refurb\nPurchase from apple store\nUsed Condition with no cracks\nBattery Health 77% Original battery\n6 Month Warranty\nAll Iphone available, Used & New"
,
    category: "accessories",
    purchaseLink: "https://gooza.site/jijipayments/product10",
  },
  {
    id: "11",
    title: "Google Pixel 8 Pro",
    price: 176000,
    location: "Morogoro",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    ],
    description: "Google Pixel 8 Pro 256GB. Bay Blue color. Best camera phone with AI features. Brand new.",
    category: "mobile-phones",
    purchaseLink: "https://gooza.site/jijipayments/product11",
  },
  {
    id: "12",
    title: "Dell XPS 15 Laptop",
    price: 100000,
    location: "Kilimanjaro",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop",
    ],
    description: "Dell XPS 15 with 12th Gen Intel Core i9, 32GB RAM, 1TB SSD. OLED 3.5K display. Premium build.",
    category: "laptops",
    purchaseLink: "https://gooza.site/jijipayments/product12",
  },
  {
    id: "13",
    title: "LG 65\" OLED TV",
    price: 200000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
    ],
    description: "LG 65-inch OLED evo C3 Series 4K Smart TV. Perfect blacks, infinite contrast. Dolby Vision & Atmos.",
    category: "tvs",
    purchaseLink: "https://gooza.site/jijipayments/product13",
  },
  {
    id: "14",
    title: "JBL PartyBox 310",
    price: 60000,
    location: "Kigoma",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    ],
    description: "JBL PartyBox 310 Portable Party Speaker. 240W output, light show, 18-hour battery. Ultimate party machine.",
    category: "audio",
    purchaseLink: "https://gooza.site/jijipayments/product14",
  },
  {
    id: "15",
    title: "Nintendo Switch OLED",
    price: 780000,
    location: "Tabora",
    images: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=400&h=400&fit=crop",
    ],
    description: "Nintendo Switch OLED Model. White Joy-Cons. Includes dock and all accessories. Great condition.",
    category: "gaming",
    purchaseLink: "https://gooza.site/jijipayments/product15",
  },
  {
    id: "16",
    title: "Xiaomi Redmi Note 13 Pro",
    price: 120000,
    location: "Manyara",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886f0b?w=400&h=400&fit=crop",
    ],
    description: "Xiaomi Redmi Note 13 Pro 5G. 256GB storage, 200MP camera. Midnight Black. Best value smartphone.",
    category: "mobile-phones",
    purchaseLink: "https://gooza.site/jijipayments/product16",
  },
  {
    id: "17",
    title: "AirPods Pro 2nd Gen",
    price: 7000,
    location: "Shinyanga",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
    ],
    description: "Apple AirPods Pro 2nd Generation with USB-C. Active Noise Cancellation. Adaptive Audio feature.",
    category: "audio",
    purchaseLink: "https://gooza.site/jijipayments/product17",
  },
  {
    id: "18",
    title: "Xbox Series X Console",
    price: 19000,
    location: "Iringa",
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop",
    ],
    description: "Microsoft Xbox Series X 1TB. Includes 2 controllers and Game Pass Ultimate 3 months. Ready to play.",
    category: "gaming",
    purchaseLink: "https://gooza.site/jijipayments/product18/",
  },
];

export const formatPrice = (price: number): string => {
  return `TSh ${price.toLocaleString()}`;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
