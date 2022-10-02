import { Dispatch, FC, useEffect } from "react";
import { CityCheckbox } from "./CityCheckbox";
import { city, cities } from "../../data/cities";
import { ExpensesInput } from "./ExpensesInput";

interface TopLevelInputsProps {
  comparisonCities: city[];
  setComparisonCities: Dispatch<city[]>;
  currentLocation: city;
  setCurrentLocation: Dispatch<city>;
  currentMonthlyCOL: number;
  setCurrentMonthlyCOL: Dispatch<number>;
}

export const TopLevelInputs: FC<TopLevelInputsProps> = ({
  comparisonCities,
  setComparisonCities,
  currentLocation,
  setCurrentLocation,
  currentMonthlyCOL,
  setCurrentMonthlyCOL,
}) => {
  return (
    <div className="mx-4 mt-6 mb-8 rounded-2xl border-2 border-sandgold-900 bg-gradient-to-b from-gravel-500/80 to-gravel-500 p-5 shadow-md shadow-balticsea-500 md:my-6 md:mx-12 lg:mx-[5%] xl:mx-[10%]">
      <div className="w-full md:flex md:justify-center md:space-x-8">
        <div className="md:w-1/5">
          <CityCheckbox
            label={"Comparison Cities"}
            locations={cities}
            selectedCities={comparisonCities}
            setSelectedCities={setComparisonCities}
            multipleOptions
          />
        </div>
        <div className="mt-4 md:mt-0 md:w-1/5">
          <CityCheckbox
            label={"Current Location"}
            locations={cities}
            selectedCities={currentLocation}
            setSelectedCities={setCurrentLocation}
            multipleOptions={false}
          />
        </div>
        <div className="mt-4 md:mt-0 md:w-1/5">
          <ExpensesInput {...{ currentMonthlyCOL, setCurrentMonthlyCOL }} />
        </div>
      </div>
    </div>
  );
};

export default TopLevelInputs;
