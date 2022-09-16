import React from 'react'
import { GridComponent, ColumnDirective, Inject, 
Page, Sort, Filter, Selection,ColumnsDirective,Edit, Toolbar} from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import { customersData,customersGrid } from '../Data/dummy'
const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      dataSource={customersData}
      width="auto"
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={{allowEditing:true, allowDeleting:true}}
      toolbar={['Search','Delete']}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Sort, Page,Filter, Toolbar,Selection,]} />

    </GridComponent>
  </div>
  )
}

export default Customers