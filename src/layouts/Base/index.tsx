import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Container from '@/components/ui/container';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default BaseLayout;
