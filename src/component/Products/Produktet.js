import { useEffect,useState } from "react"
import axios from "axios"
import UserLayout from "./UserLayout";


export default function Produktet(){
    const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7178/api/Product/GetProduct");
    setProducts(result.data);
    console.log(result.data);
  }
    return (
        <div>
            <UserLayout/>
            <div className="d-flex justify-content-center flex-row flex-wrap w-100 mt-5">
              {products.map((item, index) => (
                <div key={index} className="card produktetCard d-flex flex-row flex-wrap container m-2" style={{ width: '40vh', background:'rgba(255,255,255,0.4)'}}>
                  <div className="d-flex justify-content-center border-bottom py-4">
                    <img src={item.imgUrl} className="card-img-top w-25" alt="Product Image" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description.substring(0, 30)}...</p>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-end">
                      <a href={`/view_product/${item.id}`} className="btn btn-primary">View Product</a>
                      <a href="#" className="btn btn-success">Add to Cart</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
    )
}