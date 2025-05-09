import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  rowGap?: string
  columnGap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    height: 100%;
    row-gap: ${props => props.rowGap};
    column-gap: ${props => props.columnGap};
`