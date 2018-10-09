import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { theme } from '../../theme'

const ProgressBar = ({ color, progress }) => (
  <Spring native from={{ progressValue: 0 }} to={{ progressValue: progress }}>
    {({ progressValue }) => (
      <Main>
        <Base>
          <Progress
            color={color}
            style={{
              width: progressValue.interpolate(t => `${t * 100}%`),
            }}
          />
        </Base>
      </Main>
    )}
  </Spring>
)

ProgressBar.defaultProps = {
  progress: 0,
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

const Main = styled.div`
  width: 100%;
  align-items: center;
`
const Base = styled.div`
  width: 100%;
  height: 8px;
  background: #edf3f6;
  border-radius: 2px;
  text-align: right;
  line-height: 14px;
`
const Progress = styled(animated.div)`
  height: 8px;
  background: ${({ color }) => color || theme.accent};
  border-radius: 2px;
  float: left;
`
export default ProgressBar