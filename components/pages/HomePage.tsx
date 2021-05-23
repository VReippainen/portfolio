import { PageModel } from '../../models/PageModel'
import { generateSections } from '../../utils/generateSections'
import React, { ReactElement } from 'react'

export function HomePage({ id, sections }: PageModel): ReactElement {
  return <section {...{ id }}>{generateSections(sections)}</section>
}
