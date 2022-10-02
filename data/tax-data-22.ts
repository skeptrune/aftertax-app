import { city, citiesMappedByName, cities } from "./cities";

interface IncomeBreakPoint {
  tax_from_lower_break_points: number;
  start_income: number;
  end_income: number;
  tax_rate: number;
}

export interface FederalOrStateIncomeTaxData {
  singleFilerBreakpoints: IncomeBreakPoint[];
}

export interface LocalIncomeTaxData {
  singleFilerBreakpoints: IncomeBreakPoint[];
  stateTaxData: FederalOrStateIncomeTaxData;
  federalTaxData: FederalOrStateIncomeTaxData;
  COL_index: number;
  COL_plus_rent_index: number;
  city: city;
}

// Federal Tax Data
export const federalTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: 9950,
      tax_rate: 0.1,
    },
    {
      tax_from_lower_break_points: 995,
      start_income: 9951,
      end_income: 40525,
      tax_rate: 0.12,
    },
    {
      tax_from_lower_break_points: 4664,
      start_income: 40526,
      end_income: 86375,
      tax_rate: 0.22,
    },
    {
      tax_from_lower_break_points: 14751,
      start_income: 86376,
      end_income: 164925,
      tax_rate: 0.24,
    },
    {
      tax_from_lower_break_points: 33603,
      start_income: 164926,
      end_income: 209425,
      tax_rate: 0.32,
    },
    {
      tax_from_lower_break_points: 47843,
      start_income: 209426,
      end_income: 523600,
      tax_rate: 0.35,
    },
    {
      tax_from_lower_break_points: 157804,
      start_income: 523601,
      end_income: Infinity,
      tax_rate: 0.37,
    },
  ],
};

// Texas Tax Data
// Texas State Tax Data
export const texasStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
};
// Texas Cities Tax Data
// Austin
export const austinCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: texasStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 67.93,
  COL_plus_rent_index: 62.23,
  city: citiesMappedByName["Austin"],
};
// Houston
export const houstonCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: texasStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 66.77,
  COL_plus_rent_index: 54.69,
  city: citiesMappedByName["Houston"],
};
// Dallas
export const dallasCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: texasStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 73.83,
  COL_plus_rent_index: 62.67,
  city: citiesMappedByName["Dallas"],
};
// San Antonio
export const sanAntonioCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: texasStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 61.39,
  COL_plus_rent_index: 48.18,
  city: citiesMappedByName["San Antonio"],
};

// Colorado Tax Data
// Colorado State Tax Data
export const coloradoStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0455,
    },
  ],
};
// Colorado Cities Tax Data
// Denver
export const denverCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: coloradoStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 80.06,
  COL_plus_rent_index: 65.62,
  city: citiesMappedByName["Denver"],
};
// Boulder
export const boulderCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: coloradoStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 71.39,
  COL_plus_rent_index: 54.05,
  city: citiesMappedByName["Boulder"],
};
// Colorado Springs
export const coloradoSpringsCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: coloradoStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 71.39,
  COL_plus_rent_index: 54.05,
  city: citiesMappedByName["Colorado Springs"],
};

// California Tax Data
// California State Tax Data
export const californiaStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: 9325,
      tax_rate: 0.01,
    },
    {
      tax_from_lower_break_points: 93.25,
      start_income: 9326,
      end_income: 22107,
      tax_rate: 0.02,
    },
    {
      tax_from_lower_break_points: 348.99,
      start_income: 22108,
      end_income: 34892,
      tax_rate: 0.04,
    },
    {
      tax_from_lower_break_points: 860.29,
      start_income: 34893,
      end_income: 48435,
      tax_rate: 0.06,
    },
    {
      tax_from_lower_break_points: 1672.87,
      start_income: 48436,
      end_income: 61214,
      tax_rate: 0.08,
    },
    {
      tax_from_lower_break_points: 2695.19,
      start_income: 61215,
      end_income: 312686,
      tax_rate: 0.093,
    },
    {
      tax_from_lower_break_points: 26082.09,
      start_income: 312687,
      end_income: 375221,
      tax_rate: 0.103,
    },
    {
      tax_from_lower_break_points: 32523.2,
      start_income: 375222,
      end_income: 625369,
      tax_rate: 0.113,
    },
    {
      tax_from_lower_break_points: 60789.92,
      start_income: 625370,
      end_income: Infinity,
      tax_rate: 0.123,
    },
  ],
};
// California Cities Tax Data
// San Diego
export const sanDiegoCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: californiaStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 79.46,
  COL_plus_rent_index: 74.63,
  city: citiesMappedByName["San Diego"],
};
// San Jose
export const sanJoseCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: californiaStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 82.62,
  COL_plus_rent_index: 76.19,
  city: citiesMappedByName["San Jose"],
};
// San Francisco
export const sanFranciscoCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: californiaStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 97.78,
  COL_plus_rent_index: 93.48,
  city: citiesMappedByName["San Francisco"],
};
// Los Angeles
export const losAngelesCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: californiaStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 78.53,
  COL_plus_rent_index: 74.16,
  city: citiesMappedByName["Los Angeles"],
};

