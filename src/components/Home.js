import {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";


const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h1>List Products</h1>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{
                                            product.category.map((cate) =>
                                            <span key={cate}> {cate + ' '} </span>
                                            )
                                        }</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home