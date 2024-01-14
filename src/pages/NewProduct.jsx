const NewProduct = () => {
    return ( 
        <div className="flex-[4]">
        <h1 className="text-[24px] font-bold">New Product</h1>
        <form className="mt-[10px]">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" className="border-none"/>
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="w-[80px] p-[5px] bg-orange-600
                   text-white rounded-[5px] text-[16px] cursor-pointer mt-[10px]">Create</button>
        </form>
      </div>
     );
}
 
export default NewProduct;