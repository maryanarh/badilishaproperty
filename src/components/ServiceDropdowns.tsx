"use client"

import type React from "react"
import { useState } from "react"
import { RefreshCw, Banknote, Award, ChevronUp, Home, MapPin, FileText, Users, Scale, Building } from "lucide-react"

interface SubCategory {
  title: string
  description: string
  icon: React.ReactNode
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
    icon: <RefreshCw className="h-6 w-6 text-emerald-700" />,
    iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200",
    title: "Property Trade-In",
    subtitle: "Swap your property for one that fits you better",
    subcategories: [
      {
        title: "Need More or Less Space?",
        description: "Your family is growing or your kids have moved out? Trade your current house for a bigger or smaller one. No need to sell first—just swap and move.",
        icon: <Home className="h-5 w-5 text-emerald-600" />
      },
      {
        title: "Want to Change Location?",
        description: "Move from city to countryside, or countryside to city. We find someone who wants your property and has what you're looking for. It's that simple.",
        icon: <MapPin className="h-5 w-5 text-emerald-600" />
      },
      {
        title: "Need Cash from Your Property?",
        description: "Get money from your home without selling it. Trade your house for a cheaper one and get the difference in cash. Use it for business, bills, or anything else.",
        icon: <Banknote className="h-5 w-5 text-emerald-600" />
      },
      {
        title: "We Handle the Paperwork",
        description: "We take care of all the legal stuff and moving plans. You focus on packing—we handle contracts, titles, and making sure everyone moves at the right time.",
        icon: <FileText className="h-5 w-5 text-emerald-600" />
      },
    ],
  },
  {
    id: "property-sale-dropdown",
    theme: "blue",
    icon: <Scale className="h-6 w-6 text-blue-700" />,
    iconBg: "bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200",
    title: "Property Sale",
    subtitle: "Sell your property clearly and quickly",
    subcategories: [
      {
        title: "Direct Sale to Real Buyers",
        description: "We connect you with people who are ready to buy now. No waiting for months on the market—just serious buyers who want your property.",
        icon: <Users className="h-5 w-5 text-blue-600" />
      },
      {
        title: "Should You Sell or Swap?",
        description: "Not sure what's better for you? We'll look at your situation and tell you honestly whether selling or swapping makes more sense for your goals.",
        icon: <RefreshCw className="h-5 w-5 text-blue-600" />
      },
      {
        title: "We Handle Everything",
        description: "From start to finish, we manage the whole sale. We deal with the paperwork, buyer meetings, and final handover so you don't have to stress.",
        icon: <FileText className="h-5 w-5 text-blue-600" />
      },
    ],
  },
  {
    id: "subdivision-dropdown",
    theme: "amber",
    icon: <Building className="h-6 w-6 text-amber-700" />,
    iconBg: "bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200",
    title: "Land Subdivision",
    subtitle: "Divide your land and unlock its value",
    subcategories: [
      {
        title: "Check if It's Possible",
        description: "We check if your land can be divided legally. Then we make a plan that makes the most sense for you and follows all the rules.",
        icon: <Award className="h-5 w-5 text-amber-600" />
      },
      {
        title: "Handle All Approvals",
        description: "We do all the running around with the county offices. We get the surveys done, submit the paperwork, and get the new titles for each piece of land.",
        icon: <FileText className="h-5 w-5 text-amber-600" />
      },
      {
        title: "For Families or Selling Part",
        description: "Perfect for inherited land or when you want to sell just part. We divide the land so each family member gets their piece, or you can sell some and keep the rest.",
        icon: <Users className="h-5 w-5 text-amber-600" />
      },
    ],
  },
]