// Washington Tax Data
// Washington State Tax Data
export const washingtonStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
};
// Washington Cities Tax Data
// Seattle
export const seattleCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: washingtonStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 88.85,
  COL_plus_rent_index: 75.19,
  city: citiesMappedByName["Seattle"],
};

// New York Tax Data
// New York State Tax Data
export const newYorkStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: 8500,
      tax_rate: 0.04,
    },
    {
      tax_from_lower_break_points: 340,
      start_income: 8501,
      end_income: 11700,
      tax_rate: 0.045,
    },
    {
      tax_from_lower_break_points: 484,
      start_income: 11701,
      end_income: 13900,
      tax_rate: 0.0525,
    },
    {
      tax_from_lower_break_points: 600,
      start_income: 13901,
      end_income: 21400,
      tax_rate: 0.059,
    },
    {
      tax_from_lower_break_points: 1042,
      start_income: 21401,
      end_income: 80650,
      tax_rate: 0.0597,
    },
    {
      tax_from_lower_break_points: 4579,
      start_income: 80651,
      end_income: 215400,
      tax_rate: 0.0633,
    },
    {
      tax_from_lower_break_points: 13109,
      start_income: 215401,
      end_income: 1077550,
      tax_rate: 0.0685,
    },
    {
      tax_from_lower_break_points: 72166,
      start_income: 1077551,
      end_income: 5000000,
      tax_rate: 0.0965,
    },
    {
      tax_from_lower_break_points: 450683,
      start_income: 5000001,
      end_income: 25000000,
      tax_rate: 0.103,
    },
    {
      tax_from_lower_break_points: 2510683,
      start_income: 25000001,
      end_income: Infinity,
      tax_rate: 0.109,
    },
  ],
};
// New York City Tax Data
export const newYorkCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: 12000,
      tax_rate: 0.03078,
    },
    {
      tax_from_lower_break_points: 369,
      start_income: 12001,
      end_income: 25000,
      tax_rate: 0.03762,
    },
    {
      tax_from_lower_break_points: 858,
      start_income: 25001,
      end_income: 50000,
      tax_rate: 0.03819,
    },
    {
      tax_from_lower_break_points: 1813,
      start_income: 50001,
      end_income: Infinity,
      tax_rate: 0.03876,
    },
  ],
  stateTaxData: newYorkStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 100.0,
  COL_plus_rent_index: 100.0,
  city: cities[11],
};

// Illinois Tax Data
// Illinois State Tax Data
export const illinoisStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0495,
    },
  ],
};
// Chicago Tax Data
export const chicagoCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: illinoisStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 77.23,
  COL_plus_rent_index: 65.78,
  city: citiesMappedByName["Chicago"],
};

// Massachusetts Tax Data
// Massachusetts State Tax Data
export const massachusettsStateTaxData: FederalOrStateIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0500,
    },
  ],
};
// Boston Tax Data
export const bostonCityTaxData: LocalIncomeTaxData = {
  singleFilerBreakpoints: [
    {
      tax_from_lower_break_points: 0,
      start_income: 0,
      end_income: Infinity,
      tax_rate: 0.0,
    },
  ],
  stateTaxData: massachusettsStateTaxData,
  federalTaxData: federalTaxData,
  COL_index: 87.04,
  COL_plus_rent_index: 79.22,
  city: citiesMappedByName["Boston"],
};



export const cityTaxDataMappedByCityName: {
  [cityName: string]: LocalIncomeTaxData;
} = {
  Austin: austinCityTaxData,
  Houston: houstonCityTaxData,
  Dallas: dallasCityTaxData,
  "San Antonio": sanAntonioCityTaxData,
  Denver: denverCityTaxData,
  Boulder: boulderCityTaxData,
  "Colorado Springs": coloradoSpringsCityTaxData,
  "San Diego": sanDiegoCityTaxData,
  "San Jose": sanJoseCityTaxData,
  "San Francisco": sanFranciscoCityTaxData,
  "Los Angeles": losAngelesCityTaxData,
  Seattle: seattleCityTaxData,
  "New York City": newYorkCityTaxData,
  Chicago: chicagoCityTaxData,
  Boston: bostonCityTaxData,
};
