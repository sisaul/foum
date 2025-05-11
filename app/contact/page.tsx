"use client"

import Image from "next/image"
import Layout from "@/components/layout"
import AccordionSection from "@/components/accordion-section"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const storeLocations = {
    title: "FIND US IN STORES:",
    items: [
      {
        title: "ESTONIAN DESIGN HOUSE",
        content: (
          <>
            <p className="small">Pärnu mnt 6, Tallinn</p>
            <p className="small">Open Mon-Fri 10-18, Sat 10-16</p>
          </>
        )
      },
      {
        title: "HELSINKI FURNITURE SPACE",
        content: (
          <>
            <p className="small">Aleksanterinkatu 36, Helsinki</p>
            <p className="small">Open Mon-Fri 10-18, Sat 10-16</p>
          </>
        )
      }
    ]
  }

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="container-padding section-spacing pb-10 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 standard-gap">
            <div className="relative aspect-square">
              <Image src="/images/showroom.png" alt="FOUM showroom" fill className="object-cover" />
            </div>
            <div>
              <h1 className="title mb-8">OUR SHOWROOM</h1>
              <p className="body mb-16">
                Give us a visit in Krulli Creative District, Kopli 70A, Tallinn. Our showroom is on the third floor.
                Please book an appointment ahead.
              </p>

              <p className="caption mb-8">BOOK AN APPOINTMENT:</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button variant="foumRounded" size="foumRounded" asChild>
                  <a href="tel:+37253420141">+372 5342 0141</a>
                </Button>
                <Button variant="foumRounded" size="foumRounded" asChild>
                  <a href="mailto:info@foum.studio">info@foum.studio</a>
                </Button>
              </div>

              <AccordionSection {...storeLocations} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

