import * as React from "react"

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Sheet: React.FC<SheetProps> = ({ children, open, onOpenChange, ...props }) => {
  return (
    <div {...props} data-open={open} data-sheet>
      {children}
    </div>
  )
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  side?: "left" | "right"
}

export const SheetContent: React.FC<SheetContentProps> = ({ children, side, ...props }) => {
  return (
    <div {...props} data-side={side}>
      {children}
    </div>
  )
}

export const SheetHeader: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={`sheet-header ${className || ""}`}>{children}</div>
}

export const SheetTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <h2 className={`sheet-title ${className || ""}`}>{children}</h2>
}

export const SheetDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <p className={`sheet-description ${className || ""}`}>{children}</p>
}
