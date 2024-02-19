"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSelector({ title, label, child }: { title: React.ReactNode, label: React.ReactNode, child: React.ReactNode }) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuLabel className="text-center">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {child}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
