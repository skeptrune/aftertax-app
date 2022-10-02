export interface city {
  city: string;
  state: string;
  zip: string;
}

export const cities: city[] = [
  { city: "Austin", state: "TX", zip: "78705" }, // 0
  { city: "Houston", state: "TX", zip: "77494" }, // 1
  { city: "Dallas", state: "TX", zip: "75019" }, // 2
  { city: "San Antonio", state: "TX", zip: "78201" }, // 3
  { city: "Denver", state: "CO", zip: "80010" }, // 4
  { city: "Boulder", state: "CO", zip: "80304" }, // 5
  { city: "Colorado Springs", state: "CO", zip: "80133" }, // 12
  { city: "San Diego", state: "CA", zip: "92101" }, // 6
  { city: "San Jose", state: "CA", zip: "95113" }, // 7
  { city: "San Francisco", state: "CA", zip: "94105" }, // 8
  { city: "Los Angeles", state: "CA", zip: "90001" }, // 9
  { city: "Seattle", state: "WA", zip: "98101" }, // 10
  { city: "New York City", state: "NY", zip: "10012" }, // 11
  { city: "Boston", state: "MA", zip: "02110" }, // 12
  { city: "Chicago", state: "IL", zip: "60601" }, // 13
];

export const citiesMappedByName: { [key: string]: city } = {
  Austin: { city: "Austin", state: "TX", zip: "78705" },
  Houston: { city: "Houston", state: "TX", zip: "77494" },
  Dallas: { city: "Dallas", state: "TX", zip: "75019" },
  "San Antonio": { city: "San Antonio", state: "TX", zip: "78201" },
  Denver: { city: "Denver", state: "CO", zip: "80010" },
  Boulder: { city: "Boulder", state: "CO", zip: "80304" },
  "Colorado Springs": { city: "Colorado Springs", state: "CO", zip: "80133" },
  "San Diego": { city: "San Diego", state: "CA", zip: "92101" },
  "San Jose": { city: "San Jose", state: "CA", zip: "95113" },
  "San Francisco": { city: "San Francisco", state: "CA", zip: "94105" },
  "Los Angeles": { city: "Los Angeles", state: "CA", zip: "90001" },
  Seattle: { city: "Seattle", state: "WA", zip: "98101" },
  "New York City": { city: "New York City", state: "NY", zip: "10012" },
  "Boston": { city: "Boston", state: "MA", zip: "02110" },
  "Chicago": { city: "Chicago", state: "IL", zip: "60601" },
};
