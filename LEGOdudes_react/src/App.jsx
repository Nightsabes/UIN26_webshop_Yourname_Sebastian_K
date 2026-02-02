import './style/lego.css'
import { products } from './assets/legodudes'
import { useState } from 'react'
function App() {
  
  const [isOpen, setIsOpen] = useState(false)
  
  function Header({setIsOpen}){
    return(<header>
          <h1>
          <a href="index.html">
            <img src="website_images/LD_logo.svg" alt="LEGOdudes and crap"/>
          </a>
          </h1>
          <button id="cart-button" onClick={()=>setIsOpen((prev => !prev))}>
            <div id="cart-quantity">0</div>
            <img src="website_images/legocart.svg" alt="legocart"/>
          </button>
      </header>
    )
  }

  function Nav(){
    return(<nav>
            <a href="#">City</a>
                <a href="#">Ninjago</a>
            <a href="#">Castle and Knights</a>
                <a href="#">Marine and Pirates</a>
            <a href="#">Movie Characters</a>
                <a href="https://www.youtube.com/watch?v=jDzhXFEVIhg">Your mom</a>
        </nav>)
  }

  function CategoryTitle(){
    return(<h2>NINJAGO</h2>)
  }

  function Products({products}){
    return(
    <div id="product-list">
      {products.map(p => <ProdcutCard key={p.prodid} p={p}/>)}
      
    </div>)
  }
  
  function ProdcutCard({p}){
    const handleClick = ()=>{
      console.log("Jeg er lagt til bitch")
    }

    return(
              <article className="product-card">
                <img src={`website_images/PROD_${p.imagefile}`} alt={p.title}/>
                <a href="#">{p.category}</a>
                <h3>{p.title}</h3>
                <p>kr.{p.price},-</p>
                <button onClick={handleClick}>Legg i hanglekruv</button>
            </article>
            )
  }

  function Cart({isOpen}){
      return(<section id="cart" className={isOpen ? "" : "hidden"}>
            <table id="cart-items">
              <tbody>
                <tr>
                    <td>Ingen deez i nuts</td>
                </tr>
              </tbody>
            </table>
            <p>Total pris: <span id="total-price">0</span> SEK</p>
        </section>)
    }

    function CartItem(){
      return(
        <tbody>
            <tr>
            <td className="title">{product.title}</td>
            <td className="pris">{product.price}</td>
            <td className="quantity">{ci.quantity}</td>
            <td className="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
            </tr>
        </tbody> 
        )
    }

  return (
    <>
    <div id="container">
      <Header setIsOpen={setIsOpen}/>
      <Nav/>
      <main>
        <CategoryTitle/>
        <Products products={products}/>
      </main>
      <Cart isOpen={isOpen}/>
      
    </div>
    </>
  )
}

export default App
