export const ENDPOINT = "https://formspree.io/f/mbggbpeq";
export const CONTACT_EMAIL = "blessmannewton0@gmail.com";
export const CONTACT_PHONE = "+233208418980";

export const LAUNCH_DATE = new Date(2027, 0, 5);

export const SERVICES = [
  {
    title: "Food",
    desc: "Meals from local merchants, hot and on time.",
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <path d="M6 28h44a22 22 0 0 1-44 0z" />
        <path d="M20 20c-3-3 3-5 0-9M30 20c-3-3 3-5 0-9M40 20c-3-3 3-5 0-9" />
      </svg>
    )
  },
  {
    title: "Pickups",
    desc: "Food pickup, laundry or anything else that needs collecting.",
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <path d="M10 18h36l-3 32H13z" />
        <path d="M20 18a8 8 0 0 1 16 0" />
      </svg>
    )
  },
  {
    title: "Gas refill",
    desc: "Hand over your empty cylinder and get it back full.",
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <rect x="14" y="16" width="28" height="36" rx="10" />
        <path d="M22 16v-6h12v6M20 30h16" />
      </svg>
    )
  },
  {
    title: "Cosmetics",
    desc: "Beauty and personal care from local sellers.",
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <rect x="20" y="28" width="16" height="22" rx="3" />
        <path d="M22 28V14l12-6v20" />
      </svg>
    )
  }
];

export const STEPS = [
  {
    num: 1,
    title: "Choose",
    desc: "Open the app, pick a service and a local merchant, and place your order."
  },
  {
    num: 2,
    title: "We match",
    desc: "The merchant prepares it and a verified rider nearby picks it up."
  },
  {
    num: 3,
    title: "Track and receive",
    desc: "Follow your rider live, then pay on delivery when it arrives."
  }
];

export const APP_SCREENS = [
  {
    title: "Customer home",
    items: ["Food", "Pickups", "Gas refill", "Cosmetics"],
    cta: "Order now"
  },
  {
    title: "Live tracking",
    items: ["Order accepted", "Rider on the way", "Arriving soon"],
    cta: "Track live"
  },
  {
    title: "Merchant orders",
    items: ["New order", "Preparing", "Ready for pickup"],
    cta: "Accept order"
  },
  {
    title: "Rider request",
    items: ["Pickup point", "Drop-off area", "Delivery fee"],
    cta: "Accept"
  },
  {
    title: "Rider earnings",
    items: ["Today", "Cash to settle", "This week"],
    cta: "Pay Doorush"
  }
];

export const TRUST_POINTS = [
  {
    title: "Verified people",
    desc: "Riders and merchants are checked before they go live.",
    icon: (
      <svg viewBox="0 0 30 30" aria-hidden="true">
        <path d="M15 3l10 4v8c0 7-5 11-10 13C10 26 5 22 5 15V7z" />
        <path d="M10 15l4 4 7-8" />
      </svg>
    )
  },
  {
    title: "Live tracking",
    desc: "Watch your order move from kitchen to door.",
    icon: (
      <svg viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="15" cy="13" r="5" />
        <path d="M15 28S5 19 5 13a10 10 0 0 1 20 0c0 6-10 15-10 15z" />
      </svg>
    )
  },
  {
    title: "Every order recorded",
    desc: "Who ordered, who delivered and what was paid.",
    icon: (
      <svg viewBox="0 0 30 30" aria-hidden="true">
        <rect x="6" y="3" width="18" height="24" rx="3" />
        <path d="M11 10h8M11 15h8M11 20h5" />
      </svg>
    )
  },
  {
    title: "Pay on delivery",
    desc: "No upfront payment while we launch.",
    icon: (
      <svg viewBox="0 0 30 30" aria-hidden="true">
        <rect x="3" y="8" width="24" height="15" rx="3" />
        <circle cx="15" cy="15.5" r="3.5" />
      </svg>
    )
  }
];

export const PARTNERS = [
  {
    name: "Big Bite",
    logo: "/images/big-bite.jpg"
  },
  {
    name: "Speedaf Express",
    logo: "/images/speedaf.jpg"
  },
  {
    name: "Pizzaman",
    logo: "/images/pizzaman.jpg"
  },
  {
    name: "KFC",
    logo: "/images/kfc.jpg"
  }
];

export const CAMPUS_COMMUNITIES = [
  "University of Energy and Natural Resources",
  "Sunyani Technical University",
  "Sunyani Nursing and Midwifery Training College",
  "Catholic University of Ghana"
];

export const CAREERS = [
  {
    title: "Operations lead",
    desc: "Run rider and merchant onboarding in Sunyani."
  },
  {
    title: "Mobile developer",
    desc: "Build and maintain the Doorush apps."
  },
  {
    title: "Partnerships lead",
    desc: "Sign merchants and transport partners."
  },
  {
    title: "Campus ambassador",
    desc: "Grow Doorush on your campus."
  }
];

export const HOME_FAQ = [
  {
    q: "When do you launch?",
    a: "Very soon, starting in Sunyani. Waitlist members hear first."
  },
  {
    q: "How do I pay?",
    a: "At launch you pay on delivery. Card and mobile money payments through Paystack are planned next."
  },
  {
    q: "What can I order?",
    a: "Food, pickups (including laundry), gas refills and cosmetics."
  },
  {
    q: "Is it free for merchants and riders?",
    a: "Yes, joining is free while we launch."
  },
  {
    q: "How are riders verified?",
    a: "Riders submit ID and bike details, and documents are reviewed within 48 hours."
  }
];

