"use client"

import type React from "react"
import { useState } from "react"
import { RefreshCw, Banknote, Award, ChevronUp } from "lucide-react"

interface SubCategory {
  title: string
  description: string
}

interface ServiceDropdown {
  id: string
  theme: "emerald" | "blue" | "amber"
  icon: React.ReactNode
  iconBg: string
  title: string
  subtitle: string
  subcategories: SubCategory[]
}

const services: ServiceDropdown[] = [
  {
    id: "trade-in-dropdown",
    theme: "emerald",
    icon: <RefreshCw className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-100",
    title: "Property Trade-In",
    subtitle: "Swap one property for another",
    subcategories: [
      {
        title: "Direct Property Swap",
        description:
          "We help property owners exchange properties without needing to sell first. This makes it easier to upgrade, downsize, or change locations while keeping your value in property instead of rushing into cash sales.",
      },
      {
        title: "Fair Property Valuation",
        description:
          "Each property is valued using current market data by independent professionals. This keeps the exchange fair for everyone involved and removes guesswork from the process.",
      },
      {
        title: "Lifestyle & Location Matching",
        description:
          "We match people based on real life needs, not just numbers. Family size, location preferences, access needs, and future plans are all taken into account so the swap actually makes sense.",
      },
      {
        title: "Cash Top-Ups When Needed",
        description:
          "If property values don’t match exactly, we clearly structure cash top-ups or payouts. Everything is agreed upfront and written down, so there are no surprises later.",
      },
      {
        title: "Coordinated Move Timelines",
        description:
          "All owners move on a shared timeline. This avoids delays, uncertainty, or one party being left waiting while another moves ahead.",
      },
      {
        title: "Legal & Ownership Transfer",
        description:
          "We handle due diligence, agreements, and title transfers from start to finish. The legal work is managed centrally so owners can focus on moving forward, not paperwork.",
      },
    ],
  },
  {
    id: "property-sale-dropdown",
    theme: "blue",
    icon: <Banknote className="h-5 w-5 text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Property Sale",
    subtitle: "Sell clearly and confidently",
    subcategories: [
      {
        title: "Realistic Pricing",
        description:
          "We help set prices based on real market value, not pressure or guesswork. This avoids underpricing while also preventing listings that sit for too long.",
      },
      {
        title: "Buyer Screening",
        description:
          "Only serious and financially ready buyers are introduced. This reduces failed deals and saves time for everyone involved.",
      },
      {
        title: "Faster Buyer Matching",
        description:
          "We prioritize buyers who are ready to move forward. This helps speed up sales when timing matters, without cutting corners.",
      },
      {
        title: "Clear Fees & Costs",
        description:
          "All fees and costs are explained before you commit. There are no hidden charges added at the end of the process.",
      },
      {
        title: "Sell vs Trade-In Advice",
        description:
          "We help you decide whether selling or trading in is the better option before anything is listed. The right choice depends on your goals, not assumptions.",
      },
      {
        title: "End-to-End Sale Handling",
        description:
          "From accepting an offer to transferring the title, we manage the entire sale as one smooth process. Payments, legal steps, and registration are handled cleanly.",
      },
    ],
  },
  {
    id: "subdivision-dropdown",
    theme: "amber",
    icon: <Award className="h-5 w-5 text-amber-600" />,
    iconBg: "bg-amber-100",
    title: "Subdivision & Registration",
    subtitle: "Unlock land value safely",
    subcategories: [
      {
        title: "Land Feasibility Check",
        description:
          "We first confirm whether subdivision makes sense legally and financially. This prevents breaking land into pieces that reduce long-term value.",
      },
      {
        title: "Subdivision Planning",
        description:
          "Surveyors and planners design the subdivision correctly from the start. Layouts follow regulations and are practical for future use.",
      },
      {
        title: "County Approvals",
        description:
          "We support the process through county and regulatory approvals. Paperwork, follow-ups, and compliance are handled step by step.",
      },
      {
        title: "New Title Creation",
        description:
          "Each subdivided portion gets a clean, legally registered title. This makes future sales, transfers, or financing straightforward.",
      },
      {
        title: "Partial Land Release",
        description:
          "You can unlock value from part of your land while keeping the rest. This allows access to capital without giving up full ownership.",
      },
      {
        title: "Inheritance-Ready Structuring",
        description:
          "Titles are structured to reduce future family disputes. Clear boundaries and documentation help protect land as a long-term family asset.",
      },
    ],
  },
]

export function ServiceDropdowns() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  const getThemeStyles = (theme: "emerald" | "blue" | "amber", isActive: boolean) => {
    if (!isActive) return "border-transparent"
    switch (theme) {
      case "emerald": return "border-l-emerald-500 shadow-emerald-500/10"
      case "blue": return "border-l-blue-500 shadow-blue-500/10"
      case "amber": return "border-l-amber-500 shadow-amber-500/10"
      default: return "border-l-neutral-500"
    }
  }

  const getActiveText = (theme: "emerald" | "blue" | "amber") => {
    switch (theme) {
      case "emerald": return "text-emerald-800"
      case "blue": return "text-blue-800"
      case "amber": return "text-amber-800"
      default: return "text-neutral-900"
    }
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 px-4">
      {services.map((service) => {
        const isServiceOpen = openService === service.id

        return (
          <div
            key={service.id}
            id={service.id}
            className={`bg-white border border-neutral-200 shadow-xl shadow-black/5 transition-all duration-300 min-h-[72px] hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 ${
              isServiceOpen ? "rounded-3xl" : "rounded-2xl"
            }`}
          >
            <div
              onClick={() => setOpenService(isServiceOpen ? null : service.id)}
              className="flex items-center gap-4 p-5 cursor-pointer group"
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${service.iconBg}`}>
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 text-lg">{service.title}</h3>
                {!isServiceOpen && <p className="text-sm text-neutral-500">{service.subtitle}</p>}
              </div>

              <ChevronUp className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${isServiceOpen ? "rotate-0" : "rotate-180"}`} />
            </div>

            {isServiceOpen && (
              <div className="px-5 pb-8 space-y-3">
                {service.subcategories.map((sub) => {
                  const subKey = `${service.id}-${sub.title}`
                  const isOpen = openSub === subKey

                  return (
                    <div
                      key={sub.title}
                      className={`rounded-xl overflow-hidden transition-all duration-300 border-l-[4px] ${
                        isOpen ? `bg-white shadow-lg ${getThemeStyles(service.theme, true)} my-3` : "bg-neutral-50 hover:bg-neutral-100 border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => setOpenSub(isOpen ? null : subKey)}
                        className={`w-full flex justify-between items-center p-4 text-left ${isOpen ? "pb-2" : "pb-4"}`}
                      >
                        <span className={`font-medium transition-colors duration-200 ${isOpen ? getActiveText(service.theme) : "text-neutral-600"}`}>
                          {sub.title}
                        </span>
                        <ChevronUp className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pt-2 pb-6 text-sm text-neutral-600 leading-relaxed max-w-3xl">
                          {sub.description}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
