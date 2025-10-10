import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-800">
      <Image src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo.png`} width={50} height={50} alt="logo" />
    </div>
  );
}