export const MERCHANTS_CONFIG = {
  id: "vendors",
  role: "vendor",
  btnText: "Register interest",
  kicker: "Doorush for merchants",
  heading: "Grow your business with Doorush",
  lead: "Reach local customers on and around campus. Free to list while we launch.",
  chips: ["Restaurant", "Store", "Gas or laundry service"],
  sections: [
    {
      heading: "Why merchants join Doorush",
      cols: 4,
      cards: [
        ["Free to list", "No setup cost while we launch."],
        ["New customers", "Reach students and staff across four campus communities."],
        ["Every order recorded", "Clear records of orders and payments."],
        ["Riders handled", "Verified local riders deliver for you."]
      ]
    },
    {
      kicker: "Get started quickly",
      heading: "Start selling in a few days",
      steps: [
        ["Register your business", "Add your details and set up your store profile."],
        ["Set up your menu", "List what you sell. Our team can help."],
        ["Start selling", "Once reviewed, you’re ready to take orders."]
      ]
    },
    {
      heading: "Doorush for all kinds of businesses",
      cols: 4,
      cards: [
        ["Food merchants", "Reach hungry customers nearby."],
        ["Gas refill sellers", "Take refill orders and let riders collect cylinders."],
        ["Laundry services", "Get pickups and drop-offs without walk-ins."],
        ["Cosmetics sellers", "Sell beauty and personal care locally."]
      ]
    },
    {
      kicker: "Merchant app",
      heading: "Manage orders in one place",
      cols: 3,
      cards: [
        ["Accept orders", "See new orders the moment they arrive."],
        ["Track sales", "Know what sells and when."],
        ["Know the rider", "See who is collecting each order."]
      ]
    }
  ],
  faq: [
    ["What is Doorush?", "A delivery and pickup platform connecting customers, local merchants and independent riders."],
    ["How do I get started?", "Register your interest and we’ll contact you to set up your store profile and menu."],
    ["What do I need to sell on Doorush?", "A smartphone and your business details. We’ll confirm anything else when you register."],
    ["Does it cost anything?", "Joining is free while we launch. We’ll announce any fees well in advance."],
    ["What businesses can join?", "Food merchants, stores, gas refill sellers, laundry services and cosmetics sellers."]
  ],
  ctaHeading: "Join a platform built for growth",
  ctaSub: "Reach more customers with Doorush."
};

export const RIDERS_CONFIG = {
  id: "riders",
  role: "rider",
  btnText: "Register interest",
  kicker: "Doorush for riders",
  heading: "Become a Doorush rider and deliver on your terms",
  lead: "Choose when you ride and earn on every delivery. Free to join while we launch.",
  sections: [
    {
      kicker: "Freedom to earn your way",
      heading: "Ride when it suits you",
      sub: "No shifts and no minimum hours.",
      cols: 4,
      cards: [
        ["Clear earnings", "See what you’ll earn before you accept a delivery."],
        ["Flexible schedule", "Go online whenever you want, on your own bike or scooter."],
        ["Transparent cash", "Your cash and what you owe Doorush are always visible."],
        ["Real support", "Help from the Doorush team when something goes wrong."]
      ]
    },
    {
      kicker: "Registration process",
      heading: "Four easy steps to start delivering",
      steps: [
        ["Register", "Enter your name, area and phone number."],
        ["Upload documents", "Ghana Card, selfie and bike details, reviewed within 48 hours."],
        ["Get ready", "Complete your profile and add your mobile money number."],
        ["Start delivering", "Go online and accept your first order."]
      ]
    },
    {
      kicker: "Requirements",
      heading: "What you need",
      sub: "Registration is simple. You’ll be guided through each step.",
      cols: 3,
      cards: [
        ["A vehicle", "A scooter, motorbike, cargo bicycle or car."],
        ["Licence and insurance", "A valid licence and insurance for your vehicle."],
        ["Safety equipment", "Gear such as a helmet."],
        ["A smartphone", "Android or iOS with a local phone number."],
        ["Age 18 or older", "You must be at least 18 years old."],
        ["A valid photo ID", "Your Ghana Card, to confirm who you are."]
      ]
    },
    {
      kicker: "Safe and fair",
      heading: "Built for safe deliveries",
      cols: 3,
      cards: [
        ["No pressure to rush", "Take the time to deliver safely."],
        ["Delivery codes", "Customers confirm each delivery with a code."],
        ["Emergency button", "Alert your emergency contact and Doorush from the app."]
      ]
    }
  ],
  faq: [
    ["How do I become a Doorush rider?", "Register your interest, then upload your ID, selfie and bike details in the app."],
    ["When can I start?", "Documents are reviewed within 48 hours at most, then you can go online."],
    ["Do I have to work fixed hours?", "No. You choose when to go online."],
    ["How much can I earn?", "Earnings are shown before you accept each delivery."],
    ["How do payments work?", "At launch customers pay on delivery. Riders settle Doorush’s share at the end of each day."]
  ],
  ctaHeading: "Start earning with Doorush",
  ctaSub: "Register your interest and be first to ride."
};
