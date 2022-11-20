import * as React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Youtube from '../components/youtube/Youtube';

function IndexPage() {
  return (
    <Layout>
      <Container>
        <div style={{ marginTop: '30px' }}>
          <Youtube />
        </div>
      </Container>
    </Layout>
  );
}
export default IndexPage;
