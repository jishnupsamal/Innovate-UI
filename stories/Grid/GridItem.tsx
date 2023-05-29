import React from 'react'
import * as PropTypes from 'prop-types'
import * as style from '../../styles/style.module.scss'

type Props = {
    sn: React.HTMLAttributes<any>,
    children: React.ReactNode,
}

const GridItem: React.FC<Props> = ({sn=null, children, ...rest}) => {
  return (
    <div style={sn} className={`${style.grid_item}`}>
        {children}
    </div>
  )
}

export default GridItem;