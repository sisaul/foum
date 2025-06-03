import AboutTextSection from "@/components/sections/about-text-section"
import ProductCarousel from "@/components/sections/product-carousel"

export default function AboutPage() {
  // Products data copied exactly from studio page
  const featuredProducts = [
    { title: 'MILAN DESIGN WEEK OVERVIEW', slug: 'milan-design-week', imageSrc: '/images/kunderi-flat/milan-design-week.png' },
    { title: 'GONSIORI FLAT, TALLINN', slug: 'gonsiori-flat', imageSrc: '/images/kunderi-flat/gonsiori-flat.png' },
    { title: 'SHELF MINI', slug: 'shelf-mini', imageSrc: '/images/kunderi-flat/shelf-mini.png' },
    { title: 'CUSTOM MADE VASE', slug: 'custom-made-vase', imageSrc: '/images/kunderi-flat/custom-made-vase.png' },
    { title: 'STORAGE UNIT', slug: 'storage-unit', imageSrc: '/images/rummu-cafe/ambience-1.png' },
    { title: 'WOODEN CHAIR', slug: 'wooden-chair', imageSrc: '/images/rummu-cafe/ambience-2.png' },
    { title: 'COFFEE TABLE', slug: 'coffee-table', imageSrc: '/images/rummu-cafe/details-1.png' },
    { title: 'SIDE TABLE', slug: 'side-table', imageSrc: '/images/rummu-cafe/details-2.png' }
  ].map(product => ({
    ...product,
    image: product.imageSrc
  }));

  return (
    <div className="max-w-[88rem] mx-auto container-padding py-8 md:py-16">
        <AboutTextSection 
          image={{
            src: "/images/about-foum.png",
            alt: "FOUM Studio founders"
          }}
          description={`Founded in 2020 by Anna-Grete Konsap and Kaarel Luht, Foum Studio emerged from their shared passion for furniture and spatial design. From prototyping with whatever was available on an art student\'s budget to launching a multidisciplinary design studio, they\'ve built a wealth of experience making things work on any scale.

Their portfolio spans a broad spectrum – from product design, bespoke furniture, and home goods to intimate private interiors and public spaces. Combining interior architecture and tailored furniture, Foum by Foum Studio is a true reflection of their collaborative spirit.`}
        />
        <ProductCarousel
          title="RECENT UPDATES"
          products={featuredProducts}
          columns={4}
          hideViewDetailsLink={true}
          darkMode={false}
        />
    </div>
  )
}

