export interface PropertyImage {
  id: number;
  propertyId: number;
  url: string;
  sortOrder: number;
}

export interface Property {
  id: number;
  type: "house" | "apartment" | "land" | "commercial" | "other";
  transactionType: "sale" | "rent";
  titleEs: string;
  titleCa: string;
  titleEn: string;
  descriptionEs: string;
  descriptionCa: string;
  descriptionEn: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  extraArea: number;
  extraAreaLabel: string | null;
  tag: "featured" | "exclusive" | "new";
  isActive: number;
  sortOrder: number;
  images: PropertyImage[];
}

export const PROPERTIES_DATA: Property[] = [
  {
    id: 1,
    type: "house",
    transactionType: "sale",
    titleEs: "Casa con Patio en Martorelles",
    titleCa: "Casa amb Pati a Martorelles",
    titleEn: "House with Patio in Martorelles",
    descriptionEs: "Encantadora casa de 80m² con un amplio patio de 60m² en el corazón de Martorelles. Ideal para familias que buscan un hogar con espacio exterior en una zona tranquila y bien comunicada.",
    descriptionCa: "Encantadora casa de 80m² amb un ampli pati de 60m² al cor de Martorelles. Ideal per a famílies que busquen una llar amb espai exterior en una zona tranquil·la i ben comunicada.",
    descriptionEn: "Charming 80m² house with a spacious 60m² patio in the heart of Martorelles. Ideal for families looking for a home with outdoor space in a quiet, well-connected area.",
    location: "Martorelles, Vallès Oriental",
    price: "Consultar",
    bedrooms: 3,
    bathrooms: 2,
    area: 80,
    extraArea: 60,
    extraAreaLabel: "patio",
    tag: "featured",
    isActive: 1,
    sortOrder: 1,
    images: [
      { id: 101, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-1_9731464e.jpg", sortOrder: 0 },
      { id: 102, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-2_5a73099a.jpg", sortOrder: 1 },
      { id: 103, propertyId: 1, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/casa-real-3_089222e4.jpg", sortOrder: 2 }
    ]
  },
  {
    id: 2,
    type: "land",
    transactionType: "sale",
    titleEs: "Parcela Urbanizable en Martorelles",
    titleCa: "Parcel·la Urbanitzable a Martorelles",
    titleEn: "Buildable Plot in Martorelles",
    descriptionEs: "Parcela de 500m² en zona residencial de Martorelles. Terreno con gran potencial para construir la casa de tus sueños en una ubicación privilegiada.",
    descriptionCa: "Parcel·la de 500m² en zona residencial de Martorelles. Terreny amb gran potencial per construir la casa dels teus somnis en una ubicació privilegiada.",
    descriptionEn: "Plot of 500m² in a residential area of Martorelles. Land with great potential to build your dream home in a privileged location.",
    location: "Martorelles, Vallès Oriental",
    price: "103.700 €",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    extraArea: 0,
    extraAreaLabel: null,
    tag: "exclusive",
    isActive: 1,
    sortOrder: 2,
    images: [
      { id: 201, propertyId: 2, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-1_64c4468b.jpg", sortOrder: 0 }
    ]
  },
  {
    id: 3,
    type: "land",
    transactionType: "sale",
    titleEs: "Parcela con Vistas en Martorelles",
    titleCa: "Parcel·la amb Vistes a Martorelles",
    titleEn: "Plot with Views in Martorelles",
    descriptionEs: "Magnífica parcela con vistas panorámicas en Martorelles. Terreno ideal para proyecto residencial con orientación privilegiada y entorno natural.",
    descriptionCa: "Magnífica parcel·la amb vistes panoràmiques a Martorelles. Terreny ideal per a projecte residencial amb orientació privilegiada i entorn natural.",
    descriptionEn: "Magnificent plot with panoramic views in Martorelles. Ideal land for a residential project with privileged orientation and natural surroundings.",
    location: "Martorelles, Vallès Oriental",
    price: "107.000 €",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    extraArea: 0,
    extraAreaLabel: null,
    tag: "new",
    isActive: 1,
    sortOrder: 3,
    images: [
      { id: 301, propertyId: 3, url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663276806663/4ntBHTqavGkgE2y5gLQWs2/parcela-2_b6270046.png", sortOrder: 0 }
    ]
  }
];
