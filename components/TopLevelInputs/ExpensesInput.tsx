import { FC, Dispatch } from "react";

export interface ExpensesInputProps {
  currentMonthlyCOL: number;
  setCurrentMonthlyCOL: Dispatch<number>;
}

export const ExpensesInput: FC<ExpensesInputProps> = ({ currentMonthlyCOL, setCurrentMonthlyCOL }) => {
  return (
    <div>
      <label htmlFor="current-monthly-expenses" className="block text-sm font-medium text-sandgold-400">
        Current Monthly COL
      </label>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-slate-300 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="current-monthly-expenses"
          id="current-monthly-expenses"
          className="block w-full cursor-default rounded-xl border border-sandgold-800 bg-gravel-200 py-2 pl-7 pr-10 text-left shadow-sm focus:border-sandgold-200 focus:outline-none focus:ring-1 focus:ring-sandgold-200 sm:text-sm appearance-none"
          placeholder="2000"
          value={currentMonthlyCOL}
          onChange={(e) => setCurrentMonthlyCOL(parseInt(e.target.value))}
        />
      </div>
    </div>
  )
}
