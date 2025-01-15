interface License {
  name: string;
  creator: string;
  year: string;
  licenseType: string;
  description?: string;
  repository?: string;
  licenseUrl?: string;
  licenseText?: string;
}

const licenses: License[] = [
  {
    name: "React",
    creator: "Meta",
    year: "2023",
    licenseType: "MIT",
    description: "A JavaScript library for building user interfaces",
    repository: "https://github.com/facebook/react",
    licenseUrl: "https://github.com/facebook/react/blob/main/LICENSE",
    licenseText: `MIT License
  
  Copyright (c) Meta Platforms, Inc. and affiliates.
  
  Permission is hereby granted, free of charge...`,
  },
  {
    name: "Next.js",
    creator: "Vercel",
    year: "2023",
    licenseType: "MIT",
    description: "The React Framework for the Web",
    repository: "https://github.com/vercel/next.js",
    licenseUrl: "https://github.com/vercel/next.js/blob/canary/license.md",
  },
  {
    name: "Tailwind CSS",
    creator: "Tailwind Labs",
    year: "2023",
    licenseType: "MIT",
    description: "A utility-first CSS framework",
    repository: "https://github.com/tailwindlabs/tailwindcss",
    licenseUrl:
      "https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE",
  },
];

export default licenses;
