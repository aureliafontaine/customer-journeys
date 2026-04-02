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

window.DATA_PAGES = [
  {
    id: "fs3b-format-purchase-rates",
    name: "FS-3B Rates",
    title: "FS-3B — Format & Purchase Option",
    subtitle: "Selection rates by format and purchase option",
    sections: [
      {
        type: "crosstab",
        title: "Format × Purchase Option — Selection Rates",
        rowLabel: "Format",
        columns: ["Subscription", "OTP"],
        rows: [
          { label: "Bottle", sub: "1 month",  values: ["", ""] },
          { label: "Pack",   sub: "3 months", values: ["", ""] },
          { label: "Refill", sub: "1 month",  values: ["", ""] },
        ]
      }
    ]
  },
];

window.JOURNEYS = [
  {
    id: "journey-cx",
    name: "Journeys",
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
          conversion:      [{ journeyId: "conversion", journeyName: "Conversion" }, { journeyId: "conversion-multi-range", journeyName: "Multi-range" }],
          "post-purchase": [{ journeyId: "post-purchase-mycuure", journeyName: "MyCuure" }, { journeyId: "post-purchase-fs3b", journeyName: "FS-3B" }, { journeyId: "post-purchase-ma05", journeyName: "MA-05" }, { journeyId: "post-purchase-onely", journeyName: "onely" }, { journeyId: "post-purchase-essentials", journeyName: "Essentials" }, { journeyId: "post-purchase-multi-range", journeyName: "Multi-range" }],
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
      { id: "definition",  label: "Définition",  type: "meta" },
      { id: "source",      label: "Source",      type: "meta" },
      { id: "redirection", label: "Redirection", type: "meta" },
      { id: "lp",          label: "LP",          type: "meta" },
      { id: "step-1",      label: "Step 1"      },
      { id: "step-2",      label: "Step 2"      },
      { id: "step-3",      label: "Step 3"      },
      { id: "step-4",      label: "Step 4"      },
      { id: "step-5",      label: "Step 5"      },
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
          "step-5":    "Step 5",
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
          "step-5":    [],
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
          "step-5":    [],
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
          "step-5":    [],
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
          "step-5":    [],
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
          "step-5":    [],
        }
      },
    ]
  },

  {
  // ─── CONVERSION — VUE FUSIONNÉE (MyCuure · FS-3B · MA-05 · onely · Essentials) ──
    id: "conversion",
    name: "Single-range",
    group: "Conversion",
    steps: [
      { id: "definition",      label: "Définition",  type: "meta" },
      { id: "source",          label: "Source",       type: "meta" },
      { id: "format",          label: "Step 1" },
      { id: "addon",           label: "Step 2" },
      { id: "purchase-option", label: "Step 3" },
      { id: "add-to-cart",     label: "Step 4" },
      { id: "view-cart",       label: "Step 5" },
      { id: "quantity",        label: "Step 6" },
      { id: "checkout",        label: "Step 7" },
      { id: "purchase",        label: "Step 8" },
      { id: "step-9",          label: "Step 9" },
      { id: "step-10",         label: "Step 10" },
      { id: "step-11",         label: "Step 11" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "format": "Step 1", "addon": "Step 2", "purchase-option": "Step 3",
          "add-to-cart": "Step 4", "view-cart": "Step 5", "quantity": "Step 6",
          "checkout": "Step 7", "purchase": "Step 8",
          "step-9": "Step 9", "step-10": "Step 10", "step-11": "Step 11",
      }},
      { id: "mycuure", label: "MyCuure", type: "text", cells: {
          "format":          ["Select Products"],
          "addon":           ["View Cart"],
          "purchase-option": ["Select Quantity"],
          "add-to-cart":     ["Checkout"],
          "view-cart":       ["Purchase"],
      }},
      { id: "fs3b", label: "FS-3B", type: "text", cells: {
          "format":          { type: "table", title: "Select Format Option", rows: [
            { label: "Bottle", sub: "1 month",  priceOld: "59,90 €",  price: "49,90 €"  },
            { label: "Pack",   sub: "3 months", priceOld: "179,70 €", price: "161,73 €" },
            { label: "Refill", sub: "1 month",  priceOld: "59,90 €",  price: "49,90 €"  },
          ]},
          "addon":           ["Select Add-on"],
          "purchase-option": { type: "table", title: "Select Purchase Option", rows: [
            { label: "Subscription", sub: "-10€ per unit" },
            { label: "OTP" },
          ]},
          "add-to-cart":     ["Select Quantity"],
          "view-cart":       ["Add To Cart"],
          "quantity":        ["View Cart"],
          "checkout":        ["Checkout"],
          "purchase":        ["Purchase"],
      }},
      { id: "ma05", label: "MA-05", type: "text", cells: {
          "format":          { type: "table", title: "Select Format Option", rows: [
            { label: "Bottle", sub: "1 month",  priceOld: "59,90 €",  price: "49,90 €"  },
            { label: "Pack",   sub: "3 months", priceOld: "179,70 €", price: "134,73 €" },
            { label: "Pack",   sub: "6 months", priceOld: "359,40 €", price: "254,49 €" },
            { label: "Refill", sub: "1 month",  priceOld: "59,90 €",  price: "49,90 €"  },
          ]},
          "addon":           { type: "table", title: "Select Purchase Option", rows: [
            { label: "Subscription", sub: "-10€ per unit" },
            { label: "OTP", note: "not for 1-month" },
          ]},
          "purchase-option": ["Select Quantity"],
          "add-to-cart":     ["Add To Cart"],
          "view-cart":       ["View Cart"],
          "quantity":        ["Checkout"],
          "checkout":        ["Purchase"],
      }},
      { id: "onely", label: "onely", type: "text", cells: {
          "format":          { type: "table", title: "Select Format & Purchase Option", rows: [
            { label: "Welcome Kit", sub: "1 month · Subscription",  priceOld: "89,90 €",  price: "79,90 €"  },
            { label: "Welcome Kit", sub: "3 months · OTP",          priceOld: "269,70 €", price: "199,90 €" },
            { label: "Refill",      sub: "1 month · OTP",           price: "89,90 €" },
          ]},
          "addon":           ["Select Quantity"],
          "purchase-option": ["Add To Cart"],
          "add-to-cart":     ["View Cart"],
          "view-cart":       ["Checkout"],
          "quantity":        ["Purchase"],
      }},
      { id: "essentials", label: "Essentials", type: "text", cells: {
          "format":          ["Select Format", "Select Flavour"],
          "addon":           ["Select Purchase Option"],
          "purchase-option": ["Select Quantity"],
          "add-to-cart":     ["Add To Cart"],
          "view-cart":       ["View Cart"],
          "quantity":        ["Checkout"],
          "checkout":        ["Purchase"],
      }},
    ]
  },

  // ─── CONVERSION — MULTI-RANGE ───────────────────────────────────────────────
  {
    id: "conversion-multi-range",
    name: "Multi-range",
    group: "Conversion",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",     label: "Source",      type: "meta" },
      { id: "step-1", label: "Step 1" },
      { id: "step-2", label: "Step 2" },
      { id: "step-3", label: "Step 3" },
      { id: "step-4", label: "Step 4" },
      { id: "step-5", label: "Step 5" },
      { id: "step-6", label: "Step 6" },
      { id: "step-7",  label: "Step 7" },
      { id: "step-8",  label: "Step 8" },
      { id: "step-9",  label: "Step 9" },
      { id: "step-10", label: "Step 10" },
      { id: "step-11", label: "Step 11" },
      { id: "step-12", label: "Step 12" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3", "step-4": "Step 4",
          "step-5": "Step 5", "step-6": "Step 6", "step-7": "Step 7", "step-8": "Step 8",
          "step-9": "Step 9", "step-10": "Step 10", "step-11": "Step 11", "step-12": "Step 12" } },
      { id: "multi-range", label: "Multi-range", type: "text", cells: {
          "step-1": [], "step-2": [], "step-3": [], "step-4": [],
          "step-5": [], "step-6": [], "step-7": [], "step-8": [],
          "step-9": [], "step-10": [], "step-11": [], "step-12": [] } },
    ]
  },

  // ─── POST-PURCHASE — MYCUURE ─────────────────────────────────────────────────
  {
    id: "post-purchase-mycuure",
    name: "MyCuure",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "box",    label: "Box",    type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "reload", label: "Reload", type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },

  // ─── POST-PURCHASE — FS-3B ───────────────────────────────────────────────────
  {
    id: "post-purchase-fs3b",
    name: "FS-3B",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "bottle", label: "Bottle — 1 month",  type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "pack",   label: "Pack — 3 months",   type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "refill", label: "Refill — 1 month",  type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },

  // ─── POST-PURCHASE — MA-05 ───────────────────────────────────────────────────
  {
    id: "post-purchase-ma05",
    name: "MA-05",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "bottle",  label: "Bottle — 1 month",  type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "pack-3m", label: "Pack — 3 months",   type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "pack-6m", label: "Pack — 6 months",   type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "refill",  label: "Refill — 1 month",  type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },

  // ─── POST-PURCHASE — ONELY ───────────────────────────────────────────────────
  {
    id: "post-purchase-onely",
    name: "onely",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "kit",    label: "Kit",    type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
      { id: "reload", label: "Reload", type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },

  // ─── POST-PURCHASE — ESSENTIALS ──────────────────────────────────────────────
  {
    id: "post-purchase-essentials",
    name: "Essentials",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "essentials", label: "Essentials", type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },


  // ─── POST-PURCHASE — MULTI-RANGE ─────────────────────────────────────────────
  {
    id: "post-purchase-multi-range",
    name: "Multi-range",
    group: "Post-purchase",
    steps: [
      { id: "definition",         label: "Définition", type: "meta" },
      { id: "source",             label: "Source",     type: "meta" },
      { id: "confirmation-page",  label: "Confirmation Page" },
      { id: "confirmation-email", label: "Confirmation E-mail" },
      { id: "tracking-email",     label: "Tracking E-mail" },
      { id: "unboxing",           label: "Unboxing" },
      { id: "brochure",           label: "Personalised Brochure" },
      { id: "app-download",       label: "App Download" },
      { id: "first-intake",       label: "First Intake" },
      { id: "next-order",         label: "Next Order Planned" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "confirmation-page": "Confirmation Page", "confirmation-email": "Confirmation E-mail",
          "tracking-email": "Tracking E-mail", "unboxing": "Unboxing",
          "brochure": "Personalised Brochure", "app-download": "App Download",
          "first-intake": "First Intake", "next-order": "Next Order Planned" } },
      { id: "multi-range", label: "Multi-range", type: "text", cells: {
          "confirmation-page": [], "confirmation-email": [], "tracking-email": [],
          "unboxing": [], "brochure": [], "app-download": [], "first-intake": [], "next-order": [] } },
    ]
  },

  // ─── DISCOVERY — RETURNING ──────────────────────────────────────────────────
  {
    id: "discovery-returning",
    name: "Returning",
    group: "Discovery",
    steps: [
      { id: "definition",  label: "Définition",  type: "meta" },
      { id: "source",      label: "Source",      type: "meta" },
      { id: "redirection", label: "Redirection", type: "meta" },
      { id: "lp",          label: "LP",          type: "meta" },
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

  // ─── REPURCHASE — OTP ────────────────────────────────────────────────────────
  {
    id: "repurchase-otp",
    name: "OTP",
    group: "Repurchase",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",    label: "Source",      type: "meta" },
      { id: "step-1",  label: "Step 1"  },
      { id: "step-2",  label: "Step 2"  },
      { id: "step-3",  label: "Step 3"  },
      { id: "step-4",  label: "Step 4"  },
      { id: "step-5",  label: "Step 5"  },
      { id: "step-6",  label: "Step 6"  },
      { id: "step-7",  label: "Step 7"  },
      { id: "step-8",  label: "Step 8"  },
      { id: "step-9",  label: "Step 9"  },
      { id: "step-10", label: "Step 10" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3", "step-4": "Step 4", "step-5": "Step 5",
          "step-6": "Step 6", "step-7": "Step 7", "step-8": "Step 8", "step-9": "Step 9", "step-10": "Step 10" } },
      { id: "same-products-refiller", label: "Same products Refiller", type: "text", cells: {
          "step-1":  ["Open App", "Open Website"],
          "step-2":  ["Login"],
          "step-3":  ["Visit Catalog"],
          "step-4":  ["Search Known Product"],
          "step-5":  ["View PDP"],
          "step-6":  ["Add to cart"],
          "step-7":  ["View Cart"],
          "step-8":  ["Adjust Quantity"],
          "step-9":  ["Order now"],
          "step-10": [] } },
      { id: "upseller", label: "Upseller", type: "text", cells: {
          "step-1":  ["Open App", "Open Website"],
          "step-2":  ["Login"],
          "step-3":  ["Visit Catalog"],
          "step-4":  ["Search Known Product"],
          "step-5":  ["View PDP"],
          "step-6":  ["Add to cart"],
          "step-7":  ["View Cart"],
          "step-8":  ["Adjust Quantity"],
          "step-9":  ["Add upsell product"],
          "step-10": ["Order now"] } },
      { id: "change-seekers", label: "Change seekers", type: "text", cells: {
          "step-1":  ["Open App", "Open Website"],
          "step-2":  ["Login"],
          "step-3":  ["Take a test", "Visit «Products of the moment»"],
          "step-4":  ["View PDP"],
          "step-5":  ["Add to cart"],
          "step-6":  ["View Cart"],
          "step-7":  ["Adjust Quantity"],
          "step-8":  ["Order now"],
          "step-9":  [],
          "step-10": [] } },
      { id: "convinced-to-subscription", label: "Convinced to subscription", type: "text", cells: {
          "step-1":  ["Open App", "Open Website"],
          "step-2":  ["Login"],
          "step-3":  ["Visit Catalog"],
          "step-4":  ["Search Known Product"],
          "step-5":  ["View PDP"],
          "step-6":  ["Add to cart"],
          "step-7":  ["View Cart"],
          "step-8":  ["Adjust Quantity"],
          "step-9":  ["Plan next order", "Activate subscription > Order Now"],
          "step-10": [] } },
    ]
  },

  // ─── REPURCHASE — ACTIVE SUBSCRIBER ──────────────────────────────────────────
  {
    id: "repurchase-active-subscriber",
    name: "Active Subscriber",
    group: "Repurchase",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",     label: "Source",      type: "meta" },
      { id: "step-1", label: "Step 1" },
      { id: "step-2", label: "Step 2" },
      { id: "step-3", label: "Step 3" },
      { id: "step-4", label: "Step 4" },
      { id: "step-5", label: "Step 5" },
      { id: "step-6", label: "Step 6" },
      { id: "step-7", label: "Step 7" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3", "step-4": "Step 4",
          "step-5": "Step 5", "step-6": "Step 6", "step-7": "Step 7" } },
      { id: "repeat-auto", label: "Repeat auto", type: "text", cells: {
          "step-1": ["Email reminder"],
          "step-2": ["Email confirmation"],
          "step-3": [], "step-4": [], "step-5": [], "step-6": [], "step-7": [] } },
      { id: "upseller", label: "Upseller", type: "flow-lane",
        sharedCells: { "step-1": ["Email Reminder", "Open App", "Open Website"] },
        flows: [
          { id: "flow-a", cells: { "step-2": "View Cart", "step-3": "Add Upsell" } },
          { id: "flow-b", cells: { "step-2": "View Catalog", "step-3": "View PDP", "step-4": "Add to cart" } },
        ]},
      { id: "change-seekers", label: "Change seekers", type: "flow-lane",
        sharedCells: {
          "step-1": ["Email Reminder", "Open App", "Open Website"],
          "step-2": ["View Cart"]
        },
        flows: [
          { id: "flow-standalone", standalone: true, cells: { "step-3": "Remove products" } },
          { id: "flow-b", cells: { "step-3": "Take a test", "step-4": "View Recos", "step-5": "Add to cart" } },
          { id: "flow-c", cells: { "step-3": "View Catalog", "step-4": "View PDP", "step-5": "Add to cart" } },
        ]},
      { id: "subscription-delayer", label: "Subscription Delayer", type: "text", cells: {
          "step-1": ["Email Reminder", "Open App", "Open Website"],
          "step-2": ["View Cart"],
          "step-3": ["Delay Subscription"],
          "step-4": [], "step-5": [], "step-6": [], "step-7": [] } },
      { id: "pause-subscription", label: "Pause subscription", type: "text", cells: {
          "step-1": ["Email Reminder", "Open App", "Open Website"],
          "step-2": ["View Cart"],
          "step-3": ["Pause Subscription"],
          "step-4": ["Email Subscription Pause"],
          "step-5": [], "step-6": [], "step-7": [] } },
      { id: "order-cancel", label: "Order Cancel", type: "text", cells: {
          "step-1": ["Confirmation email"],
          "step-2": ["Open App", "Open Website"],
          "step-3": ["Login"],
          "step-4": ["Go to account"],
          "step-5": ["Go to order history"],
          "step-6": ["Cancel order"],
          "step-7": ["Order Cancel Confirmation"] } },
    ]
  },

  // ─── REPURCHASE — PAUSED SUBSCRIBER ──────────────────────────────────────────
  {
    id: "repurchase-paused-subscriber",
    name: "Paused Subscriber",
    group: "Repurchase",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",     label: "Source",      type: "meta" },
      { id: "step-1", label: "Step 1" },
      { id: "step-2", label: "Step 2" },
      { id: "step-3", label: "Step 3" },
      { id: "step-4", label: "Step 4" },
      { id: "step-5", label: "Step 5" },
      { id: "step-6", label: "Step 6" },
      { id: "step-7", label: "Step 7" },
    ],
    lanes: [
      { id: "step-header", label: "Étape", type: "step", cells: {
          "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3", "step-4": "Step 4",
          "step-5": "Step 5", "step-6": "Step 6", "step-7": "Step 7" } },
      { id: "reactivate-same-cart", label: "Reactivate same cart", type: "text", cells: {
          "step-1": ["View Cart"],
          "step-2": ["Activate Subscription"],
          "step-3": ["Pick new Date", "Order Now"],
          "step-4": [], "step-5": [], "step-6": [], "step-7": [] } },
      { id: "reactivate-upsell", label: "Reactivate with upsell", type: "text", cells: {
          "step-1": ["View Cart"],
          "step-2": ["Add upsell"],
          "step-3": ["Activate Subscription"],
          "step-4": ["Pick new Date", "Order Now"],
          "step-5": [], "step-6": [], "step-7": [] } },
      { id: "reactivate-other", label: "Reactivate with other products", type: "text", cells: {
          "step-1": ["View Catalog"],
          "step-2": ["View PDP"],
          "step-3": ["Add to cart"],
          "step-4": ["View Cart"],
          "step-5": ["Remove products"],
          "step-6": ["Activate Subscription"],
          "step-7": ["Pick new Date", "Order Now"] } },
    ]
  },

  // ─── ENGAGEMENT — LOYALTY ─────────────────────────────────────────────────────
  {
    id: "engagement-loyalty",
    name: "Loyalty",
    group: "Engagement",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",     label: "Source",      type: "meta" },
      { id: "step-1", label: "Step 1" },
      { id: "step-2", label: "Step 2" },
      { id: "step-3", label: "Step 3" },
    ],
    lanes: [
      { id: "step-header",   label: "Étape",         type: "step", cells: { "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3" } },
      { id: "intaker",       label: "Intaker",        type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "status-lover",  label: "Status lover",   type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "referrer",      label: "Referrer",       type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "rewards-seeker",label: "Rewards seeker", type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "coupon-chaser", label: "Coupon chaser",  type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
    ]
  },

  // ─── ENGAGEMENT — GUIDANCE ────────────────────────────────────────────────────
  {
    id: "engagement-guidance",
    name: "Guidance",
    group: "Engagement",
    steps: [
      { id: "definition", label: "Définition", type: "meta" },
      { id: "source",     label: "Source",      type: "meta" },
      { id: "step-1", label: "Step 1" },
      { id: "step-2", label: "Step 2" },
      { id: "step-3", label: "Step 3" },
    ],
    lanes: [
      { id: "step-header",        label: "Étape",             type: "step", cells: { "step-1": "Step 1", "step-2": "Step 2", "step-3": "Step 3" } },
      { id: "intaker",            label: "Intaker",            type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "content-reader",     label: "Content reader",     type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "advice-seeker",      label: "Advice seeker",      type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "innovation-curious", label: "Innovation curious", type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
      { id: "data-optimizer",     label: "Data optimizer",     type: "text", cells: { "step-1": [], "step-2": [], "step-3": [] } },
    ]
  },

];
