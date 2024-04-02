import Card from "../components/Cards";
import Caraousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
const Home = () => {

    const [search , setSearch] = useState('')
    const [foodCat , setFoodCat] = useState([])
    const [foodItem , setFoodItem] = useState([])

    const loadData = async () => {
        const res = await fetch("https://foodapp-backend-8g5e.onrender.com/api/foodData" , {
            method:"POST", 
            headers:{
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        // console.log(response);
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData();
    },[])

    return (
        <>
        <div><Navbar /></div>
        <div> <Caraousel /></div>
        
        <div className="container">
        <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
            {
                (foodCat.length !== 0)
                ? foodCat.map((data) => {
                    return(
                        <div className="row mb-3">
                        <div key={data._id} className="m-3 fs-3">
                            {data.CategoryName}
                        </div>
                        <hr />
                        {
                            foodItem.length !== 0
                            ?
                            foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                            .map(filterItems => {
                                return(
                                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3" >
                                        <Card 
                                            foodItem = {filterItems}
                                            options = {filterItems.options[0]}
                                        />
                                    </div>
                                )
                            })
                            :
                            <div>No data Found</div>
                        }
                        </div>
                    )
                })
                :
                ""
            }
        </div>
        <div> <Footer /> </div>
        </>
    );
};

export default Home;