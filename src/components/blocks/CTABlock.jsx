import { NavLink } from 'react-router-dom'

export default function CTABlock({
  title,
  heading,
  text = "Let's work together to bring your ideas to life. Whether you need a website, an app, or a custom automation, I can help you achieve your goals.",
  primaryLabel = "Let's Talk",
  buttonLabel,
  primaryTo = '/start-project',
}) {
  const resolvedTitle = title || heading || 'Have a problem that needs a digital solution?'
  const resolvedLabel = buttonLabel || primaryLabel
  return (
    <section className="py-10 border-t border-gray-800">
      <div className="flex flex-col sm:flex-row bg-gradient-to-r from-green-500 via-green-600 to-green-800 rounded-xl p-8 gap-8 sm:gap-10 items-center justify-between">
        <div className="space-y-3">
          <h2 className="font-bold text-2xl sm:text-3xl text-white">{resolvedTitle}</h2>
          <p className="text-md w-full max-w-xl text-green-50/90">{text}</p>
        </div>
        <div className="flex items-center gap-8 sm:gap-15 shrink-0">
          <NavLink
            to={primaryTo}
            className="bg-white hover:bg-gray-50 text-green-800 font-semibold rounded-sm w-40 sm:w-50 py-2 px-5 text-center"
          >
            {resolvedLabel}
          </NavLink>
          <img src="/arrow.png" alt="" className="hidden sm:block w-28 lg:w-40 invert" />
        </div>
      </div>
    </section>
  )
}
