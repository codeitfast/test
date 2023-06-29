import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import ReactDOMServer from 'react-dom/server';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';

function simpleCode(bg, color, text) {
  return (
    ReactDOMServer.renderToStaticMarkup(
      <div style={{ width: '360px', position: 'absolute', right: '0px', bottom: '0px', marginRight: '10px', marginBottom: '10px' }}>
        <iframe src={"https://new-cmd-3gs1.vercel.app/newIframe/" + bg.substring(1) + '/' + color.substring(1) + '/' + text.substring(1)} style={{ border: 'none', minHeight: '400px' }} width="100%"></iframe>
      </div>
    )
  )
}

export default function Download(props) {

  const [selected, setSelected] = useState(false)

  const simple = <SyntaxHighlighter data-prefix="1" lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    wrapLines={true} language="markdown" style={atomOneDark}>{simpleCode(props.bg, props.color, props.text)}</SyntaxHighlighter>

  return (
    <div>
      <button className="btn btn-primary" onClick={() => window.my_modal_2.showModal()}><AiOutlineDownload />Download Popup</button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Download your popup:</h3>
          <p className="py-4 text-sm text-gray-400">(Press ESC key or click outside to close)</p>

          <div>
            <div className="flex items-center justify-center">
              <div className={`btn w-48 h-48 max-w-sm outline outline-2 outline-black rounded-md mr-2 text-center cursor-pointer ${props.selected == 'simple' && "bg-green-400 outline-green-400 bg-opacity-50"}`} onClick={() => setSelected('simple')}>Simple</div>
              <div className={`btn w-48 h-48 max-w-sm outline outline-2 outline-black rounded-md ml-2 text-center cursor-pointer ${props.selected == "advanced" && "bg-green-400 outline-green-400 bg-opacity-50"}`} onClick={() => setSelected('advanced')}>Advanced</div>

            </div>


            <div><h4 className="font-bold text-md">Copy and Paste:</h4>
              <div className="rounded-2xl bg-Atom break-all col-start-1 row-start-1 flex items-start justify-center p-2">
                {selected == 'simple' && simple}

                <div className="p-2 pl-0"><FaRegCopy className="text-2xl ml-4 cursor-pointer text-white" onClick={() => {
                  navigator.clipboard.writeText(simpleCode(props.bg, props.color, props.text))
                }} /></div>

              </div>
            </div>



          </div>
        </form>
        <form method="dialog" className="modal-backdrop" >
          <button>close</button>
        </form>
      </dialog>
    </div>
  )

}