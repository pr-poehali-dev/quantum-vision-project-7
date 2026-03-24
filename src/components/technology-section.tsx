import Icon from "@/components/ui/icon"

const techs = [
  {
    icon: "Cpu",
    title: "Нейросигнальный процессор",
    description:
      "Специализированный чип обрабатывает 1024 нейронных канала одновременно с задержкой менее 0,1 мс — быстрее, чем успевает осознать мозг.",
    stat: "1024 канала",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача",
    description:
      "Зашифрованная передача данных по протоколу BCI-Link на скорости 1 Гбит/с. Никаких проводов, никаких компромиссов по безопасности.",
    stat: "1 Гбит/с",
  },
  {
    icon: "BrainCircuit",
    title: "Адаптивный ИИ",
    description:
      "Нейросеть на борту устройства обучается вашим уникальным паттернам и улучшается ежедневно, не требуя облачного соединения.",
    stat: "99,7% точность",
  },
  {
    icon: "Shield",
    title: "Биосовместимые материалы",
    description:
      "Электроды из платиноиридиевого сплава и полимерная матрица обеспечивают нулевое отторжение и стабильную работу более 10 лет.",
    stat: "10+ лет службы",
  },
]

export function TechnologySection() {
  return (
    <section className="py-24 px-6 bg-black" id="technology">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron uppercase tracking-wide">
            Технология внутри
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Четыре инженерных прорыва, которые делают SynapseAI самым точным нейроинтерфейсом в мире
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="group relative border border-red-500/20 rounded-2xl p-8 bg-gradient-to-br from-gray-900/80 to-black hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon name={tech.icon} fallback="Cpu" size={28} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white font-orbitron">{tech.title}</h3>
                    <span className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full font-space-mono whitespace-nowrap ml-3">
                      {tech.stat}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-space-mono text-sm">{tech.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
