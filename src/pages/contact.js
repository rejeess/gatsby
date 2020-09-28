import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"



function ContactUs() {
  return (
    <Layout>
      <h1>Contact us</h1>
      <p>ABC</p>
      <p>Phone</p>
      <p>Website</p>
      <p>Email</p>
      <p>
        Link to Google.com{" "}
        <a href="https://www.google.com/" target="_blank">
          Google
        </a>
      </p>
      <p>
        Link to About us <Link to="/about">About us</Link>
      </p>
    </Layout>
  )
}

export default ContactUs
