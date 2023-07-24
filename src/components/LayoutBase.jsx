import { Layout } from 'antd'

const LayoutBase = ({ children }) => {
  return <Layout style={{ minHeight: '100vh' }}>{children}</Layout>
}

export default LayoutBase
