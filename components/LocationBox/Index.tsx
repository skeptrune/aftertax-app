import { city } from "../../data/cities";
import { FC, useEffect, useState } from "react";
import { AnnualIncomeInput } from "./AnnualIncomeInput";
import {
  IncomeTaxBreakdown,
  calculateIncomeTaxForGivenCity,
  adjustedCOL,
  COlBreakdown,
} from "../../utility/CalculateTaxBreakdown";

export interface LocationBoxProps {
  location: city;
  currentLocation: city;
  currentMonthlyCOL: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const LocationBox: FC<LocationBoxProps> = ({
  location,
  currentLocation,
  currentMonthlyCOL,
}) => {
  const [taxBreakdown, setTaxBreakdown] = useState<IncomeTaxBreakdown | null>(
    null
  );
  const [COLBreakdown, setCOLBreakdown] = useState<COlBreakdown | null>(null);
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [loadingInitialSetup, setLoadingInitialSetup] = useState<boolean>(true);

  useEffect(() => {
    setTaxBreakdown(
      calculateIncomeTaxForGivenCity(annualIncome, location.city)
    );
    setCOLBreakdown(
      adjustedCOL(location.city, currentLocation.city, currentMonthlyCOL)
    );
  }, [annualIncome, currentMonthlyCOL, currentLocation]);

  useEffect(() => {
    if (loadingInitialSetup) {
      return;
    }

    window.localStorage.setItem(
      "annualIncome" + location.city,
      JSON.stringify(annualIncome)
    );
  }, [annualIncome]);

  useEffect(() => {
    const annualIncome = window.localStorage.getItem(
      "annualIncome" + location.city
    );
    if (annualIncome) {
      setAnnualIncome(JSON.parse(annualIncome));
    }
    setLoadingInitialSetup(false);
  }, []);

  return (
    <div className="mt-5 w-full rounded-2xl border-2 border-sandgold-900 bg-gradient-to-b from-gravel-500 to-gravel-500/60 pb-4 shadow-md shadow-balticsea-500 animate-in fade-in duration-500">
      <div className="w-full border-b border-sandgold-800 py-5 text-center text-lg font-bold text-sandgold-400">
        <div className="w-full">
          {location.city}, {location.state}
        </div>
      </div>
      <div className="flex justify-center border-b border-sandgold-800 py-3">
        <AnnualIncomeInput income={annualIncome} setIncome={setAnnualIncome} />
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 py-2 px-8">
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Federal Income Tax Total:{" "}
        </p>
        <p>{formatter.format(taxBreakdown?.federal_income_tax_total)}</p>
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Federal Income Tax Rate:{" "}
        </p>
        <p>
          {(taxBreakdown?.federal_income_tax_effective_rate * 100).toFixed(2)}%
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 py-2 px-8">
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          State Income Tax Total:{" "}
        </p>
        <p>{formatter.format(taxBreakdown?.state_income_tax_total)}</p>
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          State Income Tax Rate:{" "}
        </p>
        <p>
          {(taxBreakdown?.state_income_tax_effective_rate * 100).toFixed(2)}%
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 py-2 px-8">
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Local Income Tax Total:{" "}
        </p>
        <p>{formatter.format(taxBreakdown?.local_income_tax_total)}</p>
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Local Income Tax Rate:{" "}
        </p>
        <p>
          {(taxBreakdown?.local_income_tax_effective_rate * 100).toFixed(2)}%
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 py-2 px-8">
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Total Income Tax:{" "}
        </p>
        <p>{formatter.format(taxBreakdown?.total_income_tax_total)}</p>
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Total Income Tax Rate:{" "}
        </p>
        <p>
          {(taxBreakdown?.total_income_tax_effective_rate * 100).toFixed(2)}%
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 bg-gravel-400 py-3 px-8">
        <p className="text-md col-span-2 font-bold text-sandgold-300">
          Net Income:{" "}
        </p>
        <p>
          {formatter.format(
            annualIncome - taxBreakdown?.total_income_tax_total
          )}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 py-2 px-8">
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Adjusted Monthly COL:{" "}
        </p>
        <p>{formatter.format(COLBreakdown?.adjusted_col)}</p>
        <p className="col-span-2 text-sm font-medium text-sandgold-400">
          Monthly COL Ratio:{" "}
        </p>
        <p>{(COLBreakdown?.adjusted_col_ratio * 100).toFixed(2)}%</p>
        <p className="col-span-2 text-sm font-bold text-sandgold-300">
          Annual COL Difference:{" "}
        </p>
        <p
          className={
            currentMonthlyCOL -
              (COLBreakdown?.adjusted_col || currentMonthlyCOL) ==
            0
              ? "text-white"
              : currentMonthlyCOL - COLBreakdown?.adjusted_col > 0
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {formatter.format(
            (currentMonthlyCOL -
              (COLBreakdown?.adjusted_col || currentMonthlyCOL)) *
              12
          )}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 border-b border-sandgold-800 bg-gravel-400 py-3 px-8">
        <p className="text-md col-span-2 font-bold text-sandgold-300">
          COL Adjusted Net Income:{" "}
        </p>
        <p>
          {formatter.format(
            annualIncome -
              taxBreakdown?.total_income_tax_total +
              (currentMonthlyCOL - COLBreakdown?.adjusted_col) * 12
          )}
        </p>
      </div>
    </div>
  );
};
