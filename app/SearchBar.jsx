import { useState, useEffect } from "react";
import "./SearchBar.css"
export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const astyle = {width:"150px"}
    let [searchValue, setSearchValue] = useState('')
    useEffect(fetchAPIData, [searchValue])

    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchValue.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div class="prodStyle">
                    <p class="title">{product.title}</p>
                    <p class="price">${product.price}</p>
                    <img style={astyle} src={product.image} alt={product.title}/>
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }   

    function handleInputChange(event) {
        setSearchValue(event.target.value)
        fetchAPIData()
    }

    function handleClearClick() {
        setSearchValue('')
    }

    let shouldDisplayButton = searchValue.length > 0

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            <div style={{display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
        </div>
    )
}