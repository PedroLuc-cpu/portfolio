import { styled } from "@stitches/react"
import { ComponentProps } from "react"

export const Box = styled('div', {
  padding: "1.5rem",
  borderRadius: "8px",
  backgroundColor: "#202024",
  border: "1px solid #323238"
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = "Box"