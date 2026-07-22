import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="relative w-full overflow-hidden bg-[#121212] py-24 md:py-36">
      {/* Background Image overlay for brand atmosphere */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://picsum.photos/seed/ploybay-nature-bg/1600/900"
          alt="Phong cảnh thiên nhiên thơ mộng"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        {/* Eyebrow - Section 3 gets an eyebrow (max 1 eyebrow per 3 sections) */}
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-white">
          Triết Lý Nghệ Thuật
        </span>

        {/* Large inspiring statement */}
        <h2 className="mt-8 font-serif text-3xl font-light leading-snug tracking-tight text-white md:text-5xl lg:text-6xl">
          Tinh hoa kết tinh từ lòng đất, <br />
          gửi trao trọn vẹn những chân tình.
        </h2>

        {/* Supporting description - max 25 words */}
        <p className="mx-auto mt-8 max-w-[60ch] font-sans text-base leading-relaxed text-zinc-300">
          Tại Ploybay, chúng tôi tin rằng mỗi đóa hoa đều mang một linh hồn, và mỗi món quà được trao đi là một chương truyện đầy cảm xúc được viết tiếp.
        </p>
      </div>
    </section>
  );
}