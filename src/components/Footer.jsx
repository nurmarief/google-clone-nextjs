import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 absolute bottom-0 text-sm text-gray-500">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="px-8 py-3 flex justify-between items-center flex-col sm:flex-row gap-7">
        <ul className="flex items-center flex-wrap gap-6">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="flex items-center gap-6">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </footer>
  );
}