"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import ColorOption from "@/components/color-option"
import AccordionSection from "@/components/accordion-section"
import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/sections/product-carousel"
import ProductImageCarousel from "@/components/sections/product-image-carousel"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("#E49B0F")

  // This would normally come from a database or API
  const productData = {
    title: "SHELF F20",
    description:
      "The Simple Shelf is a refined take on a classic, its character inspired by shelving considered a staple in Danish homes as early as the 1930s. Carpenter would attach planks to walls, creating what would later be known as the String Shelf, to custom shelving, cut down to fit. A versatile design for bedside, kitchen, office, storage, and display.",
    materials: [
      { color: "#E49B0F", name: "Oak" },
      { color: "#8B7355", name: "Walnut" },
      { color: "#9FA38A", name: "Sage" },
      { color: "#7D3C3C", name: "Burgundy" },
    ],
    sizes: ["F20", "F40", "F60", "F80"],
    images: [
      { src: "/images/shelf-60.jpg", alt: "Shelf F20 Front View" },
      { src: "/images/kunderi-flat/milan-design-week.png", alt: "Shelf F20 Side View" },
      { src: "/images/kunderi-flat/gonsiori-flat.png", alt: "Shelf F20 Detail" },
      { src: "/images/kunderi-flat/shelf-mini.png", alt: "Shelf F20 in Context" },
    ],
    relatedProducts: [
      { title: "SILVER WARE", slug: "silver-ware", imageSrc: "/images/kunderi-flat/milan-design-week.png" },
      { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/images/kunderi-flat/gonsiori-flat.png" },
      { title: "SHELF MINI", slug: "shelf-mini", imageSrc: "/images/kunderi-flat/shelf-mini.png" },
      { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/images/kunderi-flat/custom-made-vase.png" },
      { title: "STORAGE UNIT", slug: "storage-unit", imageSrc: "/images/kunderi-flat/planning.png" },
      { title: "WOODEN CHAIR", slug: "wooden-chair", imageSrc: "/images/kunderi-flat/after.png" },
      { title: "COFFEE TABLE", slug: "coffee-table", imageSrc: "/images/rummu-cafe/rummu-hero.png" },
      { title: "SIDE TABLE", slug: "side-table", imageSrc: "/images/rummu-cafe/entrance-1.png" },
    ],
    // This would come from Sanity
    accordionSections: [
      {
        title: "DOWNLOAD ASSETS",
        items: [
          { title: "TECHNICAL DRAWINGS" },
          { title: "IMAGES" }
        ]
      },
      {
        title: "FAQ",
        items: [
          { title: "WHERE ARE YOUR PRODUCTS MADE?" },
          { title: "DOES FOUM OFFER CUSTOMIZATION OF PRODUCTS?" },
          { title: "B2B PROJECTS" },
          { title: "HOW TO TAKE CARE OF PRODUCTS?" }
        ]
      },
      {
        title: "FIND US IN",
        items: [
          { title: "ESTONIAN DESIGN HOUSE" },
          { title: "HELSINKI FURNITURE SPACE" }
        ]
      }
    ]
  }

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="container-padding section-spacing">
          <div className="grid grid-cols-1 md:grid-cols-2 standard-gap mb-24">
            <div className="md:col-span-1">
              <div className="sticky top-[200px]">
                <ProductImageCarousel images={productData.images} />
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="space-y-16">
                <div>
                  <h1 className="caption mb-8">{productData.title}</h1>
                  <p className="small mb-16">{productData.description}</p>
                </div>

                <div>
                  <p className="caption mb-8">MATERIALS</p>
                  <div className="flex space-x-4">
                    {productData.materials.map((material) => (
                      <ColorOption
                        key={material.color}
                        color={material.color}
                        isSelected={selectedColor === material.color}
                        onClick={() => setSelectedColor(material.color)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="caption mb-8">AVAILABLE SIZES</p>
                  <div className="flex space-x-8">
                    {productData.sizes.map((size) => (
                      <div key={size} className="small">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Button className="bg-black text-white rounded-full px-8 py-2">GET IN TOUCH</Button>
                </div>

                <div className="space-y-16">
                  {productData.accordionSections.map((section, index) => (
                    <AccordionSection
                      key={index}
                      title={section.title}
                      items={section.items}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ProductCarousel
            title="DISCOVER MORE"
            products={productData.relatedProducts}
            columns={4}
            hideViewDetailsLink={true}
            darkMode={false}
          />
        </div>
      </div>
    </Layout>
  )
}

