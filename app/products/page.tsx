import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import ProductsCatalog from "../components/ProductsCatalog";

export const metadata = {
  title: "Bộ Sưu Tập Quà Tặng | Ploybay",
  description:
    "Khám phá bộ sưu tập quà tặng cao cấp từ Ploybay, được hoàn thiện thủ công cho từng khoảnh khắc trân trọng nhất.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-[100dvh] bg-[#f9f8f6]">
      {/* ── Sticky light header ── */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-[#f9f8f6]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/"
            className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
          >
            Trang chủ
          </Link>

          {/* Logo centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/logo.png"
              alt="Ploybay Logo"
              width={140}
              height={56}
              className="h-10 w-auto object-contain brightness-0"
              priority
            />
          </Link>

          {/* Contact CTA */}
          <Link
            href="/#contact"
            className="hidden rounded-full border border-zinc-300 px-5 py-1.5 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white md:block"
          >
            Liên hệ
          </Link>

          {/* Mobile: empty spacer so logo stays centered */}
          <div className="w-[72px] md:hidden" aria-hidden />
        </div>
      </header>

      {/* ── Page hero ── */}
      <div className="border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-12">
          {/* Breadcrumb */}
          <nav
            className="mb-5 flex items-center gap-2 font-sans text-[11px] tracking-widest uppercase text-zinc-400"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-zinc-700">
              Trang chủ
            </Link>
            <span aria-hidden>/</span>
            <span className="text-zinc-600">Bộ Sưu Tập</span>
          </nav>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-4xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
                Bộ Sưu Tập Quà Tặng
              </h1>
              <p className="mt-3 max-w-[52ch] font-sans text-base leading-relaxed text-zinc-500">
                Những tác phẩm được chắt lọc kỹ lưỡng, hoàn thiện thủ công cho mỗi khoảnh khắc trân trọng nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Catalog (filter + grid) ── */}
      <main>
        <ProductsCatalog />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}