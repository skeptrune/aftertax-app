import Head from "next/head";
import { ApplicationShell } from "../components/ApplicationShell";
import TopLevelInputs from "../components/TopLevelInputs/Index";
import { useEffect, useState } from "react";
import { city, cities } from "../data/cities";
import { LocationBox } from "../components/LocationBox/Index";

export default function Home() {
  const [comparisonCities, setComparisonCities] = useState<city[]>([]);
  const [currentLocation, setCurrentLocation] = useState<city>(cities[0]);
  const [currentMonthlyCOL, setCurrentMonthlyCOL] = useState<number>(0);
  const [loadingInitialSetup, setLoadingInitialSetup] = useState<boolean>(true);

  useEffect(() => {
    if(loadingInitialSetup) {
      return;
    }

    window.localStorage.setItem("comparisonCities", JSON.stringify(comparisonCities));
    window.localStorage.setItem("currentLocation", JSON.stringify(currentLocation));
    window.localStorage.setItem("currentMonthlyCOL", JSON.stringify(currentMonthlyCOL));
  }, [comparisonCities, currentLocation, currentMonthlyCOL]);

  useEffect(() => {
    const comparisonCities = window.localStorage.getItem("comparisonCities");
    const currentLocation = window.localStorage.getItem("currentLocation");
    const currentMonthlyCOL = window.localStorage.getItem("currentMonthlyCOL");

    if (comparisonCities) {
      setComparisonCities(JSON.parse(comparisonCities));
    }

    if (currentLocation) {
      setCurrentLocation(JSON.parse(currentLocation));
    }

    if (currentMonthlyCOL) {
      setCurrentMonthlyCOL(JSON.parse(currentMonthlyCOL));
    }

    setLoadingInitialSetup(false);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-balticsea-300 to-balticsea-700 pb-16">
      <Head>
        <title>AfterTax</title>
        <meta
          name="description"
          content="Compare your post-tax income in multiple locations"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#d0a65b" />
        <script defer data-domain="aftertax.io" src="https://plausible.io/js/script.js"></script>
      </Head>

      <ApplicationShell>
        <TopLevelInputs
          {...{
            comparisonCities,
            setComparisonCities,
            currentLocation,
            setCurrentLocation,
            currentMonthlyCOL,
            setCurrentMonthlyCOL,
          }}
        />
        <div className="mx-4 md:mx-12 lg:mx-[5%] xl:mx-[10%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 max-w-full">
            {comparisonCities.map((city) => {
              return (
                <LocationBox
                  {...{ location: city, currentLocation, currentMonthlyCOL }}
                  key={city.zip}
                />
              );
            })}
          </div>
        </div>
      </ApplicationShell>
    </div>
  );
}
