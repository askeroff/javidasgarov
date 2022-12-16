import * as React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Youtube from '../components/youtube/Youtube';
import RecentBlog from '../components/recentBlog/RecentBlog';

function IndexPage() {
  return (
    <Layout>
      <Container>
        <div style={{ marginTop: '30px' }}>
          <Youtube />
          <RecentBlog />
        </div>
      </Container>
    </Layout>
  );
}
export default IndexPage;
