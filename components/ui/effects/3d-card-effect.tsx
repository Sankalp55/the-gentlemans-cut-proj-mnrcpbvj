'use client';

import * as React from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type CardItemProps = DivProps & {
  /**
   * Optional translateZ value used by some 3D card implementations.
   * Accepts number (pixels) or string (e.g. '40px').
   */
  translateZ?: number | string;
  as?: React.ElementType;
};

export function CardContainer({ className, ...props }: DivProps) {
  return (
    <div
      className={className}
      style={{ perspective: '1000px' }}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: DivProps) {
  return (
    <div
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    />
  );
}

export function CardItem({
  className,
  translateZ,
  as: Comp = 'div',
  style,
  ...props
}: CardItemProps) {
  const tz =
    typeof translateZ === 'number'
      ? `${translateZ}px`
      : typeof translateZ === 'string'
        ? translateZ
        : undefined;

  return (
    <Comp
      className={className}
      style={{
        ...style,
        transform: tz ? `translateZ(${tz})` : style?.transform,
        transformStyle: 'preserve-3d'
      }}
      {...props}
    />
  );
}
