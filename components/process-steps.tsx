export default function ProcessSteps() {
const steps = [
  { number: "1", title: "🗣️ Consultation", color: "border-red-400 text-red-500" },
  { number: "2", title: "💬 Get Quotation", color: "border-blue-400 text-blue-500" },
  { number: "3", title: "📝 Submit Docs", color: "border-blue-600 text-blue-600" },
  { number: "4", title: "📋 Audit & Review", color: "border-green-500 text-green-500" },
  { number: "5", title: "✅ Approval & Payment", color: "border-yellow-500 text-yellow-500" },
  { number: "6", title: "🎓 Get Certified", color: "border-blue-600 text-blue-600" }
];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#033097] mb-6">Easy Certification Process</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have an expert team with more than 7+ years of experience in the field of ISO Certification that helps
            your company to be ISO Certified. Our easy certification process helps you get internationally accepted
            management system certification which adds value to your business and results in overall customer
            satisfaction to your clients.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-[#033097] mb-8">STEPS TO GET ISO CERTIFICATION</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div
                  className={`border-4 ${step.color} rounded-lg p-6 bg-white min-h-[120px] flex flex-col justify-center`}
                >
                  <div className={`text-6xl font-bold ${step.color} mb-2`}>{step.number}</div>
                  <h4 className="text-gray-700 font-semibold text-sm leading-tight">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
