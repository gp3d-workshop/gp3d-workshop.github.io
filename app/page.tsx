'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Avatar from '@/components/Avatar'
import { ArrowUpRight, MapPin, CalendarDays } from 'lucide-react'
import {
  workshop,
  overview,
  topics,
  speakers,
  organizers,
  programCommittee,
  schedule,
  keyDates,
  cfp,
} from '@/data/workshop'

function StatusBadge({ status }: { status: string }) {
  const isConfirmed = status.toLowerCase() === 'confirmed'
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${
        isConfirmed
          ? 'bg-green-50 text-green-700 ring-green-200'
          : 'bg-amber-50 text-amber-700 ring-amber-200'
      }`}
    >
      {status}
    </span>
  )
}

function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
}: {
  id: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`py-11 sm:py-14 ${className}`}>
      <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">{title}</h2>
        {subtitle && <div className="mt-2 text-sm text-zinc-400">{subtitle}</div>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main id="top">
      <Navigation />

      {/* Hero */}
      <section className="px-5 sm:px-6 pt-24 sm:pt-28 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent mb-4">{workshop.event}</p>
          <h1 className="mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1rem,4.8vw,3.25rem)] font-semibold tracking-tight text-zinc-900 leading-[1.1]">
            General-Purpose 3D Intelligence
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            {(() => {
              const [before, after] = workshop.tagline.split(/\bthat\s/)
              return (
                <>
                  {before}
                  <br />
                  that {after}
                </>
              )
            })()}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              {workshop.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {workshop.location}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cfp"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Call for papers
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section id="overview" title="Overview" className="border-t border-zinc-200">
        <div className="max-w-content mx-auto space-y-4 text-zinc-600 text-justify">
          {overview.abstract.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Topics */}
      <Section id="topics" title="Topics of interest" className="border-t border-zinc-200">
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="w-full sm:w-[280px] rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors"
            >
              <h3 className="font-medium text-zinc-900 mb-1.5">{topic.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Speakers */}
      <Section id="speakers" title="Speakers" className="border-t border-zinc-200">
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto justify-items-center">
          {speakers.map((s) => (
            <div key={s.name} className="flex flex-col items-center text-center">
              <Avatar name={s.name} src={s.src} size={80} />
              <h3 className="mt-3 font-medium text-zinc-900 leading-tight">{s.name}</h3>
              <p className="text-sm text-zinc-500">{s.affiliation}</p>
              {s.status && (
                <div className="mt-2">
                  <StatusBadge status={s.status} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Schedule */}
      <Section
        id="schedule"
        title="Tentative schedule"
        subtitle="One day · in person"
        className="border-t border-zinc-200"
      >
        <div className="max-w-2xl mx-auto divide-y divide-zinc-100">
          {schedule.map((item) => (
            <div key={item.time} className="flex items-baseline justify-center gap-5 py-3">
              <span className="w-28 shrink-0 text-right text-sm tabular-nums text-zinc-400">
                {item.time}
              </span>
              <div className="w-48 text-left">
                <span className="text-zinc-900">{item.session}</span>
                {item.detail && <span className="block text-sm text-zinc-400">{item.detail}</span>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key dates */}
      <Section id="dates" title="Key dates" className="border-t border-zinc-200">
        <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-5">
          {keyDates.map((d) => (
            <div key={d.label} className="bg-white p-4 text-center">
              <p className="font-medium text-zinc-900">{d.date}</p>
              <p className="text-xs text-zinc-500 mt-1">{d.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call for papers */}
      <Section
        id="cfp"
        title="Call for papers"
        subtitle={
          <>
            <span className="inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-indigo-200">
              Coming soon
            </span>
            <span className="mt-2 block">Preliminary details.</span>
          </>
        }
        className="border-t border-zinc-200"
      >
        <div className="max-w-content mx-auto">
          <ul className="space-y-2.5">
            {cfp.points.map((point, i) => (
              <li key={i} className="text-zinc-600">
                {point}
              </li>
            ))}
          </ul>
          <a
            href={workshop.openReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Submit on OpenReview
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Section>

      {/* Organizers */}
      <Section id="organizers" title="Organizers" subtitle="The team" className="border-t border-zinc-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
          {organizers.map((o) => {
            const inner = (
              <>
                <Avatar name={o.name} src={o.src} size={88} />
                <h3 className="mt-3 font-medium text-zinc-900 leading-tight flex items-center justify-center gap-1">
                  {o.url && <span className="w-3.5 shrink-0" aria-hidden="true" />}
                  {o.name}
                  {o.url && (
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>
                {o.affiliation && <p className="text-sm text-zinc-500">{o.affiliation}</p>}
              </>
            )
            return o.url ? (
              <a
                key={o.name}
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center"
              >
                {inner}
              </a>
            ) : (
              <div key={o.name} className="group flex flex-col items-center text-center">
                {inner}
              </div>
            )
          })}
        </div>
      </Section>

      {/* Program Committee */}
      <Section
        id="committee"
        title="Program committee"
        subtitle="Reviewers"
        className="border-t border-zinc-200"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {programCommittee.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-4 hover:border-zinc-300 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-900 leading-tight">{m.name}</span>
              <span className="text-xs text-zinc-500">{m.affiliation}</span>
              {m.status && <StatusBadge status={m.status} />}
            </div>
          ))}
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-amber-300 bg-amber-50 px-3 py-4 text-center">
            <span className="text-sm font-medium text-amber-700 leading-tight">More to come</span>
            <span className="text-xs text-amber-600">Continually recruiting</span>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
