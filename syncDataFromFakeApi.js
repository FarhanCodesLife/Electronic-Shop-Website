import { createClient } from 'next-sanity'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// const apiVersion = '2023-05-03'
export const client = createClient({
  projectId:"k6jtnhe6",
  dataset:"production",
  apiVersion:"2024-12-29",
  token: "skEFib2NY82KIzbPn7npCFgUcjfosOipzw2MEReO96QdhvW7wcPh5XXLmmNYuqcZXbRqCr1OKFQexeflfKz80AGsEFJiR5TjngQPbGEMtbHCYE6PDAVhp3OPscYewlaeqSlICrG2oiMq05jVXZkWIFCwGPshlhFYflV9B6lI0tBzuzjtzBal",
  useCdn: true,
})

export const fetchAndMigrateData = async () => {
    const res = await fetch("https://furniture-api.fly.dev/v1/products");
    const { data } = await res.json();

    for (const { name, category, description, price, image_path } of data) {
        const imageAsset = await uploadImageToSanity(image_path);

        // Now create a document in Sanity
        await client.create({
            _type: 'Products',
            name,
            category,
            description,
            price,
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                },
            },
        });
        console.log(`Migrated product: ${name}`);
    }
};

// Upload the image to Sanity
const uploadImageToSanity = async (imageUrl) => {
    const res = await fetch(imageUrl);
    
    if (!res.ok) {
        throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${res.status}`);
    }

    // Convert the response body to an array buffer
    const arrayBuffer = await res.arrayBuffer();
    
    // Convert the array buffer to a Buffer (required by Sanity)
    const buffer = Buffer.from(arrayBuffer);

    const contentType = res.headers.get("content-type") || "image/jpeg"; 

    // Upload the image as a buffer
    const imageAsset = await client.assets.upload('image', buffer, {
        filename: imageUrl.split('/').pop() || "image",
        contentType,
    });

    return imageAsset;
};

fetchAndMigrateData().catch(console.error);
