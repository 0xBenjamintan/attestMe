import Header from './Header';
import Footer from './Footer';

const RootLayout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen mx-auto max-w-6xl px-4 pt-8 pb-16">
        <div className="flex-grow">
          <Header />
          <main className="my-0">{children}</main>
        </div>
      </div>
    );
  };

export default RootLayout;