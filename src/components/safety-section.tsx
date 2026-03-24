import Icon from "@/components/ui/icon"

const safetyPoints = [
  {
    icon: "ShieldCheck",
    title: "Сертификация FDA и CE",
    description:
      "Все компоненты устройства прошли полный цикл регуляторного одобрения. Клинические испытания Phase III подтвердили профиль безопасности.",
  },
  {
    icon: "Lock",
    title: "Квантовое шифрование",
    description:
      "Нейронные данные шифруются прямо на чипе по алгоритму AES-256. Ни один сторонний сервер не имеет доступа к вашим мозговым паттернам.",
  },
  {
    icon: "Activity",
    title: "Непрерывный мониторинг",
    description:
      "Встроенные датчики отслеживают 18 биометрических параметров и автоматически деактивируют устройство при отклонении от нормы.",
  },
  {
    icon: "RotateCcw",
    title: "Полная обратимость",
    description:
      "Процедура установки малоинвазивна и полностью обратима. Извлечение занимает менее часа и не оставляет следов в нейронной ткани.",
  },
]

export function SafetySection() {
  return (
    <section className="py-24 px-6 bg-black" id="safety">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron uppercase tracking-wide">
            Безопасность — не компромисс
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-space-mono">
            Мы проектировали SynapseAI так, чтобы безопасность была встроена в каждый слой — от материалов до протоколов данных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-5 p-7 border border-red-500/20 rounded-2xl bg-gradient-to-br from-gray-900/60 to-black hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center">
                <Icon name={point.icon} fallback="Shield" size={22} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-bold font-orbitron text-lg mb-2">{point.title}</h3>
                <p className="text-gray-400 font-space-mono text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-red-500/10 pt-12">
          <p className="text-gray-500 font-space-mono text-sm max-w-3xl mx-auto">
            Все клинические данные доступны по запросу исследователям и медицинским учреждениям.
            SynapseAI сотрудничает с ведущими этическими комиссиями по всему миру.
          </p>
        </div>
      </div>
    </section>
  )
}
