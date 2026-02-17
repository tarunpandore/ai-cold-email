export const FEATURES = [
    {
        icon: "neurology",
        title: "AI Personalization",
        description:
            "Generate hyper-relevant openers based on LinkedIn profiles and company news automatically.",
    },
    {
        icon: "verified_user",
        title: "Email Quality Score",
        description:
            "Real-time deliverability checks and spam trigger detection to ensure primary inbox landing.",
    },
    {
        icon: "upload_file",
        title: "Bulk CSV Processing",
        description:
            "Upload thousands of leads and personalize them all in a matter of seconds via our cloud engine.",
    },
    {
        icon: "hub",
        title: "CRM Integration",
        description:
            "Seamlessly sync your data with Salesforce, HubSpot, and Pipedrive without manual entry.",
    },
];

export const PRICING_PLANS = [
    {
        name: "Starter",
        price: "$49",
        features: [
            "500 Personalizations /mo",
            "Single User",
            { text: "Advanced Analytics", available: false },
            { text: "CRM Integration", available: false },
        ],
        buttonText: "Choose Starter",
        featured: false,
    },
    {
        name: "Growth",
        price: "$99",
        features: [
            "2,500 Personalizations /mo",
            "Up to 5 Users",
            "CRM Integrations",
            "Priority Support",
        ],
        buttonText: "Choose Growth",
        featured: true,
    },
    {
        name: "Agency",
        price: "$249",
        features: [
            "Unlimited Personalizations",
            "Unlimited Users",
            "White-label Reports",
            "Dedicated Account Manager",
        ],
        buttonText: "Choose Agency",
        featured: false,
    },
];

export const TESTIMONIALS = [
    {
        quote:
            "The AI researching capability is scary good. It found a podcast my prospect was on 3 years ago and referenced it perfectly.",
        author: "Sarah Chen",
        role: "Founder",
    },
    {
        quote:
            "Finally, a cold email tool that doesn't just spam people. The quality of the output is indistinguishable from my best SDRs.",
        author: "Marcus Thorne",
        role: "Growth Lead",
    },
];
