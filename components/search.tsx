import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useState, useEffect } from 'react'



import Searchbar from './search-components/searchbar'
import LoadingMessage from './search-components/loading-message'
import ShowQuestion from './search-components/show-question'
import AiChat from './search-components/ai-chat'
import Sources from './search-components/sources'

export default function Search(props: any) {

  return (
    <div className='flex place-content-center my-4'>
      <div className="w-11/12 max-w-md mx-auto">

        <div className="w-full relative">    
          <Searchbar loadingData={props.loadingData} inputValue={props.inputValue} update={props.update} handleClick={props.handleClick} colors={props.colors}/>
        </div>

        <LoadingMessage loadingData={props.loadingData} data={props.data} placeholder={'start typing to search.... :) '}/>
        <ShowQuestion loadingData={props.loadingData} data={props.data} writtenText={props.writtenText} />
        <AiChat loadingData={props.loadingData} data={props.data} writtenText={props.writtenText} />
        <Sources loadingData={props.loadingData} data={props.data} colors={props.colors} />
        
      </div>
    </div>
  )
}