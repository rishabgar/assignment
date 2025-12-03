import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow px-5 py-8 max-w-4xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
