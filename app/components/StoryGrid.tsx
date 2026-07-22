import Image from "next/image";

export default function StoryGrid() {
  return (
    <section id="gallery" className="w-full bg-[#0d0d0d] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          
          {/* Card 1: Tall Vertical (Asymmetric offset) */}
          <div className="group relative flex flex-col space-y-6 md:col-span-6 lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5">
              <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none" />
              <Image
                src="https://picsum.photos/seed/ploybay-workshop/600/800"
                alt="Buổi thảo luận cắm hoa nghệ thuật tại Ploybay studio"
                fill
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-light text-white">
                Xưởng Chế Tác Quà Tặng Độc Bản
              </h3>
              <p className="max-w-[42ch] font-sans text-sm leading-relaxed text-zinc-300">
                Tại Ploybay, mỗi tặng phẩm đều được thiết kế và chọn lọc riêng biệt, mang đậm dấu ấn cá nhân để thay bạn kể câu chuyện của chính mình một cách trọn vẹn nhất.
              </p>
            </div>
          </div>

          {/* Card 2: Landscape & Offset (Pushed down on desktop for asymmetry) */}
          <div className="group relative flex flex-col space-y-6 md:col-span-6 md:mt-24 lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
              <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none" />
              <Image
                src="https://picsum.photos/seed/ploybay-wrapping/800/500"
                alt="Quy trình đóng gói hộp quà bọc nhung tinh xảo"
                fill
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-light text-white">
                Nghệ Thuật Chọn Lọc & Sắp Đặt
              </h3>
              <p className="max-w-[42ch] font-sans text-sm leading-relaxed text-zinc-300">
                Không chỉ là quà tặng, chúng tôi tỉ mỉ kết hợp những sản phẩm tinh túy từ tự nhiên, tạo nên một tổng thể hài hòa, chạm đến mọi giác quan của người nhận.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}