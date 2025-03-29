"use client"

import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import ProductCarousel from "@/components/sections/product-carousel"
import ColorOption from "@/components/color-option"
import Accordion from "@/components/accordion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
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
    image: "/placeholder.svg?height=600&width=300",
    relatedProducts: [
      { title: "SILVER WARE", slug: "silver-ware", imageSrc: "/placeholder.svg?height=400&width=400" },
      { title: "GONSIORI FLAT, TALLINN", slug: "gonsiori-flat", imageSrc: "/placeholder.svg?height=400&width=400" },
      { title: "SHELF MINI", slug: "shelf-mini", imageSrc: "/placeholder.svg?height=400&width=400" },
      { title: "CUSTOM MADE VASE", slug: "custom-made-vase", imageSrc: "/placeholder.svg?height=400&width=400" },
    ],
  }

  return (
    <Layout>
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="relative w-[300px] h-[600px] mx-auto">
                <Image
                  src={productData.image || "/placeholder.svg"}
                  alt={productData.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <h1 className="text-2xl font-bold mb-4">{productData.title}</h1>
            <p className="mb-8">{productData.description}</p>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">MATERIALS</h2>
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

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">AVAILABLE SIZES</h2>
              <div className="flex space-x-8">
                {productData.sizes.map((size) => (
                  <div key={size} className="text-sm">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-black text-white rounded-full px-8 py-2 mb-8">GET IN TOUCH</Button>

            <div className="space-y-0">
              <Accordion title="DOWNLOAD ASSETS">
                <div className="space-y-0">
                  <div className="flex justify-between items-center py-2 border-b border-black">
                    <span>TECHNICAL DRAWINGS</span>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>IMAGES</span>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </Accordion>

              <Accordion title="FAQ">
                <div className="space-y-0">
                  <div className="flex justify-between items-center py-2 border-b border-black">
                    <span>WHERE ARE YOUR PRODUCTS MADE?</span>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black">
                    <span>DOES FOUM OFFER CUSTOMIZATION OF PRODUCTS?</span>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black">
                    <span>B2B PROJECTS</span>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>HOW TO TAKE CARE OF PRODUCTS?</span>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </Accordion>

              <Accordion title="FIND US IN">
                <div className="space-y-0">
                  <div className="flex justify-between items-center py-2 border-b border-black">
                    <span>ESTONIAN DESIGN HOUSE</span>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>HELSINKI FURNITURE SPACE</span>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        <ProductCarousel products={productData.relatedProducts} />
      </div>
    </Layout>
  )
}

