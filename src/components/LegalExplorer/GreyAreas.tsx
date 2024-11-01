import React, { useState } from 'react';

interface Strategy {
  id: string;
  title: string;
  concept: string;
  methods: string[];
  risks: string[];
  examples: string[];
}

export const GreyAreas: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const strategies: Strategy[] = [
    {
      "id": "income-splitting",
      "title": "1. The Income Splitting Shuffle",
      "concept": "Distribute business income among family members in lower tax brackets.",
      "methods": [
        "Gift genuine gifts (with proper documentation)",
        "Hire family members at market rates with legitimate work agreements", 
        "Utilize HUF (Hindu Undivided Family) for eligible Hindu families"
      ],
      "risks": [
        "Transactions must be genuine and well-documented",
        "Salaries to family members must reflect market rates and actual work",
        "HUF regulations and taxation rules must be carefully followed"
      ],
      "examples": [
        "Gifting ₹50,000 annually to a spouse in a lower tax bracket",
        "Hiring a child for part-time social media management at a reasonable salary",
        "Transferring ancestral property to an HUF and distributing income to members"
      ]
    },
    {
      "id": "depreciation-accelerator",
      "title": "2. The Depreciation Accelerator",
      "concept": "Maximize depreciation claims to reduce taxable income in the early years.",
      "methods": [
        "Choose the highest depreciation rate allowed by law for each asset class",
        "Utilize the Block of Assets method for assets with similar depreciation rates"
      ],
      "risks": [
        "Accelerated depreciation reduces deductions in later years",
        "Careful planning is needed to balance short-term and long-term tax benefits"
      ],
      "examples": [
        "Choosing the WDV method with the highest applicable rate for new machinery",
        "Combining multiple computers into a block of assets with a 40% depreciation rate"
      ]
    },
    {
      "id": "expense-allocation",
      "title": "3. The Strategic Expense Allocation Tango",
      "concept": "Optimize allocation between personal and business expenses.",
      "methods": [
        "Home office expense allocation (proportionate to business use)",
        "Vehicle usage tracking for business vs. personal use",
        "Communication expenses distribution (phone, internet) based on usage",
        "Travel expense categorization (business vs. personal)"
      ],
      "risks": [
        "Must maintain detailed records and logs to support the allocation",
        "Clear business purpose is needed for claimed expenses",
        "Regular usage logs are required for vehicles and communication devices"
      ],
      "examples": [
        "Home office: 20% of rent and utilities allocated to business",
        "Vehicle: 70% business use documented through a logbook",
        "Internet: 80% of monthly bill allocated to business expenses"
      ]
    },
    {
      "id": "tax-saving-investments",
      "title": "4. The Tax-Saving Investment Maze",
      "concept": "Utilize tax-saving investments to reduce taxable income and potentially earn returns.",
      "methods": [
        "Maximize contributions to Section 80C investments (PPF, ELSS, NPS, etc.)",
        "Explore deductions under Section 80D (medical insurance), 80E (education loan interest), 80G (donations)"
      ],
      "risks": [
        "Lock-in periods apply to certain investments, requiring long-term commitment",
        "Investment returns are not guaranteed and vary based on market conditions",
        "Choose investments that align with your financial goals and risk tolerance"
      ],
      "examples": [
        "Investing ₹1.5 Lakhs in PPF annually for long-term tax-free returns",
        "Allocating ₹1.5 Lakhs to ELSS mutual funds for potential high growth",
        "Contributing ₹50,000 to NPS for retirement planning and additional tax benefits"
      ]
    },
    {
      "id": "charitable-giving",
      "title": "5. The Charitable Giving Gambit",
      "concept": "Donate to eligible charities to get tax deductions and support worthy causes.",
      "methods": [
        "Donate to approved charities under Section 80G and claim deductions (50% or 100%)",
        "Consider establishing a private trust for larger donations and potential control over fund utilization"
      ],
      "risks": [
        "Ensure the charity is registered and approved for 80G deductions",
        "Maintain proper documentation, including donation receipts and trust deeds",
        "Trust regulations and compliance requirements can be complex"
      ],
      "examples": [
        "Donating ₹20,000 to a registered NGO working on child education (100% deduction)",
        "Setting up a private trust with a corpus of ₹1 Crore for funding medical research (50% deduction)"
      ]
    },
    {
      "id": "presumptive-profit",
      "title": "6. The Presumptive Profit Illusion",
      "concept": "Opt for presumptive taxation to simplify accounting and potentially reduce tax liability.",
      "methods": [
        "Choose Section 44AD if your turnover is below ₹2 Crores (presumed profit at 8% of turnover)",
        "Opt for Section 44ADA if you're a professional with turnover below ₹50 Lakhs (presumed profit at 50% of turnover)"
      ],
      "risks": [
        "If actual profit exceeds the presumed amount, you'll be taxed on the higher profit",
        "Not suitable for businesses with high profit margins or fluctuating income"
      ],
      "examples": [
        "A retailer with ₹1.5 Crore turnover can declare ₹12 Lakhs (8%) as income under Section 44AD",
        "A freelance consultant with ₹40 Lakhs turnover can declare ₹20 Lakhs (50%) as income under Section 44ADA"
      ]
    },
    {
      "id": "capital-gains",
      "title": "7. The Capital Gains Carousel",
      "concept": "Strategically time the sale of assets to minimize capital gains tax.",
      "methods": [
        "Hold assets for the long term to benefit from lower long-term capital gains tax rates",
        "Offset capital gains with capital losses from other asset sales",
        "Reinvest capital gains in tax-saving bonds (like Section 54EC bonds) to defer tax"
      ],
      "risks": [
        "Market fluctuations can impact returns, making timing crucial",
        "Tax-saving bonds have lock-in periods and may offer lower returns than other investments",
        "Consult with a financial advisor to assess the suitability of these strategies"
      ],
      "examples": [
        "Holding stocks for over a year to qualify for lower long-term capital gains tax",
        "Selling a loss-making investment to offset gains from a profitable investment",
        "Investing capital gains from property sale in Section 54EC bonds for tax deferral"
      ]
    },
    {
      "id": "business-structure",
      "title": "8. The Business Structure Shell Game",
      "concept": "Choose the optimal business structure to minimize taxes based on your circumstances.",
      "methods": [
        "Sole Proprietorship for simplicity and individual tax rates (but unlimited liability)",
        "Partnership/LLP for shared liability and potential income splitting",
        "Company for limited liability but corporate tax rates"
      ],
      "risks": [
        "Each structure has different legal, administrative, and tax implications",
        "Consult with legal and tax professionals to determine the best fit for your business"
      ],
      "examples": [
        "A freelancer may choose sole proprietorship for ease of setup and tax filing",
        "A family business may opt for a partnership to split income among members",
        "A high-growth startup may incorporate as a company for limited liability and potential funding"
      ]
    },
    {
      "id": "loan-interest",
      "title": "9. The Loan Interest Labyrinth",
      "concept": "Utilize loans strategically to create tax deductions.",
      "methods": [
        "Deduct interest paid on business loans",
        "Claim deductions for interest on a home loan against rental income (subject to limits)"
      ],
      "risks": [
        "Loans come with repayment obligations and interest costs",
        "Assess affordability and ensure the tax benefits outweigh the loan costs",
        "Maintain proper documentation for loan agreements and interest payments"
      ],
      "examples": [
        "Taking a business loan to purchase equipment and deducting the interest paid",
        "Claiming a deduction for home loan interest against rental income from a second property"
      ]
    },
    {
      "id": "carry-forward",
      "title": "10. The \"Carry Forward\" Time Machine",
      "concept": "Utilize losses and deductions that can be carried forward to offset future profits.",
      "methods": [
        "Carry forward business losses to offset profits in subsequent years",
        "Carry forward capital losses to offset future capital gains"
      ],
      "risks": [
        "Requires meticulous tax planning and record-keeping",
        "Future profitability is not guaranteed, so the benefits of carry forward may vary"
      ],
      "examples": [
        "A startup incurring losses in the initial years can carry forward those losses to offset profits when it becomes profitable",
        "An investor incurring a capital loss on a stock sale can carry forward the loss to offset future gains from other stock sales"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 p-8 rounded-2xl mb-8 shadow-lg border border-red-100">
        <h2 className="text-3xl font-bold text-red-800 mb-4 flex items-center">
          <span className="text-4xl mr-3">⚠️</span> High-Risk Area
        </h2>
        <p className="text-red-700 leading-relaxed text-lg">
          These strategies involve complex tax planning and may be subject to scrutiny.
          Professional consultation is mandatory before implementation.
        </p>
      </div>

      <div className="grid gap-8">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            className="bg-[#F8FAFC] rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            <div className="p-8">
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedStrategy(
                  selectedStrategy === strategy.id ? null : strategy.id
                )}
              >
                <div className="flex justify-between items-center group">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {strategy.title}
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors text-2xl">
                    {selectedStrategy === strategy.id ? '−' : '+'}
                  </button>
                </div>
                <p className="text-gray-600 mt-3 text-lg">{strategy.concept}</p>
              </div>

              {selectedStrategy === strategy.id && (
                <div className="mt-8 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Implementation Methods</h4>
                    <ul className="space-y-3">
                      {strategy.methods.map((method, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h4 className="font-bold text-yellow-800 mb-4 text-lg">Risk Factors</h4>
                    <ul className="space-y-3">
                      {strategy.risks.map((risk, idx) => (
                        <li key={idx} className="text-yellow-700 flex items-start">
                          <span className="text-yellow-500 mr-2">⚠</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-4 text-lg">Practical Examples</h4>
                    <ul className="space-y-3">
                      {strategy.examples.map((example, idx) => (
                        <li key={idx} className="text-blue-700 flex items-start">
                          <span className="text-blue-500 mr-2">→</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 