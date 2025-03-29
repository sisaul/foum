import Image from "next/image"
import Layout from "@/components/layout"
import Accordion from "@/components/accordion"

export default function ContactPage() {
  return (
    <Layout>
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px]">
            <Image src="/placeholder.svg?height=800&width=800" alt="FOUM showroom" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">OUR SHOWROOM</h1>
            <p className="text-lg mb-6">
              Give us a visit in Krulli Creative District, Kopli 70A, Tallinn. Our showroom is on the third floor.
              Please book an appointment ahead.
            </p>

            <h2 className="text-xl font-bold mb-4">BOOK AN APPOINTMENT:</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:+37253420141" className="bg-black text-white px-4 py-2 rounded-full">
                +372 5342 0141
              </a>
              <a href="mailto:info@foum.studio" className="bg-black text-white px-4 py-2 rounded-full">
                info@foum.studio
              </a>
            </div>

            <h2 className="text-xl font-bold mb-4">FIND US IN STORES:</h2>
            <div className="space-y-2">
              <Accordion title="ESTONIAN DESIGN HOUSE">
                <p>Pärnu mnt 6, Tallinn</p>
                <p>Open Mon-Fri 10-18, Sat 10-16</p>
              </Accordion>
              <Accordion title="HELSINKI FURNITURE SPACE">
                <p>Aleksanterinkatu 36, Helsinki</p>
                <p>Open Mon-Fri 10-18, Sat 10-16</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

