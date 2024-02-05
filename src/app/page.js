import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="mt-24 flex flex-col items-center">
        <Image
          className="px-4"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          width={400}
          height={100}
          priority
          style={{ height: "auto" }}
        />
        <HomeSearch />
      </main>
    </>
  );
}
