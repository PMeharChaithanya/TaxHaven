const TAX_UPDATE_TEMPLATES = [
  {
    title: "Tax Saving Deadline Approaching",
    description: "Only {days} days left to make your tax-saving investments for FY {year}",
    category: 'upcoming',
    source: 'Income Tax Department'
  },
  {
    title: "GST Collection Hits New Record",
    description: "Monthly GST collection reaches ₹{amount} crore, highest ever in {month}",
    category: 'breaking',
    source: 'Ministry of Finance'
  },
  {
    title: "New Tax Benefits Announced",
    description: "Government introduces additional deduction of ₹{amount} under Section {section}",
    category: 'new',
    source: 'CBDT'
  }
];

export class TaxUpdateService {
  static async fetchLatestUpdates() {
    // Generate 3-5 random updates
    const count = Math.floor(Math.random() * 3) + 3;
    const updates: TaxUpdate[] = [];

    for (let i = 0; i < count; i++) {
      const template = TAX_UPDATE_TEMPLATES[Math.floor(Math.random() * TAX_UPDATE_TEMPLATES.length)];
      updates.push(this.generateUpdate(template));
    }

    return updates;
  }

  private static generateUpdate(template: any): TaxUpdate {
    const now = new Date();
    const year = `${now.getFullYear()}-${now.getFullYear() + 1}`;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];

    let title = template.title;
    let description = template.description
      .replace('{days}', Math.floor(Math.random() * 30) + 1)
      .replace('{year}', year)
      .replace('{amount}', (Math.floor(Math.random() * 50) + 150).toLocaleString())
      .replace('{month}', months[now.getMonth()])
      .replace('{section}', ['80C', '80D', '80G'][Math.floor(Math.random() * 3)]);

    return {
      id: Math.random(),
      title,
      description,
      date: new Date(),
      category: template.category,
      source: template.source
    };
  }
} 