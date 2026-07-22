import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  gridClass: string;
  aspectClass: string;
  offsetClass: string;
}

const PRODUCTS: Product[] = [
  {
    id: "ploybay-rose",
    name: "Ploybay Classic Rose Box",
    category: "Hộp Hoa Hồng Cổ Điển",
    price: "1.250.000đ",
    image: "https://picsum.photos/seed/ploybay-rose-box/800/1000",
    gridClass: "md:col-span-7 lg:col-span-7",
    aspectClass: "aspect-[4/5]",
    offsetClass: "",
  },
  {
    id: "crimson-velvet",
    name: "Crimson Velvet Gift Set",
    category: "Set Quà Tặng Velvet",
    price: "2.400.000đ",
    image: "https://picsum.photos/seed/ploybay-velvet-set/1000/1000",
    gridClass: "md:col-span-5 lg:col-span-5",
    aspectClass: "aspect-square",
    offsetClass: "md:mt-32",
  },
  {
    id: "autumn-whisper",
    name: "Autumn Whisper Bouquet",
    category: "Bó Hoa Thì Thầm Mùa Thu",
    price: "950.000đ",
    image: "https://picsum.photos/seed/ploybay-autumn-bouquet/1000/1000",
    gridClass: "md:col-span-5 lg:col-span-5",
    aspectClass: "aspect-square",
    offsetClass: "md:-mt-12",
  },
  {
    id: "royal-lily",
    name: "Royal White Lily Jar",
    category: "Bình Ly Trắng Hoàng Gia",
    price: "1.850.000đ",
    image: "https://picsum.photos/seed/ploybay-white-lily/800/1000",
    gridClass: "md:col-span-7 lg:col-span-7",
    aspectClass: "aspect-[4/5]",
    offsetClass: "md:mt-16",
  },
];

export default function ProductGrid() {
  return (
    <section id="collections" className="w-full px-6 py-24 md:px-12 bg-[#f9f8f6]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header - Stacked vertically (Split-header ban) */}
        <div className="mb-20 max-w-[65ch]">
          <h2 className="font-serif text-3xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl leading-[1.15]">
            Những Tác Phẩm Quà Tặng Điển Hình
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-zinc-600">
            Mỗi thiết kế tại Ploybay được hoàn thiện thủ công từ những hộp quà bọc nhung cao cấp nâng niu mọi cảm xúc của người trao nhận.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-12 md:gap-x-12 lg:gap-x-20">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`group flex flex-col space-y-6 ${product.gridClass} ${product.offsetClass}`}
            >
              <Link href="#contact" className="block relative w-full overflow-hidden bg-black/5">
                <div className={`relative w-full overflow-hidden ${product.aspectClass}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-w-7xl) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle border outline for premium feel */}
                  <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                </div>
              </Link>
              
              <div className="flex flex-col space-y-2">
                <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase">
                  {product.category}
                </span>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-light text-zinc-900 leading-[1.2]">
                      <Link href="#contact" className="hover:text-zinc-600 transition-colors duration-300">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="font-sans text-sm text-zinc-500">
                      {product.price}
                    </p>
                  </div>
                  
                  <Link
                    href="#contact"
                    className="font-sans text-xs font-semibold tracking-widest text-zinc-900 uppercase border-b border-zinc-900/20 pb-0.5 transition-all duration-300 hover:border-zinc-900 hover:text-zinc-600 shrink-0"
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
