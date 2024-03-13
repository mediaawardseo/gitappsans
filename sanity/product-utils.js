import { createClient, groq } from "next-sanity";


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "sanityapp",
  apiVersion: "2024-03-12",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getProductBySlug(slug) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors
    }`,
    { slug }
    ,
    
   );
  
  return product; // Assuming you expect a single product, not an array
}

export async function getAllProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors
    }`,
    
   );

  return products;
}

// Exportiere die Funktion für die Produktdaten
export async function getProducts() {
    // Hole den Sanity-Client
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
      apiVersion: "2024-03-12",
      useCdn: true, // `false` falls du die neuesten Daten benötigst
    });
    
    // Rufe die Produktdaten ab
    const products = await client.fetch(
        groq`*[_type == "product"]{
          _id,
          createdAt,
          name,
          slug,
          description,
          price,
          "image": image.asset->url,
          "slug": slug.current,
          "extraImages": extraImages[].asset->url,
          colors
        }`,
       
        );
    
      return products;
    }