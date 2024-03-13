import ProductDetails from "../../components/ProductDetails"
import Header from "../../components/Header"
//import {getProductBySlug} from "@/sanity/sanity-utils";
import Footer from "@/app/components/Footer";


export default async function page({params}) {
  const {slug} = params;

  const product = await getProductBySlug(slug);

  return (
    <div>
        <Header/>
       
        <div>
            <ProductDetails product={product[0]}/>
        </div>

        <Footer />
    </div>
  )
}

