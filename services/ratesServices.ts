import { rateTypes } from "@/components/PropertyCard/PropertyCard";

export const getRateDisplay = (rates: rateTypes) => {
  if (rates.monthly) {
    return `$${rates.monthly.toLocaleString()}/mo`;
  } else if (rates.weekly) {
    return `$${rates.weekly.toLocaleString()}/wk`;
  } else if (rates.nightly) {
    return `$${rates.nightly.toLocaleString()}/night`;
  }
};
