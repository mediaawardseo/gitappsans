
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link href={`/details/${product?.slug}`} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full group relative overflow-hidden ">
        
          <div className="relative w-full h-[372px]">
            <Image
              src={product?.image}
             sizes={372}
              alt="art"
              
              width={372} 
              height={372}
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-all"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="mt-4 font-medium text-white text-2xl">
              {product?.name}
            </h3>
          </div>
        </div>

     
    </Link>
  );
}

export default ProductCard;
