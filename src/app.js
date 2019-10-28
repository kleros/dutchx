import React, { useState } from 'react'
import { Switch, Layout } from 'antd'
import { ReactComponent as Logo } from './logo.svg'
import 'antd/dist/antd.css'

const App = () => {
  const [bidding, setBidding] = useState(true)

  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <Switch
          checkedChildren="Auction"
          unCheckedChildren="Bid"
          onChange={() => setBidding(state => !state)}
          style={{
            backgroundColor: bidding ? '#f5a300' : '',
            minWidth: '70px',
            marginLeft: 'auto'
          }}
        />
      </Layout.Header>
      <Layout.Content style={{ height: '100%' }}>
        <iframe
          title="selectedApp"
          style={{ height: '100%', width: '100%', border: 'none' }}
          src={
            bidding
              ? process.env.REACT_APP_DFAIRDEX_URL
              : process.env.REACT_APP_NINJATRADE_URL
          }
        />
      </Layout.Content>
    </Layout>
  )
}

export default App
