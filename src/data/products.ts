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
    price: 2800000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop",
    ],
    description: "Brand new iPhone 14 Pro Max with 256GB storage. Deep Purple color. Comes with original charger and box. 1 year warranty included.",
    category: "mobile-phones",
    purchaseLink: "https://example.com/buy/iphone14",
  },
  {
    id: "2",
    title: "Samsung Galaxy S23 Ultra",
    price: 2500000,
    location: "Arusha",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
    ],
    description: "Samsung Galaxy S23 Ultra 256GB. Phantom Black. S Pen included. Perfect condition with all accessories.",
    category: "mobile-phones",
    purchaseLink: "https://example.com/buy/samsung-s23",
  },
  {
    id: "3",
    title: "New Samsung Galaxy S23 128 GB White",
    price: 830000,
    location: "Dar es Salaam",
    images: [
      "https://tmpfiles.org/dl/15531809/7279808_nziwltg5ms1jowy5ymuzmwq1.webp",
      "http://tmpfiles.org/dl/15531880/7279806_nziwltg5nc0ymzi3njc5mdkz.webp",
      "http://tmpfiles.org/dl/15531880/7279806_nziwltg5nc0ymzi3njc5mdkz.webp",
    ],
  description: `2 years warranty full boxed and free protector and cover offers.
We only sell original items.
For wholesale prices please contact us through WhatsApp.
TUNATUMA MIKOAN MIKOAN BURE.
TUNATUMA WAHI SASA.
Tunakopesha pia.`,
    category: "laptops",
    purchaseLink: "https://example.com/buy/macbook-pro",
  },
  {
    id: "4",
    title: "New Apple iPhone 17 Pro Max 512 GB Silver",
    price: 1800000,
    location: "Mwanza",
    images: [
      "https://tmpfiles.org/dl/15532434/8676604_mtywmc0ymtm0lwm3owqyyju3yjk.webp",
      "https://tmpfiles.org/dl/15532389/8676599_mtywmc0ymtm0ltrkmmmwmza2zjc.webp",
      "https://tmpfiles.org/dl/15532350/8676600_mtywmc0ymtm0ltnknzziytq3yja.webp",
    ],
    description: "Brand new 17promax \ngb512 \navailable",
    category: "mobile-phone",
    purchaseLink: "https://example.com/buy/hp-pavilion",
  },
  {
    id: "5",
    title: "Samsung 55\" 4K Smart TV",
    price: 1200000,
    location: "Dodoma",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=400&h=400&fit=crop",
    ],
    description: "Samsung 55-inch Crystal UHD 4K Smart TV. Built-in streaming apps. Crystal clear picture quality.",
    category: "tvs",
    purchaseLink: "https://example.com/buy/samsung-tv",
  },
  {
    id: "6",
    title: "Sony WH-1000XM5 Headphones",
    price: 650000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    ],
    description: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones. Industry-leading ANC. 30-hour battery life.",
    category: "audio",
    purchaseLink: "https://example.com/buy/sony-headphones",
  },
  {
    id: "7",
    title: "Canon EOS R6 Mark II",
    price: 3800000,
    location: "Arusha",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606986628253-e29c073b6383?w=400&h=400&fit=crop",
    ],
    description: "Canon EOS R6 Mark II Full-Frame Mirrorless Camera. 24.2MP, 4K 60fps video. Body only.",
    category: "cameras",
    purchaseLink: "https://example.com/buy/canon-r6",
  },
  {
    id: "8",
    title: "PlayStation 5 Console",
    price: 1400000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607016284318-d1384bf9a6fc?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=400&h=400&fit=crop",
    ],
    description: "Sony PlayStation 5 Disc Edition. Includes 2 controllers and 3 games. Like new condition.",
    category: "gaming",
    purchaseLink: "https://example.com/buy/ps5",
  },
  {
    id: "9",
    title: "iPad Pro 12.9\" M2",
    price: 2200000,
    location: "Mbeya",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=400&h=400&fit=crop",
    ],
    description: "Apple iPad Pro 12.9-inch with M2 chip. 256GB, WiFi + Cellular. Space Gray with Magic Keyboard.",
    category: "tablets",
    purchaseLink: "https://example.com/buy/ipad-pro",
  },
  {
    id: "10",
    title: "Apple Watch Ultra 2",
    price: 1500000,
    location: "Tanga",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    ],
    description: "Apple Watch Ultra 2 with Orange Alpine Loop. GPS + Cellular. Perfect for outdoor adventures.",
    category: "accessories",
    purchaseLink: "https://example.com/buy/apple-watch",
  },
  {
    id: "11",
    title: "Google Pixel 8 Pro",
    price: 1900000,
    location: "Morogoro",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    ],
    description: "Google Pixel 8 Pro 256GB. Bay Blue color. Best camera phone with AI features. Brand new.",
    category: "mobile-phones",
    purchaseLink: "https://example.com/buy/pixel8",
  },
  {
    id: "12",
    title: "Dell XPS 15 Laptop",
    price: 3200000,
    location: "Kilimanjaro",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop",
    ],
    description: "Dell XPS 15 with 12th Gen Intel Core i9, 32GB RAM, 1TB SSD. OLED 3.5K display. Premium build.",
    category: "laptops",
    purchaseLink: "https://example.com/buy/dell-xps",
  },
  {
    id: "13",
    title: "LG 65\" OLED TV",
    price: 2800000,
    location: "Dar es Salaam",
    images: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
    ],
    description: "LG 65-inch OLED evo C3 Series 4K Smart TV. Perfect blacks, infinite contrast. Dolby Vision & Atmos.",
    category: "tvs",
    purchaseLink: "https://example.com/buy/lg-oled",
  },
  {
    id: "14",
    title: "JBL PartyBox 310",
    price: 850000,
    location: "Kigoma",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    ],
    description: "JBL PartyBox 310 Portable Party Speaker. 240W output, light show, 18-hour battery. Ultimate party machine.",
    category: "audio",
    purchaseLink: "https://example.com/buy/jbl-partybox",
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
    purchaseLink: "https://example.com/buy/switch-oled",
  },
  {
    id: "16",
    title: "Xiaomi Redmi Note 13 Pro",
    price: 450000,
    location: "Manyara",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886f0b?w=400&h=400&fit=crop",
    ],
    description: "Xiaomi Redmi Note 13 Pro 5G. 256GB storage, 200MP camera. Midnight Black. Best value smartphone.",
    category: "mobile-phones",
    purchaseLink: "https://example.com/buy/redmi-note13",
  },
  {
    id: "17",
    title: "AirPods Pro 2nd Gen",
    price: 480000,
    location: "Shinyanga",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
    ],
    description: "Apple AirPods Pro 2nd Generation with USB-C. Active Noise Cancellation. Adaptive Audio feature.",
    category: "audio",
    purchaseLink: "https://example.com/buy/airpods-pro",
  },
  {
    id: "18",
    title: "Xbox Series X Console",
    price: 1350000,
    location: "Iringa",
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop",
    ],
    description: "Microsoft Xbox Series X 1TB. Includes 2 controllers and Game Pass Ultimate 3 months. Ready to play.",
    category: "gaming",
    purchaseLink: "https://example.com/buy/xbox-series-x",
  },
];

export const formatPrice = (price: number): string => {
  return `TSh ${price.toLocaleString()}`;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
