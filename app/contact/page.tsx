import Image from "next/image"
import Layout from "@/components/layout"
import AccordionSection from "@/components/accordion-section"

export default function ContactPage() {
  const storeLocations = {
    title: "FIND US IN STORES:",
    items: [
      {
        title: "ESTONIAN DESIGN HOUSE",
        content: (
          <>
            <p className="body-regular">Pärnu mnt 6, Tallinn</p>
            <p className="body-regular">Open Mon-Fri 10-18, Sat 10-16</p>
          </>
        )
      },
      {
        title: "HELSINKI FURNITURE SPACE",
        content: (
          <>
            <p className="body-regular">Aleksanterinkatu 36, Helsinki</p>
            <p className="body-regular">Open Mon-Fri 10-18, Sat 10-16</p>
          </>
        )
      }
    ]
  }

  return (
    <Layout>
      <div className="max-w-[88rem] mx-auto">
        <div className="container-padding section-spacing">
          <div className="grid grid-cols-1 md:grid-cols-2 standard-gap mb-24">
            <div className="relative aspect-square">
              <Image src="/images/showroom.png" alt="FOUM showroom" fill className="object-cover" />
            </div>
            <div>
              <h1 className="heading-2 mb-8">OUR SHOWROOM</h1>
              <p className="body-large mb-16">
                Give us a visit in Krulli Creative District, Kopli 70A, Tallinn. Our showroom is on the third floor.
                Please book an appointment ahead.
              </p>

              <p className="font-medium text-xl mb-8">BOOK AN APPOINTMENT:</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="tel:+37253420141" className="bg-foum-black text-white px-8 py-3 rounded-full">
                  +372 5342 0141
                </a>
                <a href="mailto:info@foum.studio" className="bg-foum-black text-white px-8 py-3 rounded-full">
                  info@foum.studio
                </a>
              </div>

              <AccordionSection {...storeLocations} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

