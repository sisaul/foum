"use client";

import { useState } from "react";
import ColorOption from "@/components/sections/color-option";
import AccordionSection from "@/components/sections/accordion-section";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/sections/product-carousel";
import ProductImageCarousel from "@/components/sections/product-image-carousel";
import { ProductSubpage, ProductAccordionSection } from "@/lib/sanity/types";

export default function ProductDetailClient({
  product,
  images,
  relatedProducts
}: {
  product: ProductSubpage;
  images: { src: string; alt: string }[];
  relatedProducts: { title: string; slug: string; imageSrc: string }[];
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.materials?.[0]?.color || null
  );

  // Fallback for main image
  const mainImage = product.mainImage?.asset ? product.mainImage : (product.images && product.images[0]) ? product.images[0] : null;

  // Debug log for downloadable assets
  // eslint-disable-next-line no-console
  console.log("Downloadable Assets Data:", product.accordionSections?.filter(section => section._type === 'downloadableAssetsSection'));

  return (
    <div className="max-w-[88rem] mx-auto">
      <div className="py-8 md:py-16 px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24">
          <div className="md:col-span-1">
            <div className="md:sticky md:top-[200px]">
              {mainImage && <ProductImageCarousel images={images} />}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="space-y-10 md:space-y-16">
              <div>
                <h1 className="caption mb-4 md:mb-8">{product.title}</h1>
                <p className="small mb-8 md:mb-16">{product.description}</p>
              </div>
              <div>
                <p className="caption mb-4 md:mb-8">MATERIALS</p>
                <div className="flex space-x-4">
                  {product.materials?.map((material) => {
                    let color = material.color;
                    if (color && !color.startsWith("#") && color.match(/^[0-9A-Fa-f]{6}$/)) {
                      color = `#${color}`;
                    }
                    return (
                      <ColorOption
                        key={material.color}
                        color={color}
                        name={material.name}
                        isSelected={selectedColor === material.color}
                        onClick={() => setSelectedColor(material.color)}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="caption mb-4 md:mb-8">AVAILABLE SIZES</p>
                <div className="flex space-x-4 md:space-x-8">
                  {product.sizes?.map((size) => (
                    <div key={size} className="small">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Button variant="foumRounded" size="foumRounded">GET IN TOUCH</Button>
              </div>
              <div className="mt-16 md:mt-24 space-y-8 md:space-y-16">
                {product.accordionSections?.map((section: ProductAccordionSection) => {
                  let sectionItems: { title: string; content?: React.ReactNode }[] = [];
                  
                  switch (section._type) {
                    case 'downloadableAssetsSection':
                      sectionItems = (section.assets || []).map(asset => ({
                        title: asset.type,
                        content: asset.files && asset.files.length > 0 ? (
                          <div className="space-y-1">
                            {asset.files.map((file, index) => (
                              file.asset?.url ? (
                                <div key={file.asset._ref || index}>
                                  <span className="font-bold">-</span>
                                  {' '}
                                  <a
                                    href={file.asset.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black no-underline hover:underline small"
                                  >
                                    {file.asset.originalFilename || `Download File ${index + 1}`}
                                  </a>
                                </div>
                              ) : null
                            ))}
                          </div>
                        ) : (
                          <span>No files available</span>
                        )
                      }));
                      break;
                    case 'faqSection':
                      sectionItems = (section.items || []).map(faq => ({
                        title: faq.question,
                        content: <><span className="font-bold">-</span> {faq.answer}</>
                      }));
                      break;
                    case 'findUsInSection':
                      sectionItems = (section.locations || []).map(loc => ({
                        title: loc.name,
                        content: <><span className="font-bold">-</span> {loc.details}</>
                      }));
                      break;
                    default:
                      return null;
                  }

                  if (sectionItems.length === 0) return null;

                  return (
                    <div key={section._key}>
                      <AccordionSection
                        title={section.title}
                        items={sectionItems}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-32">
            <ProductCarousel
              title={product.relatedProductsTitle || "COMBINE WITH"}
              products={relatedProducts}
              columns={4}
              hideViewDetailsLink={true}
              darkMode={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
