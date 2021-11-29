import classNames from './details-table.module.css'

import Dictionary from 'interfaces/utils'

export interface DetailsTablePropsI {
  // TODO: refactor details format to { title, value }[]
  // and add support to show dynamic link
  details: Dictionary<string | number>
}

function DetailsTable(props: DetailsTablePropsI) {
  const { details } = props

  const titles = Object.keys(details)

  return (
    <table className={classNames.detailsTable} cellPadding="0" cellSpacing="0">
      <tbody>
        {titles.map(title => {
          return (
            <tr key={title} className={classNames.detailsTableRow}>
              <td className={classNames.detailsTableCell}>
                <b>{title}</b>
              </td>
              <td className={classNames.detailsTableCell}>{details[title]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export { DetailsTable }
