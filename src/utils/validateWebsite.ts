export const validateWebsite = (url: string): boolean => {
  const websiteRegex = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[\w-./?%&=]*)?$/;
  return websiteRegex.test(url);
};