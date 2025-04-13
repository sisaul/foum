"use client"

import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import FeaturedProductsHeaderSection from "@/components/sections/featured-products-header-section"
import ColorOption from "@/components/color-option"
import AccordionSection from "@/components/accordion-section"
import { Button } from "@/components/ui/button"

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
    image: "/images/shelf-60.jpg",
    relatedProducts: [
      { title: "SILVER WARE", slug: "silver-ware", imageSrc: "/images/kunderi-flat/milan-design-week.png" },
      { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/images/kunderi-flat/gonsiori-flat.png" },
      { title: "SHELF MINI", slug: "shelf-mini", imageSrc: "/images/kunderi-flat/shelf-mini.png" },
      { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/images/kunderi-flat/custom-made-vase.png" },
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
              <div className="sticky top-8">
                <div className="relative aspect-square w-full">
                  <Image
                    src={productData.image || "/images/shelf-60.jpg"}
                    alt={productData.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <h1 className="caption mb-8">{productData.title}</h1>
              <p className="small mb-16">{productData.description}</p>

              <div className="mb-16">
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

              <div className="mb-16">
                <p className="caption mb-8">AVAILABLE SIZES</p>
                <div className="flex space-x-8">
                  {productData.sizes.map((size) => (
                    <div key={size} className="small">
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-black text-white rounded-full px-8 py-2 mb-16">GET IN TOUCH</Button>

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

          <FeaturedProductsHeaderSection 
            title="DISCOVER MORE"
            products={productData.relatedProducts}
            columns={4}
            hideViewDetailsLink={true}
          />
        </div>
      </div>
    </Layout>
  )
}

