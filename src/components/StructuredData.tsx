import React from 'react'

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Fortune Heights",
    "description": "Luxury residential tower with premium amenities and modern floor plans in prime downtown location",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Boulevard",
      "addressLocality": "Downtown District", 
      "addressRegion": "Metropolitan City",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "telephone": "+1-234-567-8900",
    "email": "info@fortuneheights.com",
    "url": "https://fortuneheights.com",
    "image": "https://fortuneheights.com/images/tower-exterior.jpg",
    "priceRange": "₹85 Lakh - ₹4.95 Cr",
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa-Su 10:00-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fortune Heights Floor Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Accommodation",
            "name": "1 BHK Luxury Apartment",
            "description": "Premium 1 bedroom apartment with modern amenities",
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 850,
              "unitCode": "FTK"
            }
          },
          "price": "8500000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Accommodation",
            "name": "2 BHK Luxury Apartment",
            "description": "Spacious 2 bedroom apartment with premium finishes",
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 1250,
              "unitCode": "FTK"
            }
          },
          "price": "13500000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Accommodation", 
            "name": "3 BHK Luxury Apartment",
            "description": "Executive 3 bedroom apartment with luxury amenities",
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 1850,
              "unitCode": "FTK"
            }
          },
          "price": "22500000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Accommodation",
            "name": "4 BHK Penthouse",
            "description": "Premium penthouse with private amenities and city views",
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 2800,
              "unitCode": "FTK"
            }
          },
          "price": "38500000", 
          "priceCurrency": "INR"
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Fitness Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Security",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Concierge Service",
        "value": true
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
