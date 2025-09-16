import React from 'react'

interface OrganizationSchemaProps {
  name?: string
  description?: string
  url?: string
  logo?: string
  phone?: string
  email?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressCountry?: string
  }
  sameAs?: string[]
}

export function OrganizationSchema({
  name = "Atlantic Quest & Reality",
  description = "Leading international recruitment agency specializing in connecting skilled East African workers with employers worldwide. We provide domestic workers, construction workers, hospitality staff, and healthcare professionals to UAE, Qatar, Saudi Arabia, and global markets.",
  url = "https://atlantisquestandreality.com",
  logo = "https://atlantisquestandreality.com/android-chrome-512x512.png",
  phone = "+256745174879",
  email = "info@atlantisquestandreality.com",
  address = {
    streetAddress: "Kampala",
    addressLocality: "Kampala",
    addressCountry: "Uganda"
  },
  sameAs = []
}: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    "logo": logo,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "customer service",
      "email": email
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressCountry": address.addressCountry
    },
    "sameAs": sameAs,
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": ["International Recruitment", "Domestic Workers", "Construction Workers", "Hospitality Staff", "Healthcare Workers", "Travel Services", "Visa Services"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 1.3733,
        "longitude": 32.2903
      },
      "geoRadius": "5000000"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country", 
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Oman"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

interface JobPostingSchemaProps {
  title: string
  description: string
  company: string
  location: string
  employmentType: string
  salary?: string
  datePosted: string
  validThrough: string
  url: string
  requirements?: string[]
  benefits?: string[]
}

export function JobPostingSchema({
  title,
  description,
  company,
  location,
  employmentType,
  salary,
  datePosted,
  validThrough,
  url,
  requirements = [],
  benefits = []
}: JobPostingSchemaProps) {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": company,
      "sameAs": "https://atlantisquestandreality.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressCountry": location.includes("UAE") ? "AE" : location.includes("Qatar") ? "QA" : "UG"
      }
    },
    "employmentType": employmentType,
    "baseSalary": salary ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": salary,
        "unitText": "MONTH"
      }
    } : undefined,
    "datePosted": datePosted,
    "validThrough": validThrough,
    "url": url,
    "skills": requirements,
    "benefits": benefits,
    "workHours": "Full-time",
    "responsibilities": requirements
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  provider?: string
  serviceType: string
  areaServed?: string[]
  hasOfferCatalog?: {
    name: string
    itemListElement: Array<{
      name: string
      description: string
    }>
  }
}

export function ServiceSchema({
  name,
  description,
  provider = "Atlantic Quest & Reality",
  serviceType,
  areaServed = ["Uganda", "East Africa"],
  hasOfferCatalog
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://atlantisquestandreality.com"
    },
    "serviceType": serviceType,
    "areaServed": areaServed.map(area => ({
      "@type": "Country",
      "name": area
    })),
    "hasOfferCatalog": hasOfferCatalog,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://atlantisquestandreality.com",
      "servicePhone": "+256745174879"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

interface FAQSchemaProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