export function ServiceDropdowns() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  const themeSurface = {
    emerald: "bg-gradient-to-b from-emerald-50/90 to-white",
    blue: "bg-gradient-to-b from-blue-50/90 to-white",
    amber: "bg-gradient-to-b from-amber-50/90 to-white",
  }

  const themeHeader = {
    emerald: "bg-gradient-to-r from-emerald-50 to-emerald-100/50 border-emerald-200",
    blue: "bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200",
    amber: "bg-gradient-to-r from-amber-50 to-amber-100/50 border-amber-200",
  }

  const themeBorder = {
    emerald: "border-emerald-300",
    blue: "border-blue-300",
    amber: "border-amber-300",
  }

  const themeText = {
    emerald: "text-emerald-800",
    blue: "text-blue-800",
    amber: "text-amber-800",
  }

  const themeBg = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
  }

  const themeAccent = {
    emerald: "bg-emerald-100 border-emerald-200",
    blue: "bg-blue-100 border-blue-200",
    amber: "bg-amber-100 border-amber-200",
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto pb-12 sm:pb-20 px-3 sm:px-4">
      {services.map((service) => {
        const isServiceOpen = openService === service.id

        return (
          <div
            key={service.id}
            className={`border transition-all duration-500 overflow-hidden ${
              isServiceOpen
                ? `rounded-xl sm:rounded-3xl shadow-lg sm:shadow-2xl ${themeSurface[service.theme]} ring-1 sm:ring-2 ring-opacity-20 ${themeBorder[service.theme]}`
                : "rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md sm:shadow-lg hover:shadow-xl border-gray-200"
            }`}
          >
            <div
              onClick={() => setOpenService(isServiceOpen ? null : service.id)}
              className={`flex items-center gap-3 sm:gap-5 p-4 sm:p-7 cursor-pointer transition-all duration-300 ${
                isServiceOpen
                  ? `${themeHeader[service.theme]} border-b ${themeBorder[service.theme]}`
                  : "hover:bg-gray-50/80"
              }`}
            >
              <div
                className={`h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${service.iconBg} shadow-sm flex-shrink-0`}
              >
                {service.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl truncate">
                  {service.title}
                </h3>
                {!isServiceOpen && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">
                    {service.subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <span className={`text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full ${themeAccent[service.theme]}`}>
                  {service.subcategories.length} options
                </span>
                <ChevronUp
                  className={`h-4 w-4 sm:h-6 sm:w-6 transition-all duration-500 ${
                    isServiceOpen
                      ? "text-gray-700 rotate-180 transform"
                      : "text-gray-500 rotate-0"
                  }`}
                />
              </div>
            </div>

            {isServiceOpen && (
              <div className="px-4 sm:px-7 pb-6 sm:pb-8 pt-2">
                <div className="mb-4 sm:mb-6 pt-2 sm:pt-4">
                  <h4 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-base sm:text-lg">How can we help you?</h4>
                  <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {service.subcategories.map((sub) => {
                    const key = `${service.id}-${sub.title}`
                    const isOpen = openSub === key

                    return (
                      <div
                        key={sub.title}
                        className={`rounded-xl sm:rounded-2xl transition-all duration-400 overflow-hidden border ${
                          isOpen
                            ? `${themeBorder[service.theme]} bg-white shadow-md sm:shadow-lg ring-1 sm:ring-2 ring-opacity-10 ${themeBorder[service.theme]}`
                            : `${themeAccent[service.theme]} hover:shadow-sm sm:hover:shadow-md`
                        }`}
                      >
                        <button
                          onClick={() => setOpenSub(isOpen ? null : key)}
                          className="w-full flex justify-between items-start gap-3 sm:gap-4 p-3 sm:p-5 text-left
                                     outline-none focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-30"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className={`p-2 sm:p-2.5 rounded-lg ${themeAccent[service.theme]} flex-shrink-0`}>
                              {sub.icon}
                            </div>
                            <div className="flex-1 text-left min-w-0">
                              <h5 className={`font-semibold mb-1 sm:mb-1.5 text-sm sm:text-base ${themeText[service.theme]} line-clamp-2`}>
                                {sub.title}
                              </h5>
                              {!isOpen && (
                                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0 ml-1">
                            <ChevronUp
                              className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${
                                isOpen ? "rotate-0 text-gray-700" : "rotate-180 text-gray-500"
                              }`}
                            />
                            <div className={`h-1.5 w-1.5 rounded-full ${isOpen ? themeBg[service.theme] : "bg-gray-300"}`}></div>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-3 sm:px-5 pb-4 sm:pb-6">
                            <div className={`h-px w-full mb-3 sm:mb-5 opacity-30 ${themeBg[service.theme]}`}></div>
                            <div className="text-gray-700 leading-relaxed text-sm sm:text-base pl-0.5 sm:pl-1.5">
                              {sub.description}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}