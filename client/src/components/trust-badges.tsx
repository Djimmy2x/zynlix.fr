export default function TrustBadges() {
  const badges = [
    "ISO 27001",
    "Microsoft Partner",
    "VMware Certified",
    "AWS Partner"
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">Nos certifications et partenariats</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {badges.map((badge, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-gray-100 px-6 py-4 rounded-lg">
                <span className="text-lg font-bold text-gray-700">{badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
