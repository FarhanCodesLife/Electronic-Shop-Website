'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import image1 from '@/public/assets/Images (1).png'
import image2 from '@/public/assets/Images.png'
import image3 from '@/public/assets/image 1.png'
import image4 from '@/public/assets/Images (2).png'
import image5 from '@/public/assets/image 6.png'
import image6 from '@/public/assets/image 8.png'
import Navbar from '@/components/Navbar';
import Banifits from '@/components/Banifits';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Cards from '@/components/Cards';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/reduxconfig/reducer/cartSlice.js';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Skeleton } from "@/components/ui/skeleton"
// import { useRouter } from 'next/router';

const SingleProduct = () => {

  interface Review {
    user: string;          // Name of the reviewer
    rating: number;        // Rating given by the reviewer (e.g., out of 5)
    comment: string;       // Optional comment from the reviewer
  }
  interface Product {
    _id: String;           // Unique identifier for the product
    name: String;          // Name of the product
    description: string;   // Description of the product
    price: number;         // Current price of the product
    originalPrice?: number; // (Optional) Original price before discount
    discount?: number;     // (Optional) Discount percentage
    image?: string;        // (Optional) URL or path of the product image
    isNew?: boolean;       // (Optional) Indicates if the product is new
    additionalInfo?: string; // (Optional) Additional details about the product
    category?: string;     // (Optional) Product category (e.g., "Furniture > Chairs")
    tags?: string[];       // (Optional) Array of tags for product classification
    reviews?: Review[];    // (Optional) Array of reviews for the product
  }

  const [product, setProduct] = useState<Product | null>(null);
  const [mostSellproduct, setMostSellproduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  const { id } = useParams(); // assuming _id is passed as a string from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        console.error("Product ID is missing.");
        toast.error("Invalid product ID.");
        return;
      }

      try {
        const singleProduct = `*[_id == "${id}"]`;
        const mostSell = `*[price > 100]`;
        const data = await client.fetch(singleProduct);
        const mostSellData = await client.fetch(mostSell);
        setMostSellproduct(mostSellData);

        if (data && data.length > 0) {
          setProduct(data[0]); // Set the first product from the result
        } else {
          console.warn("No product found for the given ID.");
          toast.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        toast.error("Failed to load product details.");
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    fetchProduct();

    // Cleanup function (optional, for fetch cancellation)
    return () => {
      setProduct(null); // Reset state when component unmounts
    };
  }, [id]);

  const dispatch = useDispatch();
  console.log(product);

  // Add color and size options
  const colorOptions = ['#6B7FB7', '#986B9C', '#A48D6B'];
  const sizeOptions = ['L', 'XL', 'XS'];
  const imageUrl = product?.image?.asset?._ref ? urlFor(product.image).url() : '/placeholder.jpg';

  // Add state for quantity
  const [quantity, setQuantity] = React.useState(1);

  const handleNavigate = () => {
    // Navigate to a new page (e.g., '/about')
    // router.push('/cart');
  };

  // Add to cart handler
  const handleAddToCart = () => {
    console.log("click button");

    dispatch(addToCart({
      ...product,
      quantity,
      colorOptions,
      sizeOptions
    }));

    toast.success(`Added ${quantity} ${product?.name} to cart`, {
      description: `Quantity: ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => console.log("View cart clicked"),
      },
    });
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="grid md:grid-cols-2 mx-16 my-10 container justify-center items-center w-full gap-8 lg:gap-2">
          <div className=''>
            <Skeleton className="lg:h-[600px] h-[400px] lg:w-[44vw] w-[80vw] rounded-xl" />
          </div>
          <div className="space-y-4">
            <Skeleton className="lg:h-10 h-8 lg:w-[300px] w-[200px]" />
            <Skeleton className="lg:h-6 h-4 lg:w-[200px] w-[150px]" />
            <Skeleton className="lg:h-10 h-8 lg:w-[150px] w-[100px]" />
            <Skeleton className="lg:h-36 h-32 lg:w-[400px] w-[200px]" />
            <Skeleton className="lg:h-6 h-4 lg:w-[50px] w-[20px]" />
            <Skeleton className="lg:h-12 h-10 lg:w-[150px] w-[80px]" />
            <Skeleton className="lg:h-6 h-4 lg:w-[50px] w-[30px]" />
            <Skeleton className="lg:h-12 h-10 lg:w-[150px] w-[70px]" />
            <Skeleton className="lg:h-16 h-10 lg:w-[520px] w-[70vw]" />
          </div>
        </div>
        <Banifits />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/shop" className="text-gray-600 hover:text-orange-500">Shop</Link>
          <span className="text-gray-400">/</span>
          <span className="text-orange-500 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className=''>
              <Skeleton className="lg:h-[600px] h-[400px] lg:w-[44vw] w-[80vw] rounded-xl" />
            </div>
            <div className="space-y-4">
              <Skeleton className="lg:h-10 h-8 lg:w-[300px] w-[200px]" />
              <Skeleton className="lg:h-6 h-4 lg:w-[200px] w-[150px]" />
              <Skeleton className="lg:h-10 h-8 lg:w-[150px] w-[100px]" />
              <Skeleton className="lg:h-36 h-32 lg:w-[400px] w-[200px]" />
              <Skeleton className="lg:h-6 h-4 lg:w-[50px] w-[20px]" />
              <Skeleton className="lg:h-12 h-10 lg:w-[150px] w-[80px]" />
              <Skeleton className="lg:h-6 h-4 lg:w-[50px] w-[30px]" />
              <Skeleton className="lg:h-12 h-10 lg:w-[150px] w-[70px]" />
              <Skeleton className="lg:h-16 h-10 lg:w-[520px] w-[70vw]" />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={imageUrl || '/placeholder.jpg'}
                alt="product image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-gray-800">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.description}</p>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Select Size</h3>
                <div className="flex gap-4">
                  {sizeOptions.map((size, index) => (
                    <Button key={index} variant="outline" className="w-20">
                      {size}
                    </Button>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-800">Select Color</h3>
                <div className="flex gap-4">
                  {colorOptions.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button onClick={handleAddToCart} className="text-white bg-orange-500 hover:bg-orange-600">Add to Cart</Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  min="1"
                  className="w-16 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Most Sell Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800">Most Selling Products</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
            
              <Cards product={mostSellproduct} />
           
          </div>
        </div>
      </div>

      <Banifits />
      <Footer />
    </>
  );
};

export default SingleProduct;
