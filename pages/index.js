/*export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}*/

import { useState } from "react";
import { Navbar } from "@/src/components/navbar.component";
import Button from "@/src/components/button";
import Modal from "@/src/components/modal"
import Image from "next/image";

export default function Home() {
  const[visible, setVisible] = useState(false)
  function onChangeModal(){
    setVisible(!visible)
  }
  return(
    <div>
      <Navbar></Navbar>
      <h1 className={'text-red-500'}>Home</h1>

      <div className="h-screen w-full">
        <Image width={700} height={700} src={'/nextjs.png'}></Image>
      </div>
      <div className="h-screen w-full">
        <Image width={700} height={700} src={'/nextjs2.jpg'}></Image>
      </div>
      <div className="h-screen w-full">
        <Image width={700} height={700} src={'/nextjs3.jpg'}></Image>
      </div>
      
        
      


      {/* <Button
        htmlType={'button'}
        type={'default'}
        onClick={(e) =>{
          console.log(e, 'Button 1')
        }}
      >Button 1</Button>
      <Button
        htmlType={'button'}
        type={'primary'}
        onClick={(e) =>{
          console.log(e, 'Button 2')
        }}
      >Button 2</Button> */}

      <Button
        htmlType={'button'}
        type={'default'}
        onClick={onChangeModal}>
      Open Modal</Button>
      <Modal
        visible={visible}
        onChange={onChangeModal}>
          <div className="w-full flex items-center justify-between">
            <h3>Title Modal</h3>
            <Button
              htmlType={'button'}
              type={'default'}
              onClick={onChangeModal}>
              Close</Button>
          </div>
          <div>

          </div>
      </Modal>
    </div>
  )
}