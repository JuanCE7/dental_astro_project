import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function TreatmentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [treatment, setTreatment] = useState(null)

  useEffect(() => {
    const handleOpenModal = (event) => {
      setTreatment(event.detail)
      setIsOpen(true)
    }

    document.addEventListener('openModal', handleOpenModal)
    return () => document.removeEventListener('openModal', handleOpenModal)
  }, [])

  function closeModal() {
    setIsOpen(false)
  }

  if (!treatment) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-cyan-900/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-sand-50 p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative h-64 mb-6">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 to-transparent flex items-end p-6">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold text-white"
                    >
                      {treatment.title}
                    </Dialog.Title>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-cyan-700 mb-8 text-lg">{treatment.description}</p>

                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-primary mb-4">Proceso del Tratamiento</h4>
                    <ul className="space-y-3">
                      {treatment.steps.map((step, index) => (
                        <li key={index} className="flex items-center text-cyan-700">
                          <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3 text-sm font-semibold">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-primary mb-4">Beneficios</h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {treatment.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-cyan-700">
                          <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-3">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}