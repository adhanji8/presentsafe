import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage: NextPage = () => {
  return (
    <Layout title="PresentSafe">
      <ul className="card-list">
        <li style={{ width: "100%" }}>
          <Link href="/donate-with-checkout">
            <a style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }} className="card checkout-style-background">
              <h1>Purchase Lifetime License for $4.99</h1>
              <button style={{ width: "150px", background: "black" }}>Buy Now</button>
              <div>
                <FontAwesomeIcon color="white" size={"1x"} icon={faCartPlus} />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
