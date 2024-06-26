import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 100%;
  position: relative;
`

export const Image = styled.div`
  background-size: cover;
  display: block;
  width: 100%;
  height: 218px;
  background-position: center;
`

export const Texts = styled.div`
  position: relative;
  padding: 8px;
  margin-top: -4px;
  border: 1px solid ${cores.laranja};
  border-top: 0px;
  background-color: ${cores.branco};
  height: calc(100% - 214px);
`

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: ${cores.laranja};
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.laranja};
  margin-bottom: 16px;
`

export type TagType = {
  size: 'small' | 'large'
}

export const Tag = styled.p<TagType>`
  font-family: Roboto;
  text-transform: capitalize;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  font-weight: 700;
  line-height: ${(props) => (props.size === 'small' ? '14px' : '16px')};
  text-align: ${(props) => (props.size === 'small' ? 'center' : 'left')};

  display: inline-block;
  background-color: ${cores.laranja};
  padding: 4px 6px;
  color: ${cores.marromClaro};
`

export const Rating = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${cores.laranja};

  img {
    width: 20px;
    height: 20px;
  }
`

export const Emphasis = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  display: flex;
  gap: 8px;
`
