import Link from 'next/link'

const sections = [
  {
    num: '1',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-brand-body text-sm leading-relaxed mb-4">
          We collect information that helps us respond to you and carry out your project. This may include:
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Contact information such as your name, email address, phone number, and, when needed, mailing or shipping address.',
            'Project details, including your book idea, genre, goals, deadlines, and anything you share through a form or consultation.',
            'Creative files such as manuscripts, outlines, interview recordings, transcripts, photos, illustrations, and other materials you send us.',
            'Publishing account information needed to help publish your book, including Amazon KDP, IngramSpark, ACX, or Findaway Voices details. We use these only with your permission.',
            'Third-party payment providers handle payment information. We do not store full card numbers on our own systems.',
            'Basic website and device information, such as browser type, device details, IP address, and pages visited. Cookies and similar tools may collect some of this information.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-brand-body leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: '2',
    title: 'Your Manuscript and Confidentiality',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        Your ideas and creative work belong to you. We offer a non-disclosure agreement (NDA) for signing before reviewing your work, and team members handling your project are expected to keep your materials confidential. We do not publish, share, or reuse your manuscript or project materials for unrelated purposes. For ghostwriting projects, the book is published under your name, not the writer&apos;s.
      </p>
    ),
  },
  {
    num: '3',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-brand-body text-sm leading-relaxed mb-4">
          We use the information you provide to:
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Reply to questions, arrange consultations, and prepare quotes.',
            'Provide the services you choose, including writing, editing, design, publishing, audiobook production, and marketing.',
            'Assign a project manager and keep you updated on progress.',
            'Prepare and distribute your book through platforms you approve.',
            'Process payments and send invoices or receipts.',
            'Understand how our website is used and improve our services.',
            "Send you offers or updates if you've agreed to receive marketing emails.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-brand-body leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: '4',
    title: 'When We Share Information',
    content: (
      <>
        <p className="text-brand-body text-sm leading-relaxed mb-4">
          We keep your personal information private and don&apos;t sell or rent it to anyone. We only share it when it&apos;s necessary to work on your project or when we&apos;re legally required to do so. This may include sharing it with:
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Writers, editors, designers, illustrators, narrators, and marketers working on your project, who are expected to protect your information.',
            'Publishing and distribution services you approve, such as Amazon KDP, IngramSpark, ACX, Findaway Voices, and other retailers.',
            'Service providers that help us operate, including website hosting, payment processing, email, scheduling, and file-sharing services.',
            'Authorities or other parties when disclosure is required by law or reasonably necessary to protect our rights, clients, or team.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-brand-body leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: '5',
    title: 'Cookies and Website Analytics',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        Our website may use cookies to keep features working and help us understand how visitors use the site. If you want, you can manage or turn off cookies in your browser settings, although some features may not work as expected. If Google reCAPTCHA protects a form, its use is subject to Google&apos;s Privacy Policy and Terms of Service.
      </p>
    ),
  },
  {
    num: '6',
    title: 'How We Protect Your Information',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        To protect your personal information and project files, we take reasonable measures. Access to the materials is restricted to people who need them for your project, and we make use of reliable services for the storage and management of the information. Although no online system can be made completely secure, we endeavour to minimise the risk of unauthorised access or disclosure.
      </p>
    ),
  },
  {
    num: '7',
    title: 'How Long We Keep Information',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        We will retain information and project files for as long as necessary to finish your work, to provide support for your published book, to comply with legal or accounting requirements, or to settle any disputes. Once the information is no longer required by us, we will delete it securely. If you wish to get in touch with us regarding the return or deletion of files, please know that this is subject to the records that we are obliged to keep.
      </p>
    ),
  },
  {
    num: '8',
    title: 'Your Choices and Rights',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        If you wish to find out what personal information we have about you, to ask for it to be corrected, or to request that it be deleted, you can get in touch with us. You have the option of unsubscribing from our marketing emails at any time. However, the privacy rights you are entitled to may be greater depending on where you live.
      </p>
    ),
  },
  {
    num: '9',
    title: "Children's Privacy",
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        The services are for adult users, and we do not knowingly obtain personal information directly from children under the age of 18. If a project includes a young writer or contributor, a legal guardian will have to take charge of the project and supply the necessary materials.
      </p>
    ),
  },
  {
    num: '10',
    title: 'Changes to This Policy',
    content: (
      <p className="text-brand-body text-sm leading-relaxed">
        We may update this policy as our services or practices change. Any revised version will be posted here with an updated effective date.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Legal</span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Effective Date: October 22, 2026</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-body text-base leading-relaxed">
            The Author Success (&ldquo;The Author Success,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) understands that a manuscript is often the most personal thing a writer owns. This Privacy Policy explains what information we collect when you visit{' '}
            <a href="https://theauthorsuccess.com" className="text-primary hover:underline font-medium">theauthorsuccess.com</a>{' '}
            or engage our writing, publishing, and marketing services, how we use it, and the choices available to you.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map(({ num, title, content }) => (
              <div key={num} className="border border-slate-100 rounded-2xl p-8 hover:border-cyan-200 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {num}
                  </span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark pt-0.5">
                    {title}
                  </h2>
                </div>
                <div className="pl-12">
                  {content}
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="border border-slate-100 rounded-2xl p-8 hover:border-cyan-200 hover:shadow-sm transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                  11
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark pt-0.5">
                  Contact Us
                </h2>
              </div>
              <div className="pl-12">
                <p className="text-brand-body text-sm leading-relaxed mb-5">
                  If you have a question about this policy or how we handle your information, contact us:
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3 text-sm text-brand-body">
                    <span className="font-semibold text-brand-dark w-16 shrink-0">Email</span>
                    <a href="mailto:support@theauthorsuccess.com" className="text-primary hover:underline">
                      support@theauthorsuccess.com
                    </a>
                  </li>
                  <li className="flex gap-3 text-sm text-brand-body">
                    <span className="font-semibold text-brand-dark w-16 shrink-0">Phone</span>
                    <a href="tel:+13073166909" className="text-primary hover:underline">
                      +1 (307) 316-6909
                    </a>
                  </li>
                  <li className="flex gap-3 text-sm text-brand-body">
                    <span className="font-semibold text-brand-dark w-16 shrink-0">Website</span>
                    <a href="https://theauthorsuccess.com" className="text-primary hover:underline">
                      theauthorsuccess.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-muted text-sm mb-4">
            Have questions about how we handle your data?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-lg shadow-cyan-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
