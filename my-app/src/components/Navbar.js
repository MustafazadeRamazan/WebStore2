import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {FiShoppingCart} from 'react-icons/fi'


const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <header>
            <nav className="container">
                <span className="logo">WebStore</span>
                <div className="navlinks">
                    <Link className="navLink" to='/home'>Home</Link>
                    <Link className="navLink" to="/product" >Product</Link>
                    <Link className="navLink" to="/about" >About</Link>
                    <Link className="navLink" to="/contact" >Contact</Link>
                    <Link className="cartCount" to='/cart'>
                        <FiShoppingCart/>
                        <span>{items.length}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;