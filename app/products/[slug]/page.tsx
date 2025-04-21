"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Layout from "@/components/layout"
import ColorOption from "@/components/color-option"
import AccordionSection from "@/components/accordion-section"
import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/sections/product-carousel"
import ProductImageCarousel from "@/components/sections/product-image-carousel"

// Define types for the product data
interface Material {
  color: string;
  name: string;
}

interface Image {
  src: string;
  alt: string;
}

interface RelatedProduct {
  title: string;
  slug: string;
  imageSrc: string;
}

interface AccordionItem {
  title: string;
}

interface AccordionSection {
  title: string;
  items: AccordionItem[];
}

interface ProductData {
  title: string;
  description: string;
  materials: Material[];
  sizes: string[];
  images: Image[];
  relatedProducts: RelatedProduct[];
  accordionSections: AccordionSection[];
}

type ProductsDataType = {
  [key: string]: ProductData;
}

// Product data mapping - in a real app this would come from a database or API
const productsData: ProductsDataType = {
  "shelf-f20": {
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
  },
  "bed": {
    title: "BED",
    description:
      "The FOUM Bed is a minimalist design crafted with exceptional attention to detail. Its simple, elegant form allows the quality of materials and craftsmanship to take center stage. The bed frame is designed with a subtle floating appearance, providing visual lightness while maintaining structural integrity.",
    materials: [
      { color: "#E49B0F", name: "Oak" },
      { color: "#8B7355", name: "Walnut" },
      { color: "#000000", name: "Black Oak" },
      { color: "#D3D3D3", name: "Light Ash" },
    ],
    sizes: ["Single", "Double", "Queen", "King"],
    images: [
      { src: "/images/shelf-120.jpg", alt: "Bed Front View" },
      { src: "/images/kunderi-flat/milan-design-week.png", alt: "Bed Side View" },
      { src: "/images/kunderi-flat/gonsiori-flat.png", alt: "Bed Detail" },
      { src: "/images/kunderi-flat/shelf-mini.png", alt: "Bed in Context" },
    ],
    relatedProducts: [
      { title: "HEADBOARD", slug: "headboard", imageSrc: "/images/shelf-60.jpg" },
      { title: "SIDE TABLE", slug: "side-table", imageSrc: "/images/rummu-cafe/entrance-1.png" },
      { title: "SHELF F20", slug: "shelf-f20", imageSrc: "/images/shelf-120.jpg" },
      { title: "MIRROR", slug: "mirror", imageSrc: "/images/shelf-120.jpg" },
      { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/images/kunderi-flat/custom-made-vase.png" },
      { title: "WOODEN CHAIR", slug: "wooden-chair", imageSrc: "/images/kunderi-flat/after.png" },
      { title: "STORAGE UNIT", slug: "storage-unit", imageSrc: "/images/kunderi-flat/planning.png" },
      { title: "COFFEE TABLE", slug: "coffee-table", imageSrc: "/images/rummu-cafe/rummu-hero.png" },
    ],
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
}

export default function ProductPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [selectedColor, setSelectedColor] = useState("#E49B0F")
  const [productData, setProductData] = useState<ProductData | null>(null)

  useEffect(() => {
    // Get product data based on slug
    if (slug && productsData[slug]) {
      setProductData(productsData[slug])
    } else {
      // Fallback to first product if slug is invalid
      const firstProductSlug = Object.keys(productsData)[0]
      setProductData(productsData[firstProductSlug])
    }
  }, [slug])

  if (!productData) {
    return <Layout><div className="p-12 text-center">Loading...</div></Layout>
  }

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="py-8 md:py-16 px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24">
            <div className="md:col-span-1">
              <div className="md:sticky md:top-[200px]">
                <ProductImageCarousel images={productData.images} />
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="space-y-10 md:space-y-16">
                <div>
                  <h1 className="caption mb-4 md:mb-8">{productData.title}</h1>
                  <p className="small mb-8 md:mb-16">{productData.description}</p>
                </div>

                <div>
                  <p className="caption mb-4 md:mb-8">MATERIALS</p>
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
                  <p className="caption mb-4 md:mb-8">AVAILABLE SIZES</p>
                  <div className="flex space-x-4 md:space-x-8">
                    {productData.sizes.map((size) => (
                      <div key={size} className="small">
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Button className="bg-black text-white rounded-full px-6 py-2 md:px-8 md:py-2">GET IN TOUCH</Button>
                </div>

                <div className="space-y-8 md:space-y-16">
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

