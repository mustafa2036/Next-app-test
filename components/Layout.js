import Navbar from "./Navbar";


export default function Layout(props){
    return(
        <>
            <Navbar/>
            <h2>Hello From Layout</h2>
            {props.children}
            <footer>Footer</footer>
        </>
    )
}