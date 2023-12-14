function ProductsItem({product_name}){
    return(
        <button 
        type="button"
        className="list-group-item list-group-item-action text-center"
        >
            {product_name} 
        </button>
    )
}

export default ProductsItem