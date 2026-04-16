import { useState } from 'react'
import { formatCurrency } from '../../engine/currencyUtils'
import { useLanguage } from '../../i18n/LanguageContext'

export default function BrickBreakdown({ result, color }) {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  if (!result) return null

  const { breakdown = [], missing = [], notes = [] } = result

  const rowCount = breakdown.length + missing.length
  if (rowCount === 0) return null

  const borderColor = {
    orange: 'border-orange-200',
    blue:   'border-blue-200',
    teal:   'border-teal-200',
  }[color] ?? 'border-gray-200'

  const badgeBg = {
    orange: 'bg-orange-50 text-orange-700',
    blue:   'bg-blue-50 text-blue-700',
    teal:   'bg-teal-50 text-teal-700',
  }[color] ?? 'bg-gray-50 text-gray-700'

  return (
    <div className={`border ${borderColor} rounded-lg overflow-hidden text-sm mt-3`}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between px-4 py-2.5 ${badgeBg} font-medium`}
      >
        <span>{t('result.breakdown_title')}</span>
        <span className="flex items-center gap-2">
          {missing.length > 0 && (
            <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
              {missing.length} {t('result.missing_label')}{missing.length > 1 ? 's' : ''}
            </span>
          )}
          <span>{open ? '▲' : '▼'}</span>
        </span>
      </button>

      {open && (
        <div className="bg-white divide-y divide-gray-100">
          {breakdown.map((row, i) => (
            <BrickRow key={i} row={row} />
          ))}
          {missing.map((msg, i) => (
            <div key={i} className="px-4 py-2 flex items-start gap-2 text-red-600 bg-red-50">
              <span>⚠️</span>
              <span className="text-xs">{msg}</span>
            </div>
          ))}
          {notes.map((note, i) => (
            <div key={i} className="px-4 py-2 text-xs text-gray-400 italic">{note}</div>
          ))}
        </div>
      )}
    </div>
  )
}

function BrickRow({ row }) {
  const hasSubRows = row.sub?.length > 0
  const isZero = row.total === 0
  // Detect DC group sub-rows (multi-country): sub items have a `total` field (vs unit-only sub-rows)
  const isDCGroup = hasSubRows && row.sub.some(s => s.total !== undefined)

  return (
    <div className={`px-4 py-2 ${isZero ? 'bg-green-50' : ''}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="text-gray-800 truncate block">{row.label}</span>
          {row.note && (
            <span className="text-xs text-gray-400 italic">{row.note}</span>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          {row.total === null ? (
            <span className="text-red-400 text-xs">—</span>
          ) : (
            <span className={`font-medium ${isZero ? 'text-green-600' : 'text-gray-700'}`}>
              {isZero ? '0 €' : formatCurrency(row.total)}
            </span>
          )}
        </div>
      </div>
      {hasSubRows && isDCGroup && (
        <div className="mt-1 ml-3 space-y-0.5 border-l-2 border-gray-100 pl-2">
          {row.sub.map((sub, i) => (
            <div key={i} className="flex justify-between text-xs text-gray-500">
              <span className="truncate flex-1">{sub.label}</span>
              <span className="ml-2 flex-shrink-0">
                {sub.total != null ? formatCurrency(sub.total) : '—'}
              </span>
            </div>
          ))}
        </div>
      )}
      {hasSubRows && !isDCGroup && (
        <div className="mt-1 ml-3 space-y-0.5">
          {row.sub.map((sub, i) => (
            <div key={i} className="flex justify-between text-xs text-gray-400">
              <span>{sub.label}</span>
              <span>{formatCurrency(sub.unit)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
