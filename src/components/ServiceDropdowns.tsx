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
    title: "Property Trade-In (Swap)",
    subtitle: "Swap one property for another",
    subcategories: [
      {
        title: "Direct Property Swaps",
        description:
          "Badilisha enables structured property-to-property exchanges without forcing you to sell first. This allows owners to move into a better-fitting property while keeping value locked in real estate. It is ideal for upgrades, downsizing, or location changes without market pressure.",
      },
      {
        title: "Fair Property Valuation",
        description:
          "Every property involved is independently valued using current market data. This creates a neutral reference point so no party feels disadvantaged. Fair valuation is the foundation that makes swaps sustainable and trusted.",
      },
      {
        title: "Lifestyle & Location Matching",
        description:
          "We match owners based on where they are in life, not just numbers. Location needs, family size, accessibility, and future plans are all considered. This ensures swaps solve real problems, not just financial ones.",
      },
      {
        title: "Cash Top-Ups Where Needed",
        description:
          "When property values don’t align perfectly, we structure clear cash top-ups or payouts. These adjustments are agreed upfront and documented transparently. No surprises, no last-minute renegotiations.",
      },
      {
        title: "Coordinated Timelines",
        description:
          "All parties move on a synchronized timeline to avoid risk and uncertainty. This prevents situations where one owner relocates while another delays. Everyone transitions together, safely and predictably.",
      },
      {
        title: "Legal & Ownership Transfer",
        description:
          "Badilisha manages due diligence, agreements, and title transfers end to end. Legal steps are coordinated centrally to reduce errors and delays. Owners can focus on moving forward, not paperwork.",
      },
    ],
  },
  {
    id: "property-sale-dropdown",
    theme: "blue",
    icon: <Banknote className="h-5 w-5 text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Property Sale",
    subtitle: "Sell with clarity and control",
    subcategories: [
      {
        title: "Realistic Pricing",
        description:
          "We guide pricing based on actual market value, not speculation or pressure. This protects owners from underpricing while avoiding listings that stall. The goal is a clean exit, not a hopeful gamble.",
      },
      {
        title: "Buyer Screening",
        description:
          "Only credible and financially capable buyers are introduced. This reduces failed transactions and wasted time. Serious buyers create faster and more reliable outcomes.",
      },
      {
        title: "Faster Buyer Matching",
        description:
          "Badilisha prioritizes buyers who are ready to proceed. This is especially useful when liquidity is time-sensitive. Speed is achieved through preparation, not shortcuts.",
      },
      {
        title: "Clear Fees & Costs",
        description:
          "All fees and settlement costs are disclosed before any commitment. There are no hidden charges introduced at closing. Transparency builds trust and protects decision-making.",
      },
      {
        title: "Sell vs Swap Guidance",
        description:
          "We help owners decide whether selling or trading in is the better option. This guidance comes before listing, not after. The right path depends on goals, not assumptions.",
      },
      {
        title: "End-to-End Sale Handling",
        description:
          "From offer acceptance to title transfer, the sale is managed as one coordinated process. Legal execution, payments, and registration are handled cleanly. Owners exit with certainty and closure.",
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
          "We assess whether subdivision makes sense financially and legally. This prevents over-fragmenting land and destroying long-term value. Decisions are based on strategy, not pressure.",
      },
      {
        title: "Subdivision Planning",
        description:
          "Professional surveyors and planners design subdivisions correctly from the start. Layouts align with regulations and future usability. This avoids costly revisions later.",
      },
      {
        title: "County Approvals",
        description:
          "Badilisha supports the process through county and regulatory approvals. Documentation, follow-ups, and compliance are handled systematically. Owners avoid administrative bottlenecks.",
      },
      {
        title: "New Title Creation",
        description:
          "Each subdivided portion receives a clean, legally registered title. Titles are created to be transferable and bankable. This protects future transactions and ownership clarity.",
      },
      {
        title: "Partial Land Release",
        description:
          "Owners can unlock value from part of their land while retaining the rest. This balances immediate needs with long-term ownership. Capital is released without full disposal.",
      },
      {
        title: "Inheritance-Ready Structuring",
        description:
          "Titles are structured to reduce future disputes among heirs. Clear boundaries and documentation protect families long after subdivision. This turns land into a stable legacy asset.",
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
