import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import PrintObject from '../components/PrintObject'
import Cart from '../components/Cart'
import ClearCart from '../components/ClearCart'

import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

const ResultPage: NextPage = () => {
  const router = useRouter()
  let [datas, setDatas] = useState({})

  /*
  useEffect(() => {
    // Create an scoped async function in the hook
    console.log(datas);
    async function anyNameFunction({ }) {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify("")
      })
      const text = await res.text()
    }
    // anyNameFunction();
  }, []);
*/
  const fetchUrl = async () => {
    try {
      const data = await fetch(`/api/checkout_sessions/${router.query.session_id}`).then((res) => res.json())
      console.log(data.payment_intent.charges.data[0].billing_details.email);
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: data.payment_intent.charges.data[0].billing_details.email, message: "great job", receipt: data.payment_intent.charges.data[0].receipt_url })
      })
      const text = await res.text()
    } catch (err) {
      throw new Error(err.message)
    }

    try {
      // console.log(router.query.session_id);
      // const res = await fetch('/api/send', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify("")
      // })
      // const text = await res.text()

      const data = await fetch("/api/app.zip").then((res) => res.blob()).then(blob => {
        const url = URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.download = 'app.zip'
        a.href = url
        console.log(url);
        document.body.appendChild(a)
        a.click()
        a.remove()
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>
  return (

    <div className="page-container">
      {JSON.stringify(datas)}
      <h3>Payment {data?.payment_intent?.status ?? 'loading...'}</h3>
      <PrintObject content={data ?? 'loading...'} />
      { data?.payment_intent?.status === "succeeded" && <button onClick={fetchUrl} style={{ background: "black" }}>Download Now</button>}
    </div>

  )
}

export default ResultPage
