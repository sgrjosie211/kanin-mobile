
/** @jsxImportSource @emotion/react */

import React from 'react'
import clsx from 'clsx'
import { css, useTheme } from '@emotion/react'
import { Theme } from '../../constants/theme'

export type TimelineItemProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  bordercolor?: string
  color?: string
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties
}

export const TimelineItem = ({
  icon,
  bordercolor,
  color,
  children,
  co,
  className,
  ...props
}: TimelineItemProps & React.ComponentPropsWithoutRef<'div'>) => {
  const theme = useTheme() as Theme
  const styles = css({
    display: 'block',
    height: '100%',
    width: '100%',
    '& .icon': {
      position: 'absolute',
      zIndex: 1,
    },
    '& .indicator': {
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: bordercolor,
      },
    },
    '& .indicators': {
      height: '5em',
      '&::after': {
        left: '4px',
        top: '16px',
        height: '40%',
        width: '1px',
        opacity: '100%'
      },
    },
    '&:last-child': {
      '.indicators::after': {
        display: 'none',
      },
    },
    '& .icon-container': {
      position: 'absolute',
      zIndex: 1,
    },
    '& .body': {
      padding: '0.8em 0 1em 2em',
      marginBottom: '1.2em',
      marginTop: '-6.4em',
      width: '100%',
    },
    '& .desc': {
      fontSize: '.8em',
      color: color
    },
    ...(typeof co == 'function' ? co(theme) : co),
  })
  const computedClassNames = clsx(className)
  return (
    <div css={styles} className={computedClassNames} {...props}>
      <div className={`indicators indicator`}>
        <span className={`icon`}>{icon}</span>
      </div>
      <li>
        <div className={`body`}>
          <div className={`desc`}>{children}</div>
        </div>
      </li>
    </div>
  )
}
