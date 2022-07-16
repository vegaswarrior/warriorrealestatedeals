import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Warrior Investors',
  description: 'A Place where Wholesalers and Cash Buyers meet!!!',
  keywords: 'Wholesaler, Cash Buyer, Deals, ROI, ',
}

export default Meta
