import { AlertCircleIcon, CircleCheck, Info, TriangleAlert } from "lucide-react"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type AlertProps = ComponentProps<'div'>

export function Alert({className, children}: AlertProps) {
    return(
        <div className={twMerge('bg-zinc-900 flex items-center space-x-3 w-[450px] px-5 py-3 border border-zinc-700 rounded-lg', className)}>
            {children}
        </div>
    )
}

export type AlertContentProps = ComponentProps<'div'>

export function AlertContent({className, children}: AlertContentProps){
    return(
        <div className={twMerge('ml-1 flex-1', className)}>
            {children}
        </div>
    )
}

export type AlertType = "error" | "success" | "warning" | "info"

export type AlertIconProps = {
  type: AlertType
}

export function AlertIcon( {type}: AlertIconProps) {
    if ( type === "error" ) return <AlertCircleIcon className="size-6 text-red-500" />
    if ( type === "success" ) return <CircleCheck className="size-6 text-emerald-500" />
    if ( type === "warning" ) return <TriangleAlert className="size-6 text-amber-500" />
    if ( type === "info" ) return <Info className="size-6 text-cyan-500" />
}

export type AlertTitle = ComponentProps<'h3'>

export function AlertTitle({className, children}: AlertTitle){
    return(
        <div className={twMerge('text-white font-medium', className)}>
            {children}
        </div>
    )
}

export type AlertDescription = ComponentProps<'p'>

export function AlertDescription({className, children}: AlertDescription){
    return(
        <div className={twMerge('text-zinc-500 text-[13px]', className)}>
            {children}
        </div>
    )
}
