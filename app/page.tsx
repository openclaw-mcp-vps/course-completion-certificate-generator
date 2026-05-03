export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-sm px-4 py-1 rounded-full mb-6">
          Education Tech · $8/mo
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Automated Course Completion
          <span className="text-[#58a6ff]"> Certificates</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Generate branded certificates with QR codes for instant verification when students complete your online courses. Trusted by educators worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-lg"
          >
            See How It Works
          </a>
        </div>
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          {[
            { icon: '🎓', title: 'Branded Templates', desc: 'Design certificates that match your brand with custom logos, colors, and fonts.' },
            { icon: '🔗', title: 'QR Verification', desc: 'Every certificate includes a unique QR code for instant authenticity verification.' },
            { icon: '⚡', title: 'Auto-Generated', desc: 'Certificates are automatically issued when students complete course requirements.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">Pro Plan</h3>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited certificates',
              'Custom branded templates',
              'QR code verification',
              'Student completion tracking',
              'CSV bulk import',
              'Email delivery',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-lg"
          >
            Get Started — $8/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does QR code verification work?',
              a: 'Each certificate gets a unique QR code that links to a verification page. Anyone can scan it to confirm the certificate is authentic and view the student details.'
            },
            {
              q: 'Can I customize the certificate design?',
              a: 'Yes. You can upload your logo, choose colors, set fonts, and arrange layout elements using our drag-and-drop template designer.'
            },
            {
              q: 'How are certificates delivered to students?',
              a: 'Certificates are automatically emailed to students as PDF attachments when they complete a course. Students can also download them from a personal portal.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} CertifyPro. All rights reserved.</p>
      </footer>
    </main>
  );
}
