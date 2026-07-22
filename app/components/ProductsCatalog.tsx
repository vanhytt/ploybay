"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  aspect: string;
}

const PRODUCTS: Product[] = [
  {
    id: "classic-rose-box",
    name: "Classic Rose Box",
    category: "Hoa Hồng",
    price: 1250000,
    image: "https://picsum.photos/seed/ploybay-classic-rose/600/750",
    aspect: "aspect-[4/5]",
  },
  {
    id: "crimson-velvet-set",
    name: "Crimson Velvet Gift Set",
    category: "Set Quà Tặng",
    price: 2400000,
    image: "https://picsum.photos/seed/ploybay-velvet-crimson/600/600",
    aspect: "aspect-square",
  },
  {
    id: "autumn-whisper",
    name: "Autumn Whisper Bouquet",
    category: "Bó Hoa",
    price: 950000,
    image: "https://picsum.photos/seed/ploybay-autumn-whisper/600/750",
    aspect: "aspect-[4/5]",
  },
  {
    id: "royal-lily-jar",
    name: "Royal White Lily Jar",
    category: "Bình Hoa",
    price: 1850000,
    image: "https://picsum.photos/seed/ploybay-royal-lily/600/750",
    aspect: "aspect-[4/5]",
  },
  {
    id: "midnight-orchid",
    name: "Midnight Orchid Box",
    category: "Hoa Lan",
    price: 1600000,
    image: "https://picsum.photos/seed/ploybay-midnight-orchid/600/600",
    aspect: "aspect-square",
  },
  {
    id: "golden-peony",
    name: "Golden Peony Arrangement",
    category: "Bình Hoa",
    price: 2100000,
    image: "https://picsum.photos/seed/ploybay-peony-golden/600/750",
    aspect: "aspect-[4/5]",
  },
  {
    id: "sakura-dream",
    name: "Sakura Dream Set",
    category: "Set Quà Tặng",
    price: 1450000,
    image: "https://picsum.photos/seed/ploybay-sakura-dream/600/600",
    aspect: "aspect-square",
  },
  {
    id: "enchanted-garden",
    name: "Enchanted Garden Box",
    category: "Hoa Hồng",
    price: 1750000,
    image: "https://picsum.photos/seed/ploybay-enchanted-garden/600/750",
    aspect: "aspect-[4/5]",
  },
];

const CATEGORIES = [
  "Tất cả",
  "Hoa Hồng",
  "Bó Hoa",
  "Bình Hoa",
  "Set Quà Tặng",
  "Hoa Lan",
];

const PRICE_RANGES = [
  { label: "Tất cả mức giá", min: 0, max: Infinity },
  { label: "Dưới 1.000.000đ", min: 0, max: 999999 },
  { label: "1.000.000 - 2.000.000đ", min: 1000000, max: 2000000 },
  { label: "Trên 2.000.000đ", min: 2000001, max: Infinity },
];

function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const hasActiveFilter = activeCategory !== "Tất cả" || activePriceIdx !== 0;

  const filtered = PRODUCTS.filter((p) => {
    const { min, max } = PRICE_RANGES[activePriceIdx];
    return (
      (activeCategory === "Tất cả" || p.category === activeCategory) &&
      p.price >= min &&
      p.price <= max
    );
  });

  function clearFilters() {
    setActiveCategory("Tất cả");
    setActivePriceIdx(0);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
      {/* Mobile filter toggle */}
      <button
        onClick={() => setMobileFilterOpen((v) => !v)}
        className="mb-6 flex w-full items-center justify-between border border-zinc-200 bg-white px-5 py-3 font-sans text-xs font-semibold tracking-widest uppercase text-zinc-800 transition-colors hover:bg-zinc-50 md:hidden"
        aria-expanded={mobileFilterOpen}
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 stroke-[1.5]" />
          Bộ lọc
          {hasActiveFilter && (
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[9px] text-white">
              !
            </span>
          )}
        </span>
        {mobileFilterOpen && <X className="h-4 w-4 stroke-[1.5]" />}
      </button>

      <div className="flex gap-10 lg:gap-16">
        {/* ── Sidebar filter ── */}
        <aside
          className={`w-full shrink-0 md:block md:w-52 lg:w-60 ${
            mobileFilterOpen ? "block" : "hidden"
          }`}
        >
          <div className="sticky top-8 space-y-10">
            {/* Category */}
            <div>
              <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-zinc-400">
                Danh mục
              </p>
              <ul className="space-y-0.5">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full py-1.5 text-left font-sans text-sm transition-colors duration-200 ${
                        activeCategory === cat
                          ? "font-semibold text-zinc-900"
                          : "font-normal text-zinc-500 hover:text-zinc-800"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price range */}
            <div>
              <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-zinc-400">
                Tầm giá
              </p>
              <ul className="space-y-0.5">
                {PRICE_RANGES.map((range, idx) => (
                  <li key={range.label}>
                    <button
                      onClick={() => setActivePriceIdx(idx)}
                      className={`w-full py-1.5 text-left font-sans text-sm transition-colors duration-200 ${
                        activePriceIdx === idx
                          ? "font-semibold text-zinc-900"
                          : "font-normal text-zinc-500 hover:text-zinc-800"
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear filters */}
            {hasActiveFilter && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-zinc-400 underline underline-offset-4 transition-colors hover:text-zinc-700"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </aside>

        {/* ── Product grid ── */}
        <div className="min-w-0 flex-1">
          {/* Result count */}
          <p className="mb-8 font-sans text-xs text-zinc-400">
            {filtered.length} sản phẩm
          </p>

          {filtered.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="font-serif text-3xl font-light text-zinc-300">
                Không tìm thấy sản phẩm
              </p>
              <p className="mt-3 max-w-[36ch] font-sans text-sm leading-relaxed text-zinc-400">
                Thử thay đổi bộ lọc để khám phá thêm những tác phẩm quà tặng của Ploybay.
              </p>
              <button
                onClick={clearFilters}
                className="mt-8 border border-zinc-900 px-8 py-3 font-sans text-xs font-semibold tracking-widest uppercase text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
              >
                Xem tất cả
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-3">
              {filtered.map((product) => (
                <article key={product.id} className="group flex flex-col space-y-4">
                  {/* Image */}
                  <Link
                    href="#contact"
                    className={`relative block w-full overflow-hidden bg-zinc-100 ${product.aspect}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                  </Link>

                  {/* Info */}
                  <div className="flex flex-col space-y-1.5">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
                      {product.category}
                    </span>
                    <h2 className="font-serif text-lg font-light leading-snug text-zinc-900 md:text-xl">
                      <Link
                        href="#contact"
                        className="transition-colors duration-200 hover:text-zinc-600"
                      >
                        {product.name}
                      </Link>
                    </h2>
                    <p className="font-sans text-sm text-zinc-500">
                      {formatVND(product.price)}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className="mt-1 inline-block border border-zinc-200 px-4 py-2.5 text-center font-sans text-[11px] font-semibold tracking-widest uppercase text-zinc-800 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-[0.98]"
                  >
                    Xem chi tiết
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}