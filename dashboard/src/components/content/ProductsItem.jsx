function ProductsItem({name}){
    return(
        <button 
        type="button"
        className="list-group-item list-group-item-action text-center"
        >
            {name} 
        </button>
    )
}

export default ProductsItem