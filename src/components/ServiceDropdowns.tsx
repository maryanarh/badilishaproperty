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
    icon: <RefreshCw className="h-5 w-5 text-emerald-700" />,
    iconBg: "bg-emerald-100",
    title: "Property Trade-In and Exchange",
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
    icon: <Banknote className="h-5 w-5 text-blue-700" />,
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
    icon: <Award className="h-5 w-5 text-amber-700" />,
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

  const themeSurface = {
    emerald: "bg-emerald-50/80",
    blue: "bg-blue-50/80",
    amber: "bg-amber-50/80",
  }

  const themeBorder = {
    emerald: "bg-emerald-400",
    blue: "bg-blue-400",
    amber: "bg-amber-400",
  }

  const themeText = {
    emerald: "text-emerald-800",
    blue: "text-blue-800",
    amber: "text-amber-800",
  }

  const themeDot = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20 px-4">
      {services.map((service) => {
        const isServiceOpen = openService === service.id

        return (
          <div
            key={service.id}
            className={`border transition-all duration-300 ${
              isServiceOpen
                ? `rounded-3xl shadow-xl ${themeSurface[service.theme]}`
                : "rounded-2xl bg-white shadow-md hover:shadow-lg"
            }`}
          >
            <div
              onClick={() => setOpenService(isServiceOpen ? null : service.id)}
              className="flex items-center gap-4 p-6 cursor-pointer"
            >
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center ${service.iconBg}`}
              >
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 text-lg">
                  {service.title}
                </h3>
                {!isServiceOpen && (
                  <p className="text-sm text-neutral-500">{service.subtitle}</p>
                )}
              </div>

              <ChevronUp
                className={`h-5 w-5 text-neutral-400 transition-transform ${
                  isServiceOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>

            {isServiceOpen && (
              <div className="px-6 pb-8 space-y-4">
                {service.subcategories.map((sub) => {
                  const key = `${service.id}-${sub.title}`
                  const isOpen = openSub === key

                  return (
                    <div
                      key={sub.title}
                      className={`rounded-xl transition-all ${
                        isOpen
                          ? `bg-white shadow-md`
                          : `${themeSurface[service.theme]} hover:brightness-95`
                      }`}
                    >
                      <button
                        onClick={() => setOpenSub(isOpen ? null : key)}
                        className="w-full flex justify-between items-start gap-4 p-4 text-left
                                   outline-none focus:outline-none focus:ring-0
                                   focus-visible:outline-none focus-visible:ring-0"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            {/* small colored dot to give life to each option */}
                            <span
                              className={`inline-block h-2 w-2 rounded-full ${themeDot[service.theme]}`}
                              aria-hidden
                            />
                            <span
                              className={`font-medium ${
                                isOpen
                                  ? themeText[service.theme]
                                  : `${themeText[service.theme]} text-opacity-80`
                              }`}
                            >
                              {sub.title}
                            </span>
                          </div>

                          {/* subtle divider between title and description (visible when open) */}
                          {isOpen && (
                            <div
                              className={`mt-4 h-px ${themeBorder[service.theme]} opacity-60`}
                            />
                          )}
                        </div>

                        <ChevronUp
                          className={`h-4 w-4 transition-transform ${
                            isOpen ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-sm text-neutral-700 leading-relaxed max-w-3xl">
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
