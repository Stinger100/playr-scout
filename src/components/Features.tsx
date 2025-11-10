import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Features() {
    return (
        <section className="pt-14 px-4">
            <h2 className="text-2xl text-tertiary mb-2">Gain a Competitive Edge</h2>
            <p className="text-tertiary">Everything you need to find and evaluate talent, all in one powerful platform</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
                  title: 'Global Player Database',
                  desc: 'Access an extensive, up-to-date database of players from leagues all around the world.',
                  icon: "globe",
            },
            {
                title: 'Advanced Performance Metrics',
                desc: 'Go beyond basic stats with our proprietary analytics to truly understand players performance.',
                icon: "magnifying-glass-chart"
                    },
                    {
                        title: 'Collaborative Scouting Reports',
                        desc: 'Share notes, create shortlists, and build comprehensive reports with your entire scouting team.',
                        icon: "users"
                    },
               {
                   title: 'Video Analysis Tool',
                   desc: 'Break down game footage with intuitive tools to identify strengths and weaknesses.',
                   icon: "video"
            },
          ].map((f) => (
            <article key={f.title} className="rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-black">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
    )
}