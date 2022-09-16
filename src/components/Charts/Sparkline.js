import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

const Sparkline = ({
  id,
  height,
  color,
  data,
  width,
  type,
  currentColor
}) => {
  return (
    <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{color:currentColor,width:2}}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]}/>
      </SparklineComponent>
  )  
}
 

 
export default Sparkline;