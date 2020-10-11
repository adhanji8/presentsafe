import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="PresentSafe Checkout">
      <div className="page-container">
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage
