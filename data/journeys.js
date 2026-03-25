// ============================================================
//  DONNÉES — modifier ce fichier pour mettre à jour les journeys
//  Structure : voir README ou demander à Claude Code
// ============================================================

window.PROJECT = {
  context: [
    "Cuure transitioned from a single-product to a multi-category experience",
    "We now have multiple personae with various needs entering and navigating the Cuure eco-system",
    "The number of customer journeys multiplied leading to non-optimized journeys",
    "The main challenge of Cuure in the new era is to be able to handle all those customer journeys"
  ],
  objectives: [
    "Understand & map all customer journeys",
    "Optimize each and every customer journey"
  ]
};

window.JOURNEYS = [
  {
    id: "journey-cx",
    name: "Customer Experience",
    steps: [
      { id: "discovery",     label: "Discovery",     description: "New-comers visitors, entering the Cuure eco-system and looking for something.\nFrom Landing page to Product Discovery." },
      { id: "conversion",    label: "Conversion",    description: "Visitors purchasing the Cuure product.\nFrom Product Discovery to Purchase." },
      { id: "post-purchase", label: "Post-purchase", description: "Customers after purchasing a product.\nFrom Purchase to Customer Satisfaction." },
      { id: "repurchase",    label: "Repurchase",    description: "Customers coming back to order more products.\nFrom Customer Satisfaction to Customer Loyalty." },
      { id: "engagement",    label: "Engagement",    description: "Customers interacting with Cuure.\nFrom Customer loyalty to Top Customer." }
    ],
    lanes: [
      {
        id: "step-header",
        label: "Étape",
        type: "step",
        cells: {
          discovery:       "Discovery",
          conversion:      "Conversion",
          "post-purchase": "Post-purchase",
          repurchase:      "Repurchase",
          engagement:      "Engagement"
        }
      },
      {
        id: "description",
        label: "Description",
        type: "text",
        cells: {
          discovery:       "New-comers visitors, entering the Cuure eco-system and looking for something.",
          conversion:      "Visitors purchasing the Cuure product.",
          "post-purchase": "Customers after purchasing a product.",
          repurchase:      "Customers coming back to order more products.",
          engagement:      "Customers interacting with Cuure."
        }
      },
      {
        id: "definition",
        label: "Définition",
        type: "text",
        cells: {
          discovery:       "From Landing page to Product Discovery.",
          conversion:      "From Product Discovery to Purchase.",
          "post-purchase": "From Purchase to Customer Satisfaction.",
          repurchase:      "From Customer Satisfaction to Customer Loyalty.",
          engagement:      "From Customer loyalty to Top Customer."
        }
      },
      {
        id: "journeys-lane",
        label: "Journeys",
        type: "links",
        cells: {
          discovery:       [{ journeyId: "discovery-prospects",            journeyName: "Prospects" },         { journeyId: "discovery-returning",             journeyName: "Returning" }],
          conversion:      [{ journeyId: "conversion-product-specific",    journeyName: "Product Specific" },  { journeyId: "conversion-multi-product",        journeyName: "Multi Product" }],
          "post-purchase": [{ journeyId: "post-purchase-product-specific", journeyName: "Product Specific" },  { journeyId: "post-purchase-multi-product",     journeyName: "Multi Product" }],
          repurchase:      [{ journeyId: "repurchase-otp",                 journeyName: "OTP" },               { journeyId: "repurchase-active-subscriber",    journeyName: "Active Subscriber" },  { journeyId: "repurchase-paused-subscriber", journeyName: "Paused Subscriber" }],
          engagement:      [{ journeyId: "engagement-loyalty",             journeyName: "Loyalty" },           { journeyId: "engagement-guidance",             journeyName: "Guidance" }]
        }
      },
    ]
  },

  // ─── DISCOVERY — PROSPECTS ──────────────────────────────────────────────────
  {
    id: "discovery-prospects",
    name: "Prospects",
    group: "Discovery",
    steps: [
      { id: "source",      label: "Source"      },
      { id: "redirection", label: "Redirection" },
      { id: "lp",          label: "LP"          },
      { id: "step-1",      label: "Step 1"      },
      { id: "step-2",      label: "Step 2"      },
      { id: "step-3",      label: "Step 3"      },
      { id: "step-4",      label: "Step 4"      },
    ],
    lanes: [
      {
        id: "step-header",
        label: "Étape",
        type: "step",
        cells: {
          source:      "Source",
          redirection: "Redirection",
          lp:          "LP",
          "step-1":    "Step 1",
          "step-2":    "Step 2",
          "step-3":    "Step 3",
          "step-4":    "Step 4",
        }
      },
      {
        id: "general-curious",
        label: "General / curious visitors",
        type: "text",
        cells: {
          source:      'Search "Cuure" on Google',
          redirection: "/",
          lp:          "Home Page",
          "step-1":    ["Scroll HP"],
          "step-2":    ["Survey"],
          "step-3":    ["Recommendations"],
          "step-4":    [],
        }
      },
      {
        id: "need-driven",
        label: "Need-driven visitor",
        type: "text",
        cells: {
          source:      "Need-based Ad / SEO",
          redirection: "Burger Menu > Need",
          lp:          "Need Landing Page",
          "step-1":    ["Select NPD", "Select Essential", "Select Survey"],
          "step-2":    [],
          "step-3":    [],
          "step-4":    [],
        }
      },
      {
        id: "general-health",
        label: "General health driven",
        type: "text",
        cells: {
          source:      "General Ad / SEO",
          redirection: "/",
          lp:          "Home Page",
          "step-1":    ["Survey"],
          "step-2":    ["Recommendations"],
          "step-3":    ["Product information"],
          "step-4":    ["Secondary information"],
        }
      },
      {
        id: "product-comparator",
        label: "Product comparator",
        type: "text",
        cells: {
          source:      "Product-based Ad / SEO",
          redirection: "Search > Product",
          lp:          "Product Page",
          "step-1":    ["Scroll Product Page"],
          "step-2":    ["Add To Cart"],
          "step-3":    ["Related Product", "Catalog Filter", "Search Product"],
          "step-4":    [],
        }
      },
      {
        id: "product-innovation",
        label: "Product innovation\n(ex: FS-3B)",
        type: "text",
        cells: {
          source:      'Search "FS-3B" on Google',
          redirection: "HP > FS-3B\nBurger Menu > FS-3B",
          lp:          "FS-3B Landing Page",
          "step-1":    ["Scroll Landing Page"],
          "step-2":    ["Navigate through FS-3B pages"],
          "step-3":    ["Add To Cart"],
          "step-4":    [],
        }
      },
    ]
  },

  // ─── DISCOVERY — RETURNING ──────────────────────────────────────────────────
  {
    id: "discovery-returning",
    name: "Returning",
    group: "Discovery",
    steps: [
      { id: "source",      label: "Source"      },
      { id: "redirection", label: "Redirection" },
      { id: "lp",          label: "LP"          },
      { id: "step-1",      label: "Step 1"      },
      { id: "step-2",      label: "Step 2"      },
      { id: "step-3",      label: "Step 3"      },
    ],
    lanes: [
      {
        id: "step-header",
        label: "Étape",
        type: "step",
        cells: {
          source:      "Source",
          redirection: "Redirection",
          lp:          "LP",
          "step-1":    "Step 1",
          "step-2":    "Step 2",
          "step-3":    "Step 3",
        }
      },
      {
        id: "crm-led",
        label: "CRM-led / offers",
        type: "text",
        cells: {
          source:      "Offer specific communication",
          redirection: "Offer banner",
          lp:          "Offer Landing Page",
          "step-1":    ["Range experience"],
          "step-2":    ["Add To Cart"],
          "step-3":    [],
        }
      },
      {
        id: "reviews-seekers",
        label: "Reviews seekers",
        type: "text",
        cells: {
          source:      'Search "Cuure avis" on Google',
          redirection: "PP > Scroll to Reviews",
          lp:          "Reviews or Catalog",
          "step-1":    ["PP > Scroll to Reviews"],
          "step-2":    ["Add to cart"],
          "step-3":    [],
        }
      },
      {
        id: "information-seekers",
        label: "Information seekers",
        type: "text",
        cells: {
          source:      "Anything",
          redirection: "Burger Menu > PP\nBurger Menu > Secondary Pages",
          lp:          "/",
          "step-1":    ["Scroll PP"],
          "step-2":    ["Scroll Secondary Pages"],
          "step-3":    ["Add To cart"],
        }
      },
    ]
  },

];
