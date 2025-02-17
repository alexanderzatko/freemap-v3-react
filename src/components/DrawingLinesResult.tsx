import Color from 'color';
import { ElevationChartActivePoint } from 'fm3/components/ElevationChartActivePoint';
import { colors } from 'fm3/constants';
import { useAppSelector } from 'fm3/hooks/reduxSelectHook';
import { ReactElement, useEffect } from 'react';
import { DrawingLineResult } from './DrawingLineResult';

function useLinePointColor() {
  const color =
    useAppSelector((state) =>
      state.main.selection?.type === 'draw-line-poly'
        ? state.drawingLines.lines[state.main.selection.id]?.color
        : state.main.selection?.type === 'line-point'
        ? state.drawingLines.lines[state.main.selection.lineIndex]?.color
        : undefined,
    ) || colors.normal;

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--color-normal', color);

    root.style.setProperty(
      '--color-selected',
      Color(color).lighten(0.75).hex(),
    );
  }, [color]);
}

export function DrawingLinesResult(): ReactElement {
  const lines = useAppSelector((state) => state.drawingLines.lines);

  useLinePointColor();

  return (
    <>
      {lines.map((_, i) => (
        <DrawingLineResult key={i} index={i} />
      ))}

      <ElevationChartActivePoint />
    </>
  );
}
