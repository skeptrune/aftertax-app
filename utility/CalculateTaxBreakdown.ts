import {
  cityTaxDataMappedByCityName,
  FederalOrStateIncomeTaxData,
  LocalIncomeTaxData,
} from "../data/tax-data-22";

export interface IncomeTaxBreakdown {
  federal_income_tax_effective_rate: number;
  federal_income_tax_total: number;
  state_income_tax_effective_rate: number;
  state_income_tax_total: number;
  local_income_tax_effective_rate: number;
  local_income_tax_total: number;
  total_income_tax_effective_rate: number;
  total_income_tax_total: number;
}

export interface COlBreakdown {
  adjusted_col: number; 
  adjusted_col_ratio: number;
}

export const calculateIncomeTaxForGivenTaxData = (
  annual_income: number,
  tax_data: FederalOrStateIncomeTaxData | LocalIncomeTaxData
): {
  income_tax_total: number;
  income_tax_effective_rate: number;
} => {
  // Calculate federal income tax
  let income_tax_total = 0;
  let income_tax_effective_rate = 0;

  for (let i = tax_data.singleFilerBreakpoints.length - 1; i > -1; i--) {
    const breakpoint = tax_data.singleFilerBreakpoints[i];
    if (annual_income > breakpoint.start_income) {
      income_tax_total =
        breakpoint.tax_from_lower_break_points +
        (annual_income - breakpoint.start_income) * breakpoint.tax_rate;
      income_tax_effective_rate = income_tax_total / annual_income;
      break;
    }
  }

  return { income_tax_total, income_tax_effective_rate };
};

export const calculateIncomeTaxForGivenCity = (
  annual_income: number,
  city: string
): IncomeTaxBreakdown => {
  const federalTaxData = calculateIncomeTaxForGivenTaxData(
    annual_income,
    cityTaxDataMappedByCityName[city].federalTaxData
  );
  const stateTaxData = calculateIncomeTaxForGivenTaxData(
    annual_income,
    cityTaxDataMappedByCityName[city].stateTaxData
  );
  const localTaxData = calculateIncomeTaxForGivenTaxData(
    annual_income,
    cityTaxDataMappedByCityName[city]
  );

  return {
    federal_income_tax_effective_rate: federalTaxData.income_tax_effective_rate,
    federal_income_tax_total: federalTaxData.income_tax_total,
    state_income_tax_effective_rate: stateTaxData.income_tax_effective_rate,
    state_income_tax_total: stateTaxData.income_tax_total,
    local_income_tax_effective_rate: localTaxData.income_tax_effective_rate,
    local_income_tax_total: localTaxData.income_tax_total,
    total_income_tax_effective_rate:
      federalTaxData.income_tax_effective_rate +
      stateTaxData.income_tax_effective_rate +
      localTaxData.income_tax_effective_rate,
    total_income_tax_total:
      federalTaxData.income_tax_total +
      stateTaxData.income_tax_total +
      localTaxData.income_tax_total,
  };
};

export const adjustedCOL = (
  city: string,
  current_city: string,
  current_monthly_COL: number
): COlBreakdown => {
  const comparison_city_COL = cityTaxDataMappedByCityName[city]?.COL_plus_rent_index;
  const current_city_COL = cityTaxDataMappedByCityName[current_city]?.COL_plus_rent_index;
  return {
    adjusted_col_ratio: (comparison_city_COL / current_city_COL) || 0,
    adjusted_col: (current_monthly_COL * comparison_city_COL / current_city_COL) || 0,
  }
};
