const Items = () =>{
    return (
        <div class="addItem">
            <form id="search-form" action= "/" method="get">
                <label>
                    <input 
                        type="text"  
                        placeholder="Enter Ingredients here"
                        id="search"
                        name="search"
                        class="round" 
                    />
                </label>
                <label>
                    <input 
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="Enter quantity here"
                        id="search2"
                        name="search2"
                        class="round" 
                    />
                </label>
                <label>
                    <input 
                        type="submit"  
                        id="addStuff"
                        value="Add Ingredient &amp; Quantity"
                    />
                </label>
            </form>
        </div>
    )
}
export default Items;