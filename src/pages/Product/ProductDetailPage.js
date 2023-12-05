import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../components/ProductComponent/ProductsData';
import Navbar from '../../components/navbar/Navbar';
import { AiOutlineRight, AiOutlineLeft,AiOutlineShoppingCart ,AiOutlineClose,AiOutlineDown} from 'react-icons/ai';
const getProductById = (id) => {
  // Assuming products is an array of products
  return products.find(product => product.id === parseInt(id));
};
const ProductDetailPage = () => {
    const { id } = useParams();
    // const [products, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const product = getProductById(id);
    // useEffect(() => {
    //     // Filter the product based on the ID from the URL
    //     const selectedProduct = products.find((p) => String(p.id) === id);
    //     setProduct(selectedProduct);
    //     console.log(selectedProduct)

    //   }, [id, products]);  
      
      
      const handleNextImage = () => {
        if (currentImageIndex < product.images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      };
    
      const handlePrevImage = () => {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      };
      const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
      };
    
      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
        }
      };
    
  return (
    <div>
        <Navbar customClass="my-custom-class"/>
        <div className="flex items-center justify-center   pt-4 px-4 pb-10 text-center sm:block sm:p-0">
        <div className="sm:flex sm:items-start sm:justify-center">
          <div className="sm:w-2/5 pb-4">
            <div className="relative">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className={`w-full h-full object-cover ${
                    index === currentImageIndex ? '' : 'hidden'
                  }`}
                />
              ))}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl font-bold"
              >
                <AiOutlineLeft className='text-3xl text-gray-600' />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl font-bold"
              >
                <AiOutlineRight className='text-3xl text-gray-600' />
              </button>
            </div>
          </div>
          <div className="sm:w-2/5 pl-4 flex-flex-col">
            <h3 className="text-4xl text-start mt-6 font-medium text-gray-900 mb-6">
              {product?.title}
            </h3>
            
            <div className="flex items-center justify-start mb-6">
              
              <p className='text-red-500 text-2xl font-medium'>Rs.{product?.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="text-lg font-bold border border-r-0 border-gray-400 hover:bg-gray-200 px-2 py-1 rounded-l mt-2"
              >
                -
              </button>
              <span className="text-lg border border-gray-400 border-l-0 border-r-0 py-1 font-bold px-3 mt-2">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="text-lg font-bold border border-l-0 border-gray-400 hover:bg-gray-200 px-1 py-1 mr-2 mt-2 rounded-r"
              >
                +
              </button>
              <button
        className="block w-full px-4 py-2 mt-2 bg-green-500 text-white font-semibold text-center rounded"
        
        // onClick={handleAddToCart}
      >
        Add to Cart
      </button>
            </div>
          <button className='w-full text-white mt-4 bg-rose-950 animate-bounce text-xl rounded-lg flex justify-center items-center py-2'><AiOutlineShoppingCart className='text-2xl '/>ORDER NOW</button>


          <div className="accordion-item">
         
        
      </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage