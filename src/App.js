import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import {Navbar, Footer, SideBar, ThemeSettings} from './components'
import {Ecommerce,Orders,Calendar,ColorMapping,Editor,Employees,Customers,Kanban,Stacked,Line,
Bar, Pie, ColorPicker,Pyramid, Area, Financial} from './Pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'


function App() {
  const {activeMenu, themeSettings, setThemeSettings,currentColor, currentMode} = useStateContext()
  return (
    <div className={currentMode==="dark"?'dark':''}>
       <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
              <TooltipComponent content="Settings" position='top'>
                  <button type="button" 
                  onClick={()=>{setThemeSettings(true)}}
                  className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                  style={{'background':currentColor, 'border-radius':'50%'}}>
                    <FiSettings/>
                  </button>
              </TooltipComponent>

            </div>
            {activeMenu?(
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                 <SideBar/>
            </div>)
            :
            (
            <div className='w-0  dark:bg-secondary-dark-bg'>
              <SideBar/>
            </div>)}
            <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu?'md:ml-72':'flex-2'} `}>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar/>
                 
              </div>
            <div>
              {themeSettings&&<ThemeSettings/>}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce/>}/>
                <Route path="/ecommerce" element={<Ecommerce/>}/>

                {/* Pages */}
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/customers" element={<Customers/>}/>
                
                {/* Apps */}
                <Route path="/kanban" element={<Kanban/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/editor" element={<Editor/>}/>
                <Route path="/color-picker" element={<ColorPicker/>}/>
                {/* Charts */}
                <Route path="/line" element={<Line/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/area" element={<Area/>}/>
                <Route path="/pyramid" element={<Pyramid/>}/>
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/financial" element={<Financial/>}/>
                <Route path="/stacked" element={<Stacked/>}/>
                 <Route path="/color-mapping" element={<ColorMapping/>}/>
              </Routes>
            </div>
            </div>
          </div>
       </BrowserRouter>
    </div>
  )
}

export default App