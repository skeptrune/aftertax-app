/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, FC, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { city } from '../../data/cities';

interface CityCheckboxProps {
  label: string;
  locations: city[];
  selectedCities: city[] | city;
  setSelectedCities: Dispatch<SetStateAction<city[]> | SetStateAction<city>>;
  multipleOptions: boolean;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const checkIfSelected = (selectedCities: city[] | city, location: city) => {
  if (Array.isArray(selectedCities)) {
    return selectedCities.some((city) => city.city === location.city);
  } else {
    return selectedCities.city === location.city;
  }
};

// remove or add the selected city to the array of selected cities
const handleCitySelected = (selectedCities: city | city[], setSelectedCities: Dispatch<city | city[]>, location: city) => {
  const selectedCitiesCopy: city[] | city = JSON.parse(JSON.stringify(selectedCities));
  
  if(Array.isArray(selectedCitiesCopy)) {
    if (selectedCitiesCopy.some((city) => city.city === location.city)) {
      setSelectedCities(selectedCitiesCopy.filter((city) => city.city !== location.city));
    }
    else {
      setSelectedCities([...selectedCitiesCopy, location]);
    }
    return;
  }

  if (selectedCitiesCopy.city === location.city) {
    setSelectedCities({} as city);
  }
  else {
    setSelectedCities(location);
  }
}

export const CityCheckbox: FC<CityCheckboxProps> = ({
  label,
  locations,
  selectedCities,
  setSelectedCities,
  multipleOptions,
}) => {
  const getListBoxText = () => {
    if (!Array.isArray(selectedCities)) {
      return selectedCities.city || "Select a city";
    }

    if (selectedCities.length === 0) {
      return "Select cities";
    }

    let result = "";
    for (let i = 0; i < selectedCities.length; i++) {
      result += selectedCities[i].city + (i === selectedCities.length - 1 ? "" : ", ");
    }
    return result;
  };

  return (
    <div>
      <Listbox
        value={selectedCities}
        onChange={setSelectedCities}
        multiple={multipleOptions}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-sandgold-400">
              {label}
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-xl border border-sandgold-800 bg-gravel-200 py-2 pl-3 pr-10 text-left shadow-sm focus:border-sandgold-200 focus:outline-none focus:ring-1 focus:ring-sandgold-200 sm:text-sm">
                <span className="inline-flex w-full truncate text-slate-100">
                  <span className="truncate">{getListBoxText()}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gravel-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locations.map((location) => (
                    <div
                      key={location.city}
                      className="relative cursor-default select-none py-2 pl-3 pr-9 text-slate-100 hover:bg-sandgold-800"
                      // value={location}
                      onClick={() => handleCitySelected(selectedCities, setSelectedCities, location)}
                    >
                      {/* {({ selected, active }) => ( */}
                        <>
                          {/* {selected = checkIfSelected(selectedCities, location)} */}
                          <div className="flex">
                            <span
                              className={classNames(
                                checkIfSelected(selectedCities, location) ? "font-semibold" : "font-normal",
                                "truncate"
                              )}
                            >
                              {location.city}
                            </span>
                            <span
                              className={classNames(
                                checkIfSelected(selectedCities, location) ? "text-slate-300" : "text-slate-300",
                                "ml-2 truncate"
                              )}
                            >
                              {location.zip}
                            </span>
                          </div>

                          {checkIfSelected(selectedCities, location) ? (
                            <span
                              className="text-slate-100 absolute inset-y-0 right-0 flex items-center pr-4"
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      {/* )} */}
                    </div>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
