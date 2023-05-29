import React from 'react'
import * as PropTypes from 'prop-types';
import GridItem from './GridItem';
import * as style from '../../styles/style.module.scss';

type Props = {
  text: string,
  gap: string,
  templateRows: string,
  templateColumns: string,
  templateAreas: string,
  children: React.ReactNode,
}

const Grid:React.FC<Props> = ({text, gap, templateRows, templateColumns, templateAreas, children}: Props) => {
  return (
    <div
      className={`${style.grid}`}
      style={{
        gridTemplateRows: templateRows,
        gridTemplateColumns: templateColumns,
        gridTemplateAreas: templateAreas,
        gap: gap,
      }}
    >
      <GridItem>{text}</GridItem>
      <GridItem>{text}</GridItem>
      {children}
    </div>
  )
}

Grid.propTypes = {
  text: PropTypes.string,
}
Grid.defaultProps = {
  text: 'Hello',
}

export default Grid

