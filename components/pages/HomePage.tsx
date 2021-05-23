import React, { ReactElement } from 'react'
import { PageModel } from '../../models/PageModel'
import { generateSections } from '../../utils/generateSections'

export function HomePage({ id, sections }: PageModel): ReactElement {
  return <section {...{ id }}>{generateSections(sections)}</section>
}
