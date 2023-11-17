export const SETTINGS = {
  fileSizeLimits: {
    // The maximum file size in bytes (e.g., 1 * 1024 * 1024 = 1MB)
    partnerLogo: 500 * 1024,
    projectCard: 1 * 1024 * 1024,
    report: 500 * 1024,
    testimonialPhoto: 500 * 1024,
    heroSliderPhoto: 1 * 1024 * 1024,
  },
  imgDimensions: {
    partnerLogo: { width: 214, height: 100 },
    projectImg: { width: 378, height: 464 },
    sliderImg: { width: 1440, height: 504 },
    testimonialImg: { width: 114, height: 120 },
  },
  textToTranslateMaxLength: 700,
  delayRevalidation: 120,
  specsOrderList: [
    'Product Owner',
    'Project Manager',
    'Project Manager Mentor',
    'Business Analyst',
    'Business Analyst Mentor',
    'Design',
    'Front-end',
    'Back-end',
    'Quality Assurance',
    'Full Stack',
  ],
};
