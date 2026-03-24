import Icon from "@/components/ui/icon"

const stats = [
  { value: "2019", label: "Год основания" },
  { value: "47+", label: "Патентов получено" },
  { value: "1200+", label: "Участников испытаний" },
  { value: "12", label: "Стран присутствия" },
]

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-500 font-space-mono text-sm uppercase tracking-widest mb-4 block">
              О компании
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron leading-tight">
              Мы строим мост между мозгом и будущим
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-space-mono text-sm">
              SynapseAI основана командой нейробиологов, инженеров и врачей с общей целью: дать людям возможность
              контролировать технологии так же естественно, как собственное тело.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-space-mono text-sm">
              Наша платформа прошла клинические испытания в ведущих нейрохирургических центрах Европы и Азии.
              Сегодня мы готовимся к первому коммерческому запуску — и ищем партнёров, которые разделяют нашу миссию.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={18} className="text-red-400" />
              </div>
              <span className="text-muted-foreground font-space-mono text-sm">Москва · Берлин · Сингапур</span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-red-500/20 rounded-2xl p-8 bg-gradient-to-br from-card to-black text-center hover:border-red-500/40 transition-colors duration-300"
                >
                  <div className="text-4xl font-extrabold text-red-500 font-orbitron mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-space-mono text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
