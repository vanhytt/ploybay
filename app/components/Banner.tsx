import Image from "next/image";
import bannerImg from "../../public/banner.jpg";

export default function Banner() {
  return (
    <section className="w-full overflow-hidden">
      <Image
        src={bannerImg}
        alt="Ploybay Promotional Banner"
        className="w-full h-auto"
        priority
      />
    </section>
  );
}