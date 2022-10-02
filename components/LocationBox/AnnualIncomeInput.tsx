import { Dispatch, FC } from "react";

export interface AnnualIncomeInputProps {
  income: number;
  setIncome: Dispatch<number>;
}

export const AnnualIncomeInput: FC<AnnualIncomeInputProps> = ({
  income,
  setIncome,
}) => {
  return (
    <div className="flex flex-row">
      <label
        htmlFor="yearly-income"
        className="block text-sm mt-2 mr-2 font-semibold text-sandgold-400"
      >
        Annual Income:
      </label>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-slate-300 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="yearly-income"
          id="yearly-income"
          className="block cursor-default w-[150px] appearance-none rounded-lg border border-sandgold-800 bg-gravel-200 py-1 pl-7 text-left text-white shadow-sm focus:border-sandgold-200 focus:outline-none focus:ring-1 focus:ring-sandgold-200 sm:text-sm"
          placeholder="60000"
          value={income}
          onChange={(e) => setIncome(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};
