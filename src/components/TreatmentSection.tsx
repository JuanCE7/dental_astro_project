"use client"
import { useState } from "react"
import TreatmentModal from "./TreatmentModal"

interface Treatment {
  title: string
  description: string
  image: string
  steps: string[]
  benefits: string[]
}

interface Props {
  services: Treatment[]
}

export default function TreatmentsSection({ services }: Props) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)

  return (
    <section className="py-20 bg-gray-50" id="treatments">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          NUESTROS TRATAMIENTOS
        </h2>
        <p className="text-center mb-12 text-lg max-w-2xl mx-auto text-cyan-700">
          Ofrecemos una amplia gama de servicios dentales utilizando tecnología de
          vanguardia y técnicas modernas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedTreatment(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent flex items-end p-6 transform transition-transform duration-500">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sand-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TreatmentModal
        treatment={selectedTreatment}
        isOpen={selectedTreatment !== null}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  )
}