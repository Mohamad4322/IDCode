import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface ProfitCalculatorProps {
  propertyPrice: number;
}

export function ProfitCalculator({ propertyPrice }: ProfitCalculatorProps) {
  const [monthlyRent, setMonthlyRent] = useState(propertyPrice * 0.005); // Default 0.5% of property price
  const [expenses, setExpenses] = useState(monthlyRent * 0.4); // Default 40% of rent for expenses

  const annualRent = monthlyRent * 12;
  const annualExpenses = expenses * 12;
  const annualProfit = annualRent - annualExpenses;
  const roi = (annualProfit / propertyPrice) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Calculator className="w-6 h-6 text-emerald-600 mr-2" />
        <h3 className="text-xl font-semibold">Rental Profit Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between mb-2">
            <span>Annual Rental Income:</span>
            <span className="font-semibold">${annualRent.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Annual Expenses:</span>
            <span className="font-semibold">${annualExpenses.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Annual Profit:</span>
            <span className="font-semibold text-emerald-600">${annualProfit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Return on Investment:</span>
            <span className="font-semibold text-emerald-600">{roi.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}