import USE_CASES from '../data/useCases.json'

/**
 * Compose le stack pour un acteur donné en lisant useCases.json
 * @param {object} params - { usecase_id, context, resilience, n_csps, m_dcs }
 * @param {'ob'|'megaport'|'equinix'} actor
 * @returns {object} StackQuantities
 */
export function composeStack(params, actor) {
  const { usecase_id, context, resilience, n_csps = 1, m_dcs = 1 } = params

  const usecase = USE_CASES.find(uc => uc.id === usecase_id)
  if (!usecase) throw new Error(`Use case inconnu : ${usecase_id}`)

  // Sélection de la clé du stack selon acteur et contexte
  const actorKey = actor === 'ob'
    ? (context === 'greenfield' ? 'ob_greenfield' : 'ob_mpls')
    : actor

  const blueprint = usecase.stacks[actorKey]?.[resilience]
  if (!blueprint) return {}

  // Évaluation des expressions du blueprint
  const vars = { n_csps, m_dcs }
  const stack = evaluateBlueprint(blueprint, vars)

  // Règle : Port = 0 en contexte MPLS — sauf si add_port_mpls activé pour les acteurs DIY
  const isDIY = actor === 'megaport' || actor === 'equinix'
  const forcePort = isDIY && params.add_port_mpls === true
  if (context === 'mpls' && stack.port != null && !forcePort) {
    stack.port = 0
  }

  return stack
}

function evaluateBlueprint(blueprint, vars) {
  const result = {}
  for (const [key, value] of Object.entries(blueprint)) {
    if (typeof value === 'number') {
      result[key] = value
    } else if (typeof value === 'string') {
      result[key] = safeEval(value, vars)
    }
  }
  return result
}

function safeEval(expr, { n_csps, m_dcs }) {
  const substituted = expr
    .replace(/n_csps/g, String(n_csps))
    .replace(/m_dcs/g, String(m_dcs))

  // N'autoriser que les caractères sûrs
  if (!/^[\d\s\+\-\*\/\(\)]+$/.test(substituted)) {
    throw new Error(`Expression non autorisée : ${expr}`)
  }

  try {
    return Math.max(0, Math.round(Function('"use strict"; return (' + substituted + ')')()))
  } catch {
    throw new Error(`Erreur d'évaluation : ${expr}`)
  }
}

/**
 * Retourne tous les use cases disponibles (pour le formulaire)
 */
export function getUseCases() {
  return USE_CASES.map(uc => ({
    id: uc.id,
    label: uc.label,
    description: uc.description,
    icon: uc.icon,
    constraints: uc.constraints ?? {},
    params: uc.params ?? [],
  }))
}
