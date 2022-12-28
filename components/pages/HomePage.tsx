import { PageModel } from '../../models/PageModel'
import { generateSections } from '../../utils/generateSections'
import React from 'react'

export function HomePage({ id, sections }: PageModel): JSX.Element {
  return <section {...{ id }}>{generateSections(sections)}</section>
}
