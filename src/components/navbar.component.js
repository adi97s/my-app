import Link from 'next/link'

export function Navbar() {
    return(
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                {/* <a href="/about">About</a> */}
                <Link href={'/about'}>
                    About
                </Link>
            </li>
            <li>
                <a href="/product">Product</a>
            </li>
        </ul>
    )
}