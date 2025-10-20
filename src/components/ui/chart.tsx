"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

// ✅ Fixed type for tooltip payload items
type FixedTooltipPayload = {
  payload?: Record<string, any>
  color?: string
  dataKey?: string
  name?: string
  value?: string | number
}

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) throw new Error("useChart must be used within a <ChartContainer />")
  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ReactElement | React.ReactElement[]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{<>{children}</>}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, cfg]) => cfg.theme || cfg.color)

  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}`
          )
          .join("\n"),
      }}
    />
  )
}

// ✅ Tooltip component using content prop safely
const ChartTooltip = (props: Omit<RechartsPrimitive.TooltipProps<any, any>, "content">) => {
  return <RechartsPrimitive.Tooltip {...props} content={(cProps) => <ChartTooltipContent {...cProps} />} />
}

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
}: {
  active?: boolean
  payload?: FixedTooltipPayload[]
  label?: string | number
  className?: string
}) {
  if (!active || !payload?.length) return null

  return (
    <div className={cn("border-border/50 bg-background rounded-lg border px-2 py-1 text-xs shadow-xl", className)}>
      {payload.map((item, idx) => (
        <div key={idx} className="flex justify-between gap-2">
          <span className="text-muted-foreground">{item.name}</span>
          <span className="text-foreground font-mono font-medium tabular-nums">{item.value}</span>
        </div>
      ))}
      {label !== undefined && <div className="text-sm text-muted-foreground mt-1">{label}</div>}
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
}: {
  className?: string
  hideIcon?: boolean
  payload?: FixedTooltipPayload[]
  verticalAlign?: "top" | "bottom"
}) {
  if (!payload?.length) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1.5">
          {!hideIcon && <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />}
          {item.name}
        </div>
      ))}
    </div>
  )
}

// ✅ Helper to safely extract config
function getPayloadConfigFromPayload(config: ChartConfig, payload: FixedTooltipPayload, key: string) {
  if (!payload) return undefined
  const payloadData = payload.payload ?? {}
  const configKey = key in payloadData ? (payloadData[key] as string) : key
  return config[configKey] ?? config[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
