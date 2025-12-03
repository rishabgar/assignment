export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-gray-600">
        <p>© {new Date().getFullYear()} MyCMS. All Rights Reserved.</p>
        <p className="text-sm mt-3 md:mt-0">
          Built with ❤️ using React 19 + Tailwind
        </p>
      </div>
    </footer>
  );
}
