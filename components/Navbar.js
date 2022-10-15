import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar(){

    return(
        <div className={styles.bg}>
            <Link href="/">home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/posts">Posts</Link>
            <Link href='/services'>Services</Link>
        </div>
    )
}