import Layout from "@/components/layout"
import Image from "next/image"

export default function AboutPage() {
  // Products data copied exactly from studio page
  const featuredProducts = [
    { title: 'MILAN DESIGN WEEK OVERVIEW', slug: 'milan-design-week', imageSrc: '/images/kunderi-flat/milan-design-week.png' },
    { title: 'GONSIORI FLAT, TALLINN', slug: 'gonsiori-flat', imageSrc: '/images/kunderi-flat/gonsiori-flat.png' },
    { title: 'SHELF MINI', slug: 'shelf-mini', imageSrc: '/images/kunderi-flat/shelf-mini.png' },
    { title: 'CUSTOM MADE VASE', slug: 'custom-made-vase', imageSrc: '/images/kunderi-flat/custom-made-vase.png' }
  ].map(product => ({
    ...product,
    basePath: "/products",
    viewDetailsText: "READ MORE",
    linkClassName: "underline decoration-1 underline-offset-4"
  }));

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="container-padding section-spacing">
          {/* Main intro grid with image and text side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 standard-gap mb-20">
            {/* Founders image */}
            <div className="relative aspect-square">
              <Image 
                src="/images/about-foum.png"
                alt="FOUM Studio founders"
                fill
                className="object-cover"
              />
            </div>
            
            {/* About text */}
            <div>
              <p className="body-regular">
                Founded in 2020 by Anna-Grete Konsap and Kaarel Lüht, Foum Studio emerged from their shared passion for 
                furniture and spatial design. From prototyping with whatever was available on an art student&apos;s budget to 
                launching a multidisciplinary design studio, they&apos;ve built a wealth of experience making things work on any scale.
              </p>
              <p className="body-regular mt-4">
                Their portfolio spans a broad spectrum – from product design, bespoke furniture, and home goods to 
                intimate private interiors and public spaces. Combining interior architecture and tailored furniture, Foum 
                by Foum Studio is a true reflection of their collaborative spirit.
              </p>
            </div>
          </div>
          
          {/* Divider line */}
          <div className="w-full h-[1px] bg-foum-black/10 mb-6"></div>
          
          {/* Recent Updates Section */}
          <div>
            <h2 className="heading-3 mb-6">RECENT UPDATES</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 standard-gap">
              {featuredProducts.map((product) => (
                <div key={product.slug}>
                  <div className="relative aspect-square mb-3">
                    <Image 
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="caption mb-1">{product.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

