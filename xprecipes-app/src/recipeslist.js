import chicken_alfredo from './images/chicken_alfredo.jpg'
import cookies from './images/cookies.jpg'
import curry from './images/curry.jpg'
import egg_fried_rice from './images/egg_fried_rice.jpg'

const List = () =>{
    return (
        <section id="recipe_saved">
            <h1 class="heading">Recipe List</h1>
            <div class="row-container">
                <div class="grid">
                    <a href="#">
                        <img src={chicken_alfredo} alt="chicken alfredo" width="400" height ="400"/>
                        <p>CHICKEN ALFREDO</p>
                    </a>
                </div>
                <div class="grid">
                    <a href="#">
                        <img src={cookies} alt="cookies" width="400" height ="400"/>
                        <p>COOKIES</p>
                    </a>
                </div>
            </div>
            <div class="row-container">
                <div class="grid">
                    <a href="#">
                        <img src={curry} alt="curry" width="400" height ="400"/>
                        <p>CURRY</p>
                    </a>     
                </div>
                <div class="grid">
                    <a href="#">
                        <img src={egg_fried_rice} alt="fuiyoh" width="400" height ="400"/>
                        <p>EGG FRIED RICE</p>
                    </a>
                </div>
            </div>
            <div className ="page_btns">
                <button class="button button1"> &lt;&lt; </button>
                <button class="button button2"> &gt;&gt; </button>
            </div>
        </section> 
    )
}
export default List;